'use client'
import { motion } from 'motion/react'
import Sidenav from '../ui/dashboard/sidenav'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [show, setShow] = useState<boolean>(true)
    return (
        <div className="flex  p-2">
            <motion.div
                animate={{ width: show ? '16rem' : '3rem' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="w-65 h-screen "
            >
                <Sidenav show={show} setShow={setShow} />
            </motion.div>

            <div className="h-screen overflow-hidden w-full bg-white border border-zinc-300 rounded-[7px]">
                {children}
            </div>
        </div>
    )
}
