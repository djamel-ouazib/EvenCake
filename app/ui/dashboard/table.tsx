import { FaCalendar, FaCalendarCheck } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { FaCheckCircle, FaCogs } from 'react-icons/fa'

import TableSection from './tableSection'
import { motion } from 'motion/react'
const StatusColor = [
    'text-yellow-700 bg-yellow-100 px-4 py-1 rounded-xl cursor-pointer',
    'text-blue-700 bg-blue-100 px-4 py-1 rounded-xl cursor-pointer',
    'text-orange-700 bg-orange-100 px-4 py-1 rounded-xl cursor-pointer',
    'text-green-700 bg-green-100 px-4 py-1 rounded-xl cursor-pointer',
]
export default function Table() {
    return (
        <div className="">
            <table className="min-w-full border border-gray-100 divide-y divide-gray-200 rounded-xl">
                <thead className="">
                    <tr className="">
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Name
                        </th>

                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Email
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Phone Number
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Event
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Type of Cake
                        </th>

                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Number of Servings
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Decoration
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Total Price
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            Deposit Paid
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            target date
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500 leading-8 ">
                            status
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    {/* pending */}
                    <motion.tr
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <td className="bg-yellow-50/5 px-1 " colSpan={11}>
                            <div className="flex gap-1.5 items-center">
                                <span>
                                    <FaRegClock color="yellow " size={14} />
                                </span>{' '}
                                <p className="tracking-wide">Pending</p>
                            </div>
                        </td>
                    </motion.tr>
                    <TableSection
                        status="pending"
                        color={StatusColor[0]}
                        delay={0}
                        duration={0.3}
                    />
                    <TableSection
                        status="pending"
                        color={StatusColor[0]}
                        delay={0.1}
                        duration={0.3}
                    />
                    {/* confiremed */}
                    <motion.tr
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: 0.2,
                        }}
                    >
                        <td className="bg-blue-50 px-1 " colSpan={11}>
                            <div className="flex gap-1.5 items-center">
                                <span>
                                    <FaCalendarCheck color="blue " size={14} />
                                </span>{' '}
                                <p className="tracking-wide">Confirmed</p>
                            </div>
                        </td>
                    </motion.tr>
                    <TableSection
                        status="pending"
                        color={StatusColor[1]}
                        delay={0.3}
                        duration={0.3}
                    />
                    <TableSection
                        status="pending"
                        color={StatusColor[1]}
                        delay={0.4}
                        duration={0.3}
                    />
                    {/* In Production */}
                    <motion.tr
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                    >
                        <td className="bg-red-50 px-1  " colSpan={11}>
                            <div className="flex gap-1.5 items-center ">
                                <span>
                                    <FaCogs color="red " size={14} />
                                </span>{' '}
                                <p className="tracking-wide">In Production</p>
                            </div>
                        </td>
                    </motion.tr>
                    {/* delivred */}
                    <TableSection
                        status="In Production"
                        color={StatusColor[2]}
                        delay={0.6}
                        duration={0.3}
                    />
                    <motion.tr
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            delay: 0.8,
                        }}
                    >
                        <td className="bg-green-50 px-1  " colSpan={11}>
                            <div className="flex gap-1.5 items-center ">
                                <span>
                                    <FaCheckCircle color="green " size={14} />
                                </span>{' '}
                                <p className="tracking-wide">delivred</p>
                            </div>
                        </td>
                    </motion.tr>
                    <TableSection
                        status="delivred"
                        color={StatusColor[3]}
                        delay={1}
                        duration={1}
                    />
                </tbody>
            </table>
        </div>
    )
}
