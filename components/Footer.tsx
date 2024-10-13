import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Testimonial from './Testimonial'
import Link from 'next/link'
export default function Footer(){
    /*
      
    )
            */
    return(<div>
          <div className="flex flex-col bg-white w-screen">
          <div className='px-16    py-7  lg:px-40 lg:py-7 flex flex-col'>
          <div className="flex flex-row py-8 items-center content-center justify-between">
    <h1 className="text-lg md:text-2xl font-bold pr-10 text-black">Happy Customers Say</h1>
    <div className="flex flex-row space-x-3">
      <div className="size-8 flex items-center content-center text-neutral-500 bg-neutral-200 rounded-full ">
    <Icon icon="mdi:chevron-left" className="mx-auto size-6"></Icon>
</div>
<div className="size-8 flex items-center content-center text-white bg-orange-500 rounded-full ">
    <Icon icon="mdi:chevron-right" className="mx-auto size-6"></Icon>
</div>    </div>
</div>

<div className='grid mb-7 grid-cols-1 lg:grid-cols-2 mt-7 gap-4'>
  
<Testimonial image="\best_company\best_company01.svg" name="Lyod Gomez" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"></Testimonial>
         <Testimonial image="\best_company\best_company01.svg" name="Lyod Gomez" description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"></Testimonial>

</div>
</div>
            <div className='w-screen bg-neutral-800'>
            <div className='md:px-16    py-7 px-5 lg:px-40 lg:py-7 flex flex-col'>
            <Image alt="logo" className='mb-7' width={80} height ={80} src={'/logo.svg'} />
        <div className='h-[0.1px] w-full bg-neutral-700'></div>
            <div className='w-full gap-6 grid grid-cols-1 mt-7 md:grid-cols-2 xl:grid-cols-4'>
                <div className='flex flex-col w-full '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Services</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <Link href="#">Bike and Rickshaw rental</Link>
<Link href="#">Guided Tours of Lucca</Link>
<Link href="#">Guided Bike Tour of Lucca</Link>
<Link href="#">Trip In The Tuscan Hills</Link>
<Link href="#">Transportation With Luxury Cars</Link>
<Link href="#">Wine Tours By Bus With Guide</Link>
                    
                    </div>

                    
                </div>
                <div className='flex flex-col md:gap-0 gap-6 md:flex-row md:w-full'>
                <div className='flex flex-col md:w-full w-1/2 '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Home</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <Link href="/">Home</Link>
                    <Link href="/about-us">About Us</Link>
                    <Link href="#">Tour Packages</Link>
                  

                    </div>
            </div>

            <div className='flex flex-col  md:w-full w-1/2 '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Help</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <Link href="#">Terms Of Use</Link>
                    <Link href="#">Privacy Policy</Link>
                  
                    </div>
            </div>

            </div>
            
            <div className='flex flex-col w-full '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Contacts</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <div className="flex items-center mb-0">
        <Icon icon="mdi:map-marker" className="text-orange-400 text-xl mr-3" />
        <span>Piazza Napoleone, Lucca, Tuscany</span>
      </div>
      <div className="flex items-center mb-3">
        <Icon icon="mdi:phone" className="text-orange-400 text-xl mr-3" />
        <span>+39 346 368 5708</span>
      </div>
      <div className="flex items-center">
        <Icon icon="mdi:email" className="text-orange-400 text-xl mr-3" />
        <span>italiainlimo@gmail.com</span>
      </div>
                    </div>

                    
                </div>

                <div className='flex flex-col w-full '>
                    <h1 className='text-lg font-bold mb-4 text-white text-center mx-auto'>Services</h1>
                    <div className="flex space-x-6 mx-auto">
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <Icon icon="fa-brands:twitter" className="text-neutral-700 p-2 rounded-full bg-orange-400 w-8 h-8 hover:text-orange-300" />
        </a>
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <Icon icon="fa-brands:facebook" className="text-neutral-700 p-2 rounded-full bg-orange-400 w-8 h-8 hover:text-orange-300" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Icon icon="fa-brands:instagram" className="text-neutral-700 p-2 rounded-full bg-orange-400 w-8 h-8 hover:text-orange-300"/>
        </a>
      </div>

                    
                </div>
                
            </div>

            <div className='h-[0.1px] my-7 w-full bg-neutral-700'></div>
        <h1 className='text-center text-neutral-400 text-sm'>Copyright (c) 2024. All Rights Reserved</h1>
            </div>
            </div>
            </div>
    </div>)
}