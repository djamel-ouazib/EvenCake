import Link from 'next/link'

import { FaHome, FaPlus, FaUser, FaCalendarAlt } from 'react-icons/fa'

const Links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: FaHome,
        color: '364153 ',
    },
    {
        name: 'New Order',
        href: '/dashboard/NewOrder',
        icon: FaPlus,
        color: '#4f39f6 ',
    },
    {
        name: 'Customers',
        href: '/dashboard/customers',
        icon: FaUser,
        color: 'black ',
    },
    {
        name: 'Events',
        href: '/dashboard/events',
        icon: FaCalendarAlt,
        color: 'black ',
    },
]
type Props = {
    show: boolean
}
export default function NavLinks({ show }: Props) {
    return (
        <>
            {show &&
                Links.map((link) => {
                    const LinkIcon = link.icon

                    return (
                        <div className=" ">
                            <Link
                                key={link.name}
                                href={link.href}
                                className={
                                    link.href === '/dashboard/NewOrder'
                                        ? 'flex gap-2 items-center p-1.5 mt-3 hover:bg-indigo-100 rounded-[5px]'
                                        : 'flex gap-2 items-center p-1.5 mt-3 hover:bg-zinc-100 rounded-[5px]'
                                }
                            >
                                <LinkIcon
                                    className="w-4 h-3"
                                    color={link.color}
                                />
                                <p
                                    className={`${
                                        link.href === '/dashboard/NewOrder'
                                            ? 'hidden md:block text-indigo-600 text-[13px] '
                                            : 'text-gray-700 text-[13px]  tracking-wide '
                                    }`}
                                >
                                    {link.name}
                                </p>
                            </Link>
                        </div>
                    )
                })}
        </>
    )
}
