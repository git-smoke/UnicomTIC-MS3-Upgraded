"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullscreenLoader } from "@/components/fullscreen-loader";
import { getDocuments, getUsers } from "./actions";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";

type User = {
    id: string;
    name: string;
    avatar: string
}

interface LiveblocksResolveParams {
    userIds?: string[];
    roomIds?: string[];
    text?: string;
}

export const Room: React.FC<{ children: ReactNode }> = ({ children }) => {
    const params = useParams();
    const [users, setUsers] = useState<User[]>([]);
    const documentId = params.documentId as string;

    const fetchUsers = useCallback(async () => {
        try {
            const list = await getUsers();
            setUsers(list);
        } catch {
            toast.error("Failed to fetch users");
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleAuthEndpoint = useCallback(async () => {
        const response = await fetch("/api/liveblocks-auth", {
            method: "POST",
            body: JSON.stringify({ room: documentId })
        });
        return response.json();
    }, [documentId]);

    const resolveUsers = useCallback(({ userIds }: LiveblocksResolveParams) => {
        return userIds?.map(
            (userId) => users.find((user) => user.id === userId) ?? undefined
        ) ?? [];
    }, [users]);

    const resolveMentionSuggestions = useCallback(({ text }: LiveblocksResolveParams) => {
        const filteredUsers = text
            ? users.filter((user) =>
                user.name.toLowerCase().includes(text.toLowerCase())
            )
            : users;

        return filteredUsers.map((user) => user.id);
    }, [users]);

    const resolveRoomsInfo = useCallback(async ({ roomIds }: LiveblocksResolveParams) => {
        if (!roomIds) return [];

        const documents = await getDocuments(roomIds as Id<"documents">[]);
        return documents.map((document) => ({
            id: document.id,
            name: document.name,
        }));
    }, []);

    return (
        <LiveblocksProvider
            throttle={16}
            authEndpoint={handleAuthEndpoint}
            resolveUsers={resolveUsers}
            resolveMentionSuggestions={resolveMentionSuggestions}
            resolveRoomsInfo={resolveRoomsInfo}
        >
            <RoomProvider id={documentId} initialStorage={{
                leftMargin: 56, rightMargin: 56
            }}>
                <ClientSideSuspense fallback={<FullscreenLoader label="Room loading..." />}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
};

export default Room;