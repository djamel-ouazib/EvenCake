'use client'
import { motion } from 'motion/react'
import Navbar from './ui/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { audio } from 'motion/react-client'

export default function Home() {
    return (
        <div>
            <main className="max-w-6xl  m-auto">
                <Navbar></Navbar>
                <section className="p-7 mt-7">
                    <h1 className="text-6xl text-gray-900 w-[70%] text-center  m-auto font-semibold leading-17">
                        Manage Your Cake Orders & Events Effortlessly
                    </h1>
                    <p className="text-gray-600 w-[70%] text-center m-auto mt-7 text-[18px] font-medium">
                        EvenCake helps cake designers and pastry businesses
                        organize orders, track production, and deliver on time —
                        all in one simple dashboard.
                    </p>
                    <div className="flex justify-center py-12 items-center">
                        <Link href={'/dashboard'}>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ background: 'darker(1)' }}
                                className="bg-blue-700 px-18 py-3 cursor-pointer rounded-[7px] font-medium text-gray-200 "
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>
                </section>
                <section className="relative w-full h-[60vh]">
                    <Image
                        src="/Banner.png"
                        alt="EvenCake banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </section>
            </main>
        </div>
    )
}
