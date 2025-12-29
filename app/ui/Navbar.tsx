import { motion, scale } from 'motion/react'
import Link from 'next/link'

const NavbarItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/Features' },
    { label: 'Pricing', href: '/Pricing' },
    { label: 'Contact', href: '/Contact' },
]
export default function Navbar() {
    return (
        <nav className="flex items-center py-4">
            <div className="flex-2">
                <span className="text-3xl text-pink-600">CakeEvent</span>
            </div>

            <div className="flex-1">
                <ul className="flex justify-center items-center  gap-2 flex-1">
                    {NavbarItems.map((item, index) => (
                        <motion.li
                            whileHover={{ color: 'black' }}
                            key={index}
                            className=" px-4 py-2 rounded-[7px] text-gray-500 font-mono"
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-2 justify-center items-center">
                <Link href={'/dashboard'}>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ background: 'darker(1)' }}
                        className="bg-pink-500 px-4 py-2 cursor-pointer rounded-[7px] font-mono text-gray-200 "
                    >
                        Open app
                    </motion.button>
                </Link>
            </div>
        </nav>
    )
}
