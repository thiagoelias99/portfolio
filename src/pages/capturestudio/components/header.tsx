import React from 'react'

export default function Header() {
    return (
        <header
            className='w-screen max-w-[1040px] m-auto h-20 px-4 mt-4 bg-white flex flex-row justify-between items-center'
        >

                <p
                    className='text-[#2B3D4F] text-[1.75rem]'
                >Capture Studio</p>
                <nav>
                    <ul className='flex flex-row justify-center items-center gap-10'>
                        <StyledLi selected>Home</StyledLi>
                        <StyledLi>Services</StyledLi>
                        <StyledLi>About Us</StyledLi>
                        <StyledLi>Portfolio</StyledLi>
                    </ul>
                </nav>
                <button className='text-[#BF3A2B] text-xl border-2 border-[#BF3A2B] rounded-2xl py-4 px-7 shadow-none'>
                    Contact Me
                </button>

        </header>
    )
}

interface LiProps {
    children: React.ReactNode
    selected?: boolean
}

function StyledLi({ children, selected }: LiProps) {
    return (
        <li
            className={`text-[#2B3D4F] ${selected ? "opacity-100" : "opacity-75"} hover:text-[#BF3A2B] text-[1.25rem] font-semibold`}
        >
            <a
                href='#'
            >
                {children}
            </a>
        </li>
    )
}
