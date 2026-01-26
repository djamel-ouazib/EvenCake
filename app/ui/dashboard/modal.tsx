import { motion } from 'motion/react'

export default function Modal() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-100 h-100 shadow-lg rounded-xl border border-zinc-200 px-2 py-6.5 flex flex-col relative left-24 top-9 origin-top-left"
        >
            <h2 className="text-xl text-black mb-4">Beautiful Modal</h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-4 text-gray-800 "
            >
                This is a beautiful animated modal with smooth entrance and exit
                animations. Click outside or press Escape to close.
            </motion.p>
            <h3 className="mb-1 text-black">Features:</h3>
            <ul></ul>
        </motion.div>
    )
}
