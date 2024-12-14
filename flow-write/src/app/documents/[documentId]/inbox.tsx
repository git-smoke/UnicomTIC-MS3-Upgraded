"use client"
import { BellIcon } from "lucide-react"
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui"
import { ClientSideSuspense } from "@liveblocks/react"

export const Inbox = () => {
    return (
        <ClientSideSuspense fallback={null}>
            <InboxMenu />
        </ClientSideSuspense>
    )
}

const InboxMenu = () => {
    return (

    );
}