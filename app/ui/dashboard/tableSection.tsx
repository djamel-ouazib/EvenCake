'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import { FaCalendar } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
type Props = {
    status: string
    color: string
    delay: number
    duration: number
}
export default function TableSection({
    status,
    color,
    delay,
    duration,
}: Props) {
    const [updateStatus, setUpdateStatus] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <>
            <motion.tr
                className="hover:bg-gray-50 relative z-0"
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                    delay: delay,
                }}
            >
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    Alice
                </td>

                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    <a href="mailto:alice@example.com">alice@example.com</a>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    +33 6 12 34 56 78
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    Birthday
                </td>
                <td className="px-4 py-3 text-[14px] font-medium text-gray-700">
                    Layer Cake
                </td>

                <td className="px-4 py-3 text-sm font-medium text-gray-700 text-center">
                    12
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    Flowers
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    120€
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                    Yes
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 flex items-center gap-1">
                    <FaCalendar size={13} />
                    <span> 12/01/2026</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 ">
                    <button className={`${color} z-0`} onClick={()=>setShowModal(!showModal)}>{status}</button>
                    {showModal  ? (
                        <div className="w-[120px] h-[110px] bg-gray-50 p-2 absolute rounded-2xl mt-2 flex flex-col z-auto">
                            <p className="text-center flex-1 cursor-pointer hover:bg-gray-200 rounded-[5px] text-yellow-600 font-semibold">pending</p>
                            <p className="text-center flex-1 cursor-pointer hover:bg-gray-200 rounded-[5px] text-blue-600 font-semibold">confirmed</p>
                            <p className="text-center flex-1 cursor-pointer hover:bg-gray-200 rounded-[5px] text-orange-600 font-semibold">In Production </p>
                            <p className="text-center flex-1 cursor-pointer hover:bg-gray-200 rounded-[5px] text-green-600 font-semibold">delivred</p>

                        </div>
                    ) : null}
                </td>
            </motion.tr>
        </>
    )
}
