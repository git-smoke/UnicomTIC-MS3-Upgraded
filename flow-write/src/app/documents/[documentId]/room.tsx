"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { DocumentInput } from './document-input';

export function Room({ children }: { children: ReactNode }) {

    const params = useParams();

    return (
        <LiveblocksProvider publicApiKey={"pk_dev_59y79EU3l7qUKP_DO0uUjoH8jrjM9ZaoEtT5GXugvrjPfbGEi-1QM8xwwAO2M2-Y"}>
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}