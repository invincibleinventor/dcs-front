import { Icon } from "@iconify/react";

export default function Page(){
    return(
        <div className="flex flex-col">
<section className="relative h-screen bg-cover bg-center flex -z-10 items-center justify-center" >
  <div className="absolute -z-10 inset-0 bg-[url(/About_bg.svg)]"></div> {/* Dark overlay */}
  <div className="relative mt-20 text-center text-white max-w-4xl mx-auto">
  <h1 className="font-pacifico mx-auto text-white text-center font-bold px-10 text-3xl px-10 md:text-5xl">Our team cares about your full relax</h1>
  <p className="mt-6 text-base px-10 lg:text-lg font-semibold leading-relaxed max-w-3xl mx-auto">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
    <button className="mt-10 px-6 py-2 border-2 border-white text-white z-10 rounded-full hover:bg-white hover:text-black transition">View Our Tour Packages</button>
  </div>
</section>
<section className="py-20 px-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:px-40 bg-white">
  <div className="p-4 border w-max mx-auto lg:mx-0 border-neutral-200 rounded-xl shadow-base">
  <img className="rounded-xl max-w-auto max-h-auto lg:w-auto lg:max-w-96 lg:h-full lg:h-auto h-72 w-72 sm:w-96 object-cover" src="/About_bg.svg"></img>
  </div>
  <div className="lg:w-auto max-w-3xl lg:py-5 px-10 lg:px-0 flex flex-col mx-auto lg:mx-0 lg:items-start lg:content-start items-center content-center">
    <h1 className="text-sm text-neutral-500 font-semibold">WELCOME TO OUR SITE!</h1>
    <h1 className="text-xl lg:text-2xl mt-2 font-bold text-center lg:text-start text-black">We Are The Center Of Lucca To Offer You The Best</h1>
    <h1 className="text-sm lg:text-base mt-3 text-center lg:text-start text-neutral-700">We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!</h1>
  <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-10">


   


  <div className="flex items-center justify-center h-20 w-20 my-5">
      <div className="text-center lg:text-left">
        <p className="text-2xl font-bold text-orange-500">20+</p>
        <p className="text-sm font-medium text-neutral-500">Years</p>
        <p className="text-sm font-medium text-neutral-500">Experience</p>
      </div>
    </div>
    <div className="flex items-center justify-center h-20 w-20 my-5">
    <div className="text-center lg:text-left">
    <p className="text-2xl font-bold text-orange-500">100+</p>
    <p className="text-sm font-medium text-neutral-500">Happy</p>
    <p className="text-sm font-medium text-neutral-500">Customers</p>
      </div>
    </div>

    <div className="flex items-center justify-center h-20 w-20 my-5">
    <div className="text-center lg:text-left">
    <p className="text-2xl font-bold text-orange-500">15+</p>
    <p className="text-sm font-medium text-neutral-500">Choice</p>
    <p className="text-sm font-medium text-neutral-500">of services</p>
      </div>
    </div>


    <div className="flex items-center justify-center h-20 w-20 my-5">
    <div className="text-center lg:text-left">
    <p className="text-2xl font-bold text-orange-500">10+</p>
    <p className="text-sm font-medium text-neutral-500">Professional</p>
    <p className="text-sm font-medium text-neutral-500">Guides</p>
      </div>
    </div>
  </div>
  </div>
</section>
<section className="lg:px-40 w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-10 bg-gradient-to-b from-orange-300 to-orange-300 py-10">

        <div className="p-8 rounded-lg bg-orange-200">
          <Icon icon="mdi:package-variant-closed" className="text-orange-500 stroke-[0.1px] text-6xl mx-auto" />
          <h3 className="text-base font-semibold mt-4 text-gray-800">
            Complete Packages For All Your Wishes
          </h3>
        </div>

        <div className="p-8 rounded-lg bg-orange-200">
          <Icon icon="mdi:medal-outline" className="text-orange-500 stroke-[0.1px] text-6xl mx-auto" />
          <h3 className="text-base font-semibold mt-4 text-gray-800">
            Over 30 Years Of Experience
          </h3>
        </div>


        <div className="p-8 rounded-lg bg-orange-200">
          <Icon icon="mdi:account-tie" className="text-orange-500 stroke-[0.1px] text-6xl mx-auto" />
          <h3 className="text-base font-semibold mt-4 text-gray-800">
          Expert Guides For You          </h3>
        </div>


        <div className="p-8 rounded-lg bg-orange-200">
          <Icon icon="mdi:cash-check" className="text-orange-500 stroke-[0.1px] text-6xl mx-auto" />
          <h3 className="text-base font-semibold mt-4 text-gray-800">
          Guaranteed fun at the best price!
          </h3>
        </div>

</section>


        </div>
    )
}
