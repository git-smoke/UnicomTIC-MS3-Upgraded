"use server"

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

// Create a centralized client to avoid repeated instantiation
const convexClient = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Define a type for user mapping to improve type safety
interface UserInfo {
    id: string;
    name: string;
    avatar: string;
}

// Helper function to extract user name with fallback
const getUserName = (user: {
    fullName?: string | null,
    primaryEmailAddress?: { emailAddress?: string } | null
}): string =>
    user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";

export async function getDocuments(ids: Id<"documents">[]) {
    try {
        return await convexClient.query(api.documents.getByIds, { ids });
    } catch (error) {
        console.error("Failed to fetch documents:", error);
        return [];
    }
}

export async function getUsers(): Promise<UserInfo[]> {
    try {
        const { sessionClaims } = await auth();

        // Early return if no organization ID is available
        if (!sessionClaims?.org_id) {
            console.warn("No organization ID found");
            return [];
        }

        const clerk = await clerkClient();
        const response = await clerk.users.getUserList({
            organizationId: [sessionClaims.org_id]
        });

        return response.data.map((user): UserInfo => ({
            id: user.id,
            name: getUserName(user),
            avatar: user.imageUrl,
        }));
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return [];
    }
}