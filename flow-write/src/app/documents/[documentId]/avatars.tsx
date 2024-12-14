"use client";

import { Separator } from "@/components/ui/separator";
import { ClientSideSuspense } from "@liveblocks/react";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

const AVATAR_SIZE = 36;

interface UserInfo {
    avatar: string;
    name: string;
}

interface AvatarProps {
    user: UserInfo;
    isCurrentUser?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ user, isCurrentUser = false }) => {
    return (
        <div
            style={{
                width: AVATAR_SIZE,
                height: AVATAR_SIZE,
            }}
            className={`group -ml-2 flex shrink-0 place-content-center relative border-4 border-white rounded-full bg-gray-400 ${isCurrentUser ? 'ml-2' : ''
                }`}
        >
            <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity">
                {user.name}
            </div>
            <img
                alt={user.name}
                src={user.avatar}
                className="size-full rounded-full"
            />
        </div>
    );
};

const AvatarStack: React.FC = () => {
    const users = useOthers();
    const currentUser = useSelf();

    if (users.length === 0 && !currentUser) return null;

    return (
        <div className="flex items-center">
            {currentUser && (
                <Avatar
                    user={{
                        avatar: currentUser.info.avatar,
                        name: "You"
                    }}
                    isCurrentUser
                />
            )}

            <div className="flex">
                {users.map(({ connectionId, info }) => (
                    <Avatar
                        key={connectionId}
                        user={{
                            avatar: info.avatar,
                            name: info.name
                        }}
                    />
                ))}
            </div>

            <Separator orientation="vertical" className="h-6 ml-2" />
        </div>
    );
};

export const Avatars: React.FC = () => {
    return (
        <ClientSideSuspense fallback={null}>
            <AvatarStack />
        </ClientSideSuspense>
    );
};

export default Avatars;