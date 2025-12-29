import { FaCalendar } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'

export default function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-100 divide-y divide-gray-200 rounded-xl">
                <thead>
                    <tr>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Name
                        </th>

                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Email
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Phone Number
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Event
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Type of Cake
                        </th>

                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Number of Servings
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Decoration
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Total Price
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            Deposit Paid
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            target date
                        </th>
                        <th className="px-4 py-1 text-left text-[13px] font-normal text-gray-500">
                            status
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                        <td className="bg-blue-50 px-1 " colSpan={11}>
                            <div className="flex gap-1.5 items-center">
                                <span>
                                    <FaRegClock color="#155dfc " size={14} />
                                </span>{' '}
                                <p>Pending</p>
                            </div>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-700">
                            Alice
                        </td>

                        <td className="px-4 py-3 text-sm font-medium text-gray-700">
                            <a href="mailto:alice@example.com">
                                alice@example.com
                            </a>
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
                        <td className="px-4 py-3 text-sm text-gray-700">
                            <span className="text-blue-600 bg-blue-100 px-4 py-1 rounded-xl">
                                pending
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
