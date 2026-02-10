'use client'
import { useEffect, useState } from 'react'
import { Customer } from '@/app/generated/prisma/client'

export default function Table() {
    const [customers, setCustomers] = useState<Customer[]>([])

    useEffect(() => {
        const fetchCustomers = async () => {
            const res = await fetch('/api')
            if (!res.ok) {
                console.error('API error')
                return
            }
            const data = await res.json()
            setCustomers(data)
        }

        fetchCustomers()
    }, [])

    console
    return (
        <div>
            <div>
                <div className="grid grid-cols-10 bg-gray-50 font-semibold border-b py-2 px-1 text-center">
                    <span>First Name</span>
                    <span>Last Name</span>
                    <span>Email</span>
                    <span>Phone</span>
                    {/* <span>Date</span> */}
                    <span>Cake</span>
                    <span>Flavors</span>
                    <span>Decoration</span>
                    <span>Servings</span>
                    <span>Total</span>
                    <span>Deposit</span>
                    {/* <span>Status</span> */}
                </div>

                {customers.map((customer) => (
                    <div
                        key={customer.id}
                        className="grid grid-cols-10 bg-white border-b py-3 px-0.5 text-sm text-center cursor-pointer hover:bg-gray-100"
                    >
                        <span>{customer.firstName}</span>
                        <span>{customer.lastName}</span>
                        <span>{customer.email}</span>
                        <span>{customer.phoneNumber}</span>
                        {/* <span>{customer.eventDate}</span> */}
                        <span>{customer.typeOfCake}</span>
                        <span>{customer.flavors}</span>
                        <span>{customer.decoration || '-'}</span>
                        <span>{customer.numberOfServings}</span>
                        <span>{customer.totalPrice} €</span>
                        <span>{customer.depositPaid} €</span>
                        {/* <span>{customer.status}</span> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
