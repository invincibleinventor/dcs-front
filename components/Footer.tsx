import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Testimonial from './Testimonial'
export default function Footer(){
    /*
      
    )
            */
    return(<div>
          <div className="flex flex-col w-screen">
          <div className='px-16    py-7  lg:px-40 lg:py-7 flex flex-col'>
          <div className="flex flex-row items-center content-center justify-between">
    <h1 className="text-lg md:text-2xl font-bold pr-10 text-black">Happy Customers Say</h1>
    <div className="flex flex-row space-x-3">
      <div className="size-8 flex items-center content-center text-neutral-500 bg-neutral-200 rounded-full ">
    <Icon icon="mdi:chevron-left" className="mx-auto size-6"></Icon>
</div>
<div className="size-8 flex items-center content-center text-white bg-orange-500 rounded-full ">
    <Icon icon="mdi:chevron-right" className="mx-auto size-6"></Icon>
</div>    </div>
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 mt-7 gap-4'>
  
<Testimonial image="\best_company\best_company01.svg" name="Lyod Gomez" description=" Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry"></Testimonial>
         <Testimonial image="\best_company\best_company01.svg" name="Lyod Gomez" description=" Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry
        Lorem ipsum is the standard dummy text of the typing industry"></Testimonial>

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
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    </div>

                    
                </div>
                <div className='flex flex-col md:gap-0 gap-6 md:flex-row md:w-full'>
                <div className='flex flex-col md:w-full w-1/2 '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Home</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <h1>Home</h1>
                    <h1>About Us</h1>
                    <h1>Tour Packages</h1>
                  

                    </div>
            </div>

            <div className='flex flex-col  md:w-full w-1/2 '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Help</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <h1>Terms Of Use</h1>
                    <h1>Privacy Policy</h1>
                  
                    </div>
            </div>

            </div>
            
            <div className='flex flex-col w-full '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Services</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    </div>

                    
                </div>

                <div className='flex flex-col w-full '>
                    <h1 className='text-lg font-bold mb-2 text-white'>Services</h1>
                    <div className='flex space-y-2 flex-col text-sm font-normal text-white'>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
                    <h1>Bike and Rikshaw rental</h1>
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