import { memo } from "react"
import { DUMMY_NOTIFICATIONS_TYPES } from "../Organisms/Notifications";

type Props = {
    onClick: () => void;
    data: DUMMY_NOTIFICATIONS_TYPES
}

const NotificationItem = ({ data, ...props }: Props) => {
    const time = new Date(data.timestamp * 1000);
    return (
        <div
            className={`
            flex gap-4 py-3 px-4 rounded-md
            ${!data.isRead
                    ? 'bg-blue-50/50'
                    : ''}
            `}
            {...props}
        >
            <img
                src={data.user.image!}
                alt={data.user.name}
                className="rounded-full h-10"
            />
            <div className="w-fit">
                <p className="font-medium">
                    <a className="text-gray-800 hover:text-blue-700 cursor-pointer">{data.user.name} </a>
                    <span className="text-gray-500 font-normal">{data.action.description} </span>
                    <a className={data.action.isGroup ? 'text-blue-900 font-medium cursor-pointer' : 'text-slate-gray-500 hover:text-blue-700 cursor-pointer'}>
                        {data.action?.name} </a>
                    {
                        !data.isRead
                        && <span className="inline-block h-2 w-2 rounded-full bg-orange-600" />
                    }
                </p>
                <p className="text-gray-400 mb-1">{time.toDateString()}</p>
                {
                    data.action.message
                    && (
                        <a className="text-gray-700 leading-tight hover:text-blue-700 cursor-pointer">
                            <div className="border b-1 p-4 rounded-md hover:bg-blue-100">
                                {data.action.message}
                            </div>
                        </a>
                    )
                }
            </div>
            {
                data.action.image
                &&
                <a className="ml-auto w-full max-w-fit">
                    <img
                        src={data.action.image}
                        alt={data.action.name}
                        className="rounded-md h-10 border hover:border-blue-400 cursor-pointer"
                    />
                </a>
            }
        </div>
    )
}

export default memo(NotificationItem);