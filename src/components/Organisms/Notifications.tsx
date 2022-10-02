import { memo, useReducer, useState } from "react"
import NotificationItem from "../Molecules/NotificationItem";

export type DUMMY_NOTIFICATIONS_TYPES = {
    id: number,
    user: {
        name: string,
        image?: string,
    },
    action: {
        description: string,
        name?: string,
        message?: string,
        image?: string,
        isGroup?: boolean,
    },
    isRead: boolean,
    timestamp: number
}

const DUMMY_NOTIFICATIONS: DUMMY_NOTIFICATIONS_TYPES[] = [
    {
        id: 8979123281322,
        user: {
            name: "Mark Webber",
            image: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
        },
        action: {
            description: "reacted to your recent post",
            name: "My first tournament today!"
        },
        isRead: false,
        timestamp: 1662772728
    },
    {
        id: 2173892177923,
        user: {
            name: "Angela gary",
            image: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
        },
        action: {
            description: "followed you",
        },
        isRead: false,
        timestamp: 1664184819
    },
    {
        id: 2171892177923,
        user: {
            name: "Rizky Hasanuddin",
            image: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
        },
        action: {
            description: "has joined your group",
            name: "Chess Club",
            isGroup: true,
        },
        isRead: false,
        timestamp: 1664184819
    },
    {
        id: 2173892177913,
        user: {
            name: "Jacob Thompson",
            image: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
        },
        action: {
            description: "sent you a private message",
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        },
        isRead: false,
        timestamp: 1664184819
    },
    {
        id: 2173892197913,
        user: {
            name: "Kimberly Smith",
            image: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
        },
        action: {
            description: "Commented on your picture",
            image: "https://randomuser.me/api/portraits/thumb/women/70.jpg"
        },
        isRead: false,
        timestamp: 1664184819
    },
];

type NotificationAction = {
    type: "all" | "id";
    payload?: number;
};

const notificationsReducer = (
    state: DUMMY_NOTIFICATIONS_TYPES[],
    action: NotificationAction
): DUMMY_NOTIFICATIONS_TYPES[] => {
    switch (action.type) {
        case 'all':
            return state.map((item) => {
                item.isRead = true;
                return item;
            });
        case 'id':
            return state.map((item) => {
                if (item.id === action?.payload) item.isRead = true;
                return item;
            });
        default:
            return state;
    }
}

const Notifications = () => {
    const [notificationsData, notificationsDispatch] =
        useReducer(notificationsReducer, DUMMY_NOTIFICATIONS);

    return (
        <div className="px-4 py-6">
            <header className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Notifications</h2>
                <span className="bg-blue-900 font-bold px-3 py-[2px] h-fit text-white rounded-md">
                    {notificationsData.filter(({ isRead }) => !isRead).length}
                </span>
                <button
                    className="bg-none text-gray-500 ml-auto text-right"
                    onClick={
                        () => notificationsDispatch({ type: "all" })
                    }
                >
                    Mark all as read
                </button>
            </header>
            <main className="flex flex-col py-8 gap-3">
                {
                    notificationsData.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            data={notification}
                            onClick={
                                () =>
                                    notificationsDispatch({
                                        type: "id",
                                        payload: notification.id
                                    })
                            }
                        />
                    ))
                }
            </main>
        </div>
    )
}

export default memo(Notifications);