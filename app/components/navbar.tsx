'use client'


import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/iqralogo.png'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    //   const router = useRouter()
    const router = {
        pathname: '/'
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        { href: '/', label: 'About' },
        { href: '/', label: 'Categories' },
        { href: '/', label: 'Blog' },
        { href: '/', label: 'Contact' },
    ]

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/" className="flex items-center py-4 px-2">
                                {/* <span className="font-semibold text-gray-500 text-lg">Logo</span> */}
                                <Image src={logo} alt="Logo" width={100} height={100} />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`py-4 px-2 text-gray-500 font-semibold hover:text-[#1A44EC] transition duration-300 ${router.pathname !== item.href ? 'text-[#1A44EC] border-b-4 border-[#1A44EC]' : ''
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex gap-5'>
                        <button className="hidden my-3 md:block py-2 px-6 bg-[#1A44EC] text-white font-semibold rounded-lg hover:bg-[#1A44EC] transition duration-300">
                            Sign In
                        </button>
                        <button className="hidden my-3 md:block py-2 px-6 bg-[#1A44EC] text-white font-semibold rounded-lg hover:bg-[#1A44EC] transition duration-300">
                            Sign Up
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6 text-gray-500 hover:text-[#1A44EC]"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`block py-2 px-4 text-sm hover:bg-[#1A44EC] hover:text-white transition duration-300 ${router.pathname === item.href ? 'bg-[#1A44EC] text-white' : 'text-gray-500'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-5 gap-5 flex flex-co mb-">
                    <button className="py-2 px-4 bg-[#1A44EC] mx-4 text-white font-semibold rounded-lg hover:bg-[#a5b0da] transition duration-300">
                        Sign In
                    </button>
                    <button className="py-2 px-4 bg-[#1A44EC] mx-4 text-white font-semibold rounded-lg hover:bg-[#a8b2da] transition duration-300">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
