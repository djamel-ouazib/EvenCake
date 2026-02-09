'use client'
import { GET } from '@/app/api/route'
import { order } from '@/app/lib/difinitions'
import Modal from '@/app/ui/dashboard/modal'
import { AnimatePresence, motion } from 'motion/react'
import { data } from 'motion/react-client'
import { useEffect, useState } from 'react'

export default function Events() {
    const [show, setShow] = useState<boolean>(true)
    const [customers, setCustomers] = useState<order[]>([])
    useEffect(() => {
        const FetchCustomers = async () => {
            const res = await fetch('/api')
            const data = await res.json()
            setCustomers(data)
        }
        FetchCustomers()
    }, [])

    return (
        <main className="text-zinc-600 px-4 py-2 ">
            <p>Events</p>
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>{customer.depositPaid}</li>
                ))}
            </ul>
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
