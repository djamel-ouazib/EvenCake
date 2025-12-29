type Props = {
    label: string
    placeHolder: string
    type: string
}
export default function Input({ label, placeHolder, type }: Props) {
    return (
        <input
            type={type}
            id={label}
            placeholder={placeHolder}
            className="border border-zinc-400  rounded-[5px] px-1.5 py-2 block w-full mt-2"
        />
    )
}
