type Props = {
    id: string
    placeHolder: string
    type: string
    name:string
}
export default function Input({ id, placeHolder, type,name }: Props) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeHolder}
            className="border border-zinc-400  rounded-[5px] px-1.5 py-2 block w-full mt-2"
        />
    )
}
