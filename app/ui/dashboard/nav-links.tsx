import Link from 'next/link'

import { FaHome, FaPlus, FaUser, FaCalendarAlt } from 'react-icons/fa'

const Links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: FaHome,
        color: '#4a5565 ',
    },
    {
        name: 'New Order',
        href: '/dashboard/NewOrder',
        icon: FaPlus,
        color: 'blue ',
    },
    {
        name: 'Customers',
        href: '/dashboard/customers',
        icon: FaUser,
        color: '#4a5565  ',
    },
    {
        name: 'Events',
        href: '/dashboard/events',
        icon: FaCalendarAlt,
        color: '#4a5565   ',
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
                        <div>
                            <Link
                                key={link.name}
                                href={link.href}
                                className={
                                    link.href === '/dashboard/NewOrder'
                                        ? 'flex gap-2 items-center p-1.5 mt-3 hover:bg-indigo-100 rounded-[5px] font-semibold'
                                        : 'flex gap-2 items-center p-1.5 mt-3 hover:bg-zinc-200 rounded-[5px] font-semibold'
                                }
                            >
                                <LinkIcon
                                    className="w-4 h-4"
                                    color={link.color}
                                />
                                <p
                                    className={`${
                                        link.href === '/dashboard/NewOrder'
                                            ? 'hidden md:block text-blue-600 text-[13px] '
                                            : 'text-zinc-600 text-[14px] tracking-wide ml-0.5 '
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
