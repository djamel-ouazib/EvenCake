import { div } from 'motion/react-client'
import StatCard from './statCard'

export default function StatWrapperCard() {
    return (
        <div className="flex  m-auto justify-center py-3 px-2 items-center border border-gray-200">
            <StatCard title={'Total Revenue'} value={11289} />
            <StatCard title={'Total Customers'} value={8} />
            <StatCard title={'Total Orders'} value={17} />
            <StatCard title={'Total Events'} value={12} />
        </div>
    )
}
