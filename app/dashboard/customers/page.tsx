'use client'
import Table from '@/app/ui/dashboard/table'
import { motion } from 'motion/react'
export default function customers() {
    return (
        <main className="text-gray-600  ">
            <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
            >
                <Table />
            </motion.div>
        </main>
    )
}
