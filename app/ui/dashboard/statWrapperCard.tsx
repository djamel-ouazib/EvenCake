'use client'
import StatCard from './statCard'
import { useEffect, useState } from 'react'

export default function StatWrapperCard() {
    const [totalCustumer, setTotalCustomer] = useState<number | null>(null)
    const [totalRevenue, setTotalRevenue] = useState<number | null>(null)

    useEffect(() => {
        const FetchTotalCustomers = async () => {
            try {
                const res = await fetch('/api/customers/totalcustomers')
                if (!res.ok) {
                    throw new Error('API fetchtotalcustomers error!')
                }
                const data = await res.json()
                setTotalCustomer(data)
            } catch (error) {
                console.error(error)
            }
        }

        const FetchTotalRevenue = async () => {
            try {
                const res = await fetch('/api/customers/totalRevenue')
                if (!res.ok) {
                    throw new Error('Api fetchRevenue error !')
                }
                const dataRevenue = await res.json()
                console.log('total revenus is :', dataRevenue)
                setTotalRevenue(dataRevenue)
            } catch (error) {
                console.error(error)
            }
        }
        FetchTotalCustomers()
        FetchTotalRevenue()
    }, [])

    return (
        <div className="flex  m-auto justify-center py-3 px-2 items-center border border-gray-200">
            <StatCard title={'Total Revenue'} value={totalRevenue} />
            <StatCard title={'Total Customers'} value={totalCustumer} />
            <StatCard title={'Total Orders'} value={17} />
            <StatCard title={'Total Events'} value={12} />
        </div>
    )
}
