import InfoIcon from '@/app/icons/informationIcon'
import StatCardSkeleton from './Skeletones/StatCardSkeleton'

type Props = {
    title: string
    value: number | null
}
export default function StatCard({ title, value }: Props) {
    if (value === null) return <StatCardSkeleton />
    return (
        <div className="flex flex-col flex-1  justify-center  ">
            <div className="flex gap-2 items-center">
                <h2 className="text-zinc-600 mb-1 text-sm">{title}</h2>
                <span className="cursor-pointer">
                    {' '}
                    <InfoIcon />
                </span>
            </div>
            <p className="text-black font-semibold text-[20px]">
                {' '}
                {value} {title === 'Total Revenue' ? '$' : null}
            </p>
        </div>
    )
}
