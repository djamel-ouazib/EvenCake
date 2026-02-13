'use client'

import { Customer } from '@/app/generated/prisma/client'

import { useEffect, useState } from 'react'
import RowSkeleton from './Skeletones/RowSkeleton'

const status = {
    PENDING: '#FFB224',
    CONFIRMED: '#99CEFF',
    IN_PROGRESS: '#793AAF',
    READY: '#0060D1',
    DELIVERED: '#45DEC4',
    CANCELED: '#DA3036',
    REFUNDED: '#666666',
}

export default function Table() {
    const [customers, setCustomers] = useState<Customer[]>([])
    const [loading, setLoading] = useState(true)
    const [openId, setOpenId] = useState<number | null>(null)
    useEffect(() => {
        fetchCustomers()
    }, [])
    const handlUpedateStatus = async (id: number, key: string) => {
        setOpenId(null)

        const updated = await UpdateStatus(id, key)

        if (!updated) return

        setCustomers((prev) => prev.map((c) => (c.id === id ? updated : c)))
    }

    const fetchCustomers = async () => {
        try {
            const res = await fetch('/api')
            if (!res.ok) throw new Error('API error')
            const data = await res.json()
            setCustomers(data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    const UpdateStatus = async (id: number, status: string) => {
        const res = await fetch('/api/customers/update-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status }),
        })

        if (!res.ok) {
            console.error('Update failed')
            return null
        }

        return await res.json()
    }

    return (
        <div>
            {openId ? (
                <div
                    className="fixed h-screen w-full bg-black/30 z-20"
                    onClick={() => {
                        setOpenId(null)
                    }}
                ></div>
            ) : null}
            <div>
                <div className="grid grid-cols-[1fr_1fr_2fr_1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] bg-gray-50 font-semibold border-b py-2 px-1 text-center">
                    <span>First Name</span>
                    <span>Last Name</span>
                    <span>Email</span>
                    <span>Phone</span>
                    <span>Date</span>
                    <span>Cake</span>
                    <span>Flavors</span>
                    <span>Decoration</span>
                    <span>Servings</span>
                    <span>Total</span>
                    <span>Deposit</span>
                    <span>Status</span>
                </div>

                {loading ? (
                    <RowSkeleton />
                ) : (
                    customers.map((customer) => (
                        <div
                            key={customer.id}
                            className="grid grid-cols-[1fr_1fr_2fr_1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]
 bg-white border-b py-3 px-0.5 text-sm text-center  hover:bg-gray-100"
                        >
                            <span>{customer.firstName}</span>
                            <span>{customer.lastName}</span>
                            <span className="truncate overflow-hidden whitespace-nowrap">
                                {customer.email}
                            </span>
                            <span className="truncate">
                                {customer.phoneNumber}
                            </span>
                            <span>
                                {customer.eventDate
                                    ? new Date(
                                          customer.eventDate
                                      ).toLocaleDateString('fr-FR')
                                    : '-'}
                            </span>

                            <span>{customer.typeOfCake}</span>
                            <span>{customer.flavors}</span>
                            <span>{customer.decoration || '-'}</span>
                            <span>{customer.numberOfServings}</span>
                            <span>{customer.totalPrice} €</span>
                            <span>{customer.depositPaid} €</span>
                            <span className="relative">
                                <button
                                    className=" p-1 cursor-pointer "
                                    onClick={() => {
                                        setOpenId(customer.id)
                                    }}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <div
                                            className="w-2.5 h-2.5 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    status[
                                                        customer.status as keyof typeof status
                                                    ],
                                            }}
                                        />
                                        <span>
                                            {customer.status.toLowerCase()}
                                        </span>
                                    </div>
                                </button>
                                {openId === customer.id ? (
                                    <div className="absolute w-full z-50">
                                        <ul className="bg-gray-50 border border-gray-200 text-sm p-2 rounded-[10px]">
                                            {Object.entries(status).map(
                                                ([key, value]) => (
                                                    <li
                                                        key={key}
                                                        style={{ color: value }}
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                handlUpedateStatus(
                                                                    customer.id,
                                                                    key
                                                                )
                                                            }
                                                            className="py-1  hover:bg-gray-200 rounded-[5px] font-semibold w-full cursor-pointer"
                                                        >
                                                            {key}
                                                        </button>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ) : null}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
