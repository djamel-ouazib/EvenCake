'use client'

import Modal from '@/app/ui/dashboard/modal'
import RowSkeleton from '@/app/ui/dashboard/Skeletones/RowSkeleton'
import { AnimatePresence } from 'motion/react'

import { useState } from 'react'

export default function Events() {
    const [show, setShow] = useState<boolean>(true)

    return (
        <main className="text-zinc-600 px-4 py-2 ">
            <p>Events</p>
            <RowSkeleton />
            <button
                className="mt-1 bg-black text-white px-5 py-1 rounded-xl"
                onClick={() => setShow(!show)}
            >
                show
            </button>
            <AnimatePresence>{show && <Modal />}</AnimatePresence>
        </main>
    )
}
