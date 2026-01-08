import CustomersCards from '../ui/dashboard/CustomersCards'
import MonthlyRevenueChart from '../ui/dashboard/MonthlyRevenueChart'
import StatWrapperCard from '../ui/dashboard/statWrapperCard'

export default function Dashboard() {
    return (
        <main className="text-zinc-600px-4 py-2 ">
            <h1 className="text-3xl  py-4 mb-3 w-[95%] m-auto">
                Dashboard overview
            </h1>
            <div className="flex flex-col px-3 justify-center items-center  h-143">
                <div className="flex-1 w-full">
                    <StatWrapperCard />
                </div>
                <div className="flex flex-3  ">
                    <MonthlyRevenueChart />
                    <CustomersCards />
                </div>
            </div>
        </main>
    )
}
