import Card from "@/components/Card";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Home() {
  return (
    <div className="">
      <section id ="hero" className = "bg-cover pt-[calc(52*4px)] w-screen lg:h-screen bg-no-repeat bg-[url('/hero_bg.png')] pb-16 flex flex-col items-center content-center  overflow-hidden">
    <h1 className="font-pacifico mx-auto text-white text-center font-bold text-3xl px-10 md:text-5xl">Enjoy in the best way!</h1>
    <h1 className="text-white font-semibold text-sm md:text-lg md:font-bold mt-6">Enjoy our services for your trip anytime</h1>
   <div className="my-14 mb-20 mx-0  lg:mx-0 lg:w-[calc(100vw-80*4px)] bg-opacity-20 rounded-lg p-4 bg-white">
    <div className="flex flex-row rounded-t-lg">
      <div className="px-6 py-3 rounded-tl-lg bg-white text-orange-500 flex flex-row space-x-2 items-center content-center">
    <Icon icon="mdi:earth" className="w-4 h-4"></Icon>
    <span className="text-xs lg:text-base font-medium">Public Tours</span>
      </div>
      <div className="px-6 py-3 rounded-tr-lg bg-neutral-100 font-medium text-white bg-opacity-30 flex flex-row space-x-2 items-center content-center">
    <Icon icon="mdi:account-group-outline" className="w-4 h-4"></Icon>
    <span className="text-xs lg:text-base ">Private Tours</span>
      </div>
      </div>
      <div className="w-full flex lg:justify-between lg:items-center space-y-5 lg:space-y-0 content-center flex-col lg:flex-row flex-grow bg-white rounded-b-lg lg:rounded-tr-lg py-3 pt-5 lg:py-3 pl-5 px-3">
<div className="flex flex-row space-x-2">
<Icon icon="mdi:account-group-outline" className="w-[20px] text-neutral-600 h-[20px]"></Icon>

  <div className="flex flex-col space-y-1">
    <span className="text-[13px] md:text-sm font-medium text-black">Number of people</span>
    <span className="md:text-sm text-xs font-normal text-neutral-700">Choose a number <Icon icon="mingcute:down-line" className="inline-block w-3 h-3 ml-2 text-neutral-700"></Icon></span>
    </div>
</div>


<div className="flex flex-row space-x-2">
<Icon icon="solar:calendar-outline" className="w-[20px] text-neutral-600 h-[20px]"></Icon>

  <div className="flex flex-col space-y-1">
    <span className="text-[13px] md:text-sm font-medium text-black">Date</span>
    <span className="text-xs md:text-sm font-normal text-neutral-700">Choose a date <Icon icon="mingcute:down-line" className="inline-block w-3 h-3 ml-2 text-neutral-700"></Icon></span>
    </div>
</div>


<div className="flex flex-row space-x-2">
<Icon icon="mdi:clock-outline" className="w-[20px] text-neutral-600 h-[20px]"></Icon>

  <div className="flex flex-col space-y-1">
    <span className="text-[13px] md:text-sm font-medium text-black">Time</span>
    <span className="text-xs md:text-sm font-normal text-neutral-700">Choose a time <Icon icon="mingcute:down-line" className="inline-block w-3 h-3 ml-2 text-neutral-700"></Icon></span>
    </div>
</div>


<div className="flex flex-row space-x-2">
<Icon icon="material-symbols:tour-outline-rounded" className="w-[20px] text-neutral-600 h-[20px]"></Icon>

  <div className="flex flex-col space-y-1">
    <span className="text-[13px] md:text-sm font-medium text-black">Tour</span>
    <span className="text-xs font-norma md:text-sm text-neutral-700">Select tour <Icon icon="mingcute:down-line" className="inline-block w-3 h-3 ml-2 text-neutral-700"></Icon></span>
    </div>
</div>


<div className="flex flex-row space-x-2">
<Icon icon="mdi:bus" className="w-[19px] text-neutral-600 h-[19px]"></Icon>

  <div className="flex flex-col space-y-1">
    <span className="text-[13px] md:text-sm font-medium text-black">Transportation</span>
    <span className="text-xs font-normal md:text-sm text-neutral-700">Select transportation <Icon icon="mingcute:down-line" className="inline-block w-3 h-3 ml-2 text-neutral-700"></Icon></span>
    </div>
</div>


<button className="bg-orange-500 size-12  lg:ml-0 ml-auto rounded-lg">

  <Icon icon="mdi:search" className="text-white mx-auto w-6 h-6"></Icon>
</button>
      </div>
   </div>

   
      </section>

<section id="explore" className="lg:px-40 px-16 overflow-hidden py-16">
  <div className="flex flex-row items-center content-center justify-between">
    <h1 className="text-lg md:text-2xl font-bold mr-10 text-black">Explore Our Popular Destinations</h1>
    <div className="flex flex-row space-x-3">
      <div className="size-8 flex items-center content-center text-neutral-500 bg-neutral-200 rounded-full ">
    <Icon icon="mdi:chevron-left" className="mx-auto size-6"></Icon>
</div>
<div className="size-8 flex items-center content-center text-white bg-orange-500 rounded-full ">
    <Icon icon="mdi:chevron-right" className="mx-auto size-6"></Icon>
</div>    </div>
    </div>
    <div className="grid grid-cols-1 mt-10 grid-flow-row gap-16 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    
    <Card image="\popular_dest\popular_dest_1.svg" name="Lucas Bike Tour" price="34$" day="everyday" people="3 - 10" description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."/>
    <Card image="\popular_dest\popular_dest_2.svg" name="Lucas Bike Tour" price="34$" day="everyday" people="3 - 10" description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."/>
    <Card image="\popular_dest\popular_dest_3.svg" name="Lucas Bike Tour" price="34$" day="everyday" people="3 - 10" description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."/>
    <Card image="\popular_dest\popular_dest_4.svg" name="Lucas Bike Tour" price="34$" day="everyday" people="3 - 10" description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."/>
    </div>
    <div className="lg:px-40 px-16 overflow-hidden py-16 grid grid-cols-1 grid-flow-row  lg:grid-cols-2">
<div className="w-1/2">

</div>
</div>
</section>
    </div>
  );
}
