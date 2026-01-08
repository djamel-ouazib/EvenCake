type Props = {
    title: string
    value: number
}
export default function StatCard({ title, value }: Props) {
    return (
        <div className="flex flex-col flex-1  justify-center  ">
            <h2 className="text-zinc-700 mb-1">{title}</h2>
            <p className="text-black font-medium text-[18px]"> {value}</p>
        </div>
    )
}
