import Image
 from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"
 export default function Testimonial(props:any){
    return(
        <div className='p-8 flex flex-col border border-neutral-200 rounded-2xl w-full'>
        <Image className='rounded-full mx-auto' src={props.image} width={70} height={70} alt="Testimonial"></Image>
        <h1 className='text-center text-neutral-700 text-base mt-4 mb-2 font-bold'>{props.name}</h1>
        <Icon icon="icomoon-free:quotes-right" className="text-pink-200 lg:size-8 size-6"></Icon>
        <p className='mt-2 px-3 text-base font-normal text-neutral-700'>
       {props.description}
        </p>
        <Icon icon="icomoon-free:quotes-left" className="text-pink-200 ml-auto lg:size-8 size-6"></Icon>

    </div>
    )
}