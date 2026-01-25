import { FaBars } from 'react-icons/fa'
import NavLinks from './nav-links'
import { useEffect } from 'react'
import { PanelLeft } from 'lucide-react'

type Props = {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidenav({ show, setShow }: Props) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.ctrlKey && e.key.toLowerCase() === 'b') {
                e.preventDefault()
                setShow((prev) => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    return (
        <div className="p-2 flex flex-col text-zinc-800">
            <div className=" flex items-center">
                {show && (
                    <div className="flex gap-2 items-center flex-3 hover:bg-zinc-100 cursor-pointer py-1 px-3 rounded-[7px]">
                        <span className="w-5 h-[20px] rounded-[20px] bg-green-300"></span>
                        <p className="text-zinc-600 font-bold">djamel ouazib</p>
                    </div>
                )}
                <PanelLeft
                    color="#364153 "
                    size={16}
                    className="cursor-pointer flex-1"
                    onClick={() => setShow(!show)}
                />
            </div>
            <NavLinks show={show} />
        </div>
    )
}
