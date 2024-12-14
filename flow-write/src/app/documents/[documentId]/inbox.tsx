"use client"
import { BellIcon } from "lucide-react"
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui"
import { useInboxNotifications } from "@liveblocks/react"
import { ClientSideSuspense } from "@liveblocks/react"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export const Inbox = () => {
    return (
        <ClientSideSuspense fallback={null}>
            <InboxMenu />
        </ClientSideSuspense>
    )
}

const InboxMenu = () => {

    const { inboxNotifications } = useInboxNotifications();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="relative"
                    size="icon"
                >
                    <BellIcon className="size-5" />
                </Button>
            </DropdownMenuTrigger>

        </DropdownMenu>
    );
}