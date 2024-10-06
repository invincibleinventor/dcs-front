'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from '@iconify/react';

export default function Header(){
    const loc = usePathname()
    const [opened,setOpened] =useState(false)
    return(
        <div className="absolute top-0 left-0 flex items-center content-center right-0 w-full h-28 bg-opacity-20 bg-white lg:px-40" >
            <div className="flex relative w-full flex-row h-28 justify-between items-center ">
                <div className="hidden lg:block">
                <Image src="/logo.svg" width={80} height={80} alt ="Logo"></Image>            
                </div>
                <div className="lg:hidden pl-5 md:pl-10">
                <Image src="/logo.svg" width={50} height={50} alt ="Logo"></Image>            
                </div>
                <div className={`flex lg:top-0  flex-col filter backdrop-blur-sm lg:backdrop-blur-none lg:flex-row absolute left-0 right-0 w-screen lg:w-max py-5 px-10 bg-white bg-opacity-10  lg:bg-transparent lg:py-0 lg:mx-auto lg:my-auto h-max top-28 bottom-0   space-y-5 space-x-0 lg:space-y-0 lg:space-x-5 ${opened?'':'lg:block hidden'}`}>
                <Link href="/" className={`text-sm font-medium text-white ${loc=="/"?'underline underline-offset-4 decoration-orange-400':''}`}>Home</Link>
                <Link href="/about-us" className={`text-sm font-medium text-white ${loc=="/about-us"?'underline underline-offset-4 decoration-orange-400':''}  `}>About Us</Link>
                <Link href="/tour-packages" className={`text-sm font-medium text-white ${loc=="/packages"?'underline underline-offset-4 decoration-orange-400':''}`}>Tour Packages</Link>
                <Link href="/contact" className={`text-sm font-medium text-white ${loc=="/contact"?'underline underline-offset-4 decoration-orange-400':''}`}>Contact</Link>
            
                </div>
                <div className ="font-medium text-sm pr-5 md:pr-10 flex flex-row items-center content-center space-x-5">
                    <div className="flex flex-row space-x-[1px] items-center content-center">
                    <span className=" text-neutral-100 lg:text-neutral-200 ">Eng</span>
                    <Icon icon="mingcute:down-line" className="text-neutral-100 lg:text-neutral-200 w-4 h-4"></Icon>
                    </div>
                    
                    <span className="text-white  hover:underline cursor-pointer transition-all ease-linear duration-200">Login</span>
                    <button className="text-white hover:bg-white hover:text-orange-400 transition-all ease-linear duration-200 px-8 py-2 bg-orange-400 rounded-full">Sign Up</button>
                    <div className="lg:hidden">
                    <Icon onClick = {()=>setOpened(!opened)} className="cursor-pointer hover:text-orange-400 transition-all ease-linear duration-100 text-white w-6 h-6" icon="material-symbols:menu"></Icon>
                        </div>
                    </div>
                   
                        </div>
        </div>
    )
}