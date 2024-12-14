"use client"

import { BellIcon } from "lucide-react"
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui"
import { useInboxNotifications } from "@liveblocks/react/suspense"
import { ClientSideSuspense } from "@liveblocks/react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const NotificationBadge: React.FC<{ count: number }> = ({ count }) => (
    <span className="absolute -top-1 -right-1 size-4 rounded-full bg-sky-500 text-xs text-white flex items-center justify-center">
        {count}
    </span>
);

const EmptyNotificationState: React.FC = () => (
    <div className="p-2 w-[400px] text-center text-sm text-muted-foreground">
        No notifications
    </div>
);

const InboxMenu: React.FC = () => {
    const { inboxNotifications } = useInboxNotifications();
    const hasNotifications = inboxNotifications.length > 0;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative"
                    size="icon"
                >
                    <BellIcon className="size-5" />
                    {hasNotifications && <NotificationBadge count={inboxNotifications.length} />}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-auto">
                {hasNotifications ? (
                    <InboxNotificationList>
                        {inboxNotifications.map((notification) => (
                            <InboxNotification
                                key={notification.id}
                                inboxNotification={notification}
                            />
                        ))}
                    </InboxNotificationList>
                ) : (
                    <EmptyNotificationState />
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export const Inbox: React.FC = () => (
    <ClientSideSuspense fallback={null}>
        <InboxMenu />
    </ClientSideSuspense>
);

export default Inbox;