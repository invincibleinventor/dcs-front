import Card from "@/components/Card";
import Package from "@/components/Package";
import Popular from "@/components/Popular";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Home() {
  return (
    <div className="">
      <section
        id="hero"
        className="bg-cover pt-[calc(52*4px)] w-screen lg:h-screen bg-no-repeat bg-[url('/hero_bg.png')] pb-16 flex flex-col items-center content-center overflow-hidden"
      >
        <h1 className="font-pacifico mx-auto text-white text-center font-bold text-3xl px-10 md:text-5xl">
          Enjoy in the best way!
        </h1>
        <h1 className="text-white font-semibold text-sm md:text-lg md:font-bold mt-6">
          Enjoy our services for your trip anytime
        </h1>
        <div className="my-14 mb-20 mx-0 lg:mx-0 lg:w-[calc(100vw-80*4px)] bg-opacity-20 rounded-lg p-4 bg-white">
          <div className="flex flex-row rounded-t-lg">
            <div className="px-6 py-3 rounded-tl-lg bg-white text-orange-500 flex flex-row space-x-2 items-center content-center">
              <Icon icon="mdi:earth" className="w-4 h-4"></Icon>
              <span className="text-xs lg:text-base font-medium">
                Public Tours
              </span>
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
                <span className="text-[13px] md:text-sm font-medium text-black">
                  Number of people
                </span>
                <span className="md:text-sm text-xs font-normal text-neutral-700">
                  Choose a number{" "}
                  <Icon
                    icon="mingcute:down-line"
                    className="inline-block w-3 h-3 ml-2 text-neutral-700"
                  ></Icon>
                </span>
              </div>
            </div>

            <div className="flex flex-row space-x-2">
              <Icon
                icon="solar:calendar-outline"
                className="w-[20px] text-neutral-600 h-[20px]"
              ></Icon>
              <div className="flex flex-col space-y-1">
                <span className="text-[13px] md:text-sm font-medium text-black">
                  Date
                </span>
                <span className="text-xs md:text-sm font-normal text-neutral-700">
                  Choose a date{" "}
                  <Icon
                    icon="mingcute:down-line"
                    className="inline-block w-3 h-3 ml-2 text-neutral-700"
                  ></Icon>
                </span>
              </div>
            </div>

            <div className="flex flex-row space-x-2">
              <Icon
                icon="mdi:clock-outline"
                className="w-[20px] text-neutral-600 h-[20px]"
              ></Icon>
              <div className="flex flex-col space-y-1">
                <span className="text-[13px] md:text-sm font-medium text-black">
                  Time
                </span>
                <span className="text-xs md:text-sm font-normal text-neutral-700">
                  Choose a time{" "}
                  <Icon
                    icon="mingcute:down-line"
                    className="inline-block w-3 h-3 ml-2 text-neutral-700"
                  ></Icon>
                </span>
              </div>
            </div>

            <div className="flex flex-row space-x-2">
              <Icon
                icon="material-symbols:tour-outline-rounded"
                className="w-[20px] text-neutral-600 h-[20px]"
              ></Icon>
              <div className="flex flex-col space-y-1">
                <span className="text-[13px] md:text-sm font-medium text-black">
                  Tour
                </span>
                <span className="text-xs font-norma md:text-sm text-neutral-700">
                  Select tour{" "}
                  <Icon
                    icon="mingcute:down-line"
                    className="inline-block w-3 h-3 ml-2 text-neutral-700"
                  ></Icon>
                </span>
              </div>
            </div>

            <div className="flex flex-row space-x-2">
              <Icon
                icon="mdi:bus"
                className="w-[19px] text-neutral-600 h-[19px]"
              ></Icon>
              <div className="flex flex-col space-y-1">
                <span className="text-[13px] md:text-sm font-medium text-black">
                  Transportation
                </span>
                <span className="text-xs font-normal md:text-sm text-neutral-700">
                  Select transportation{" "}
                  <Icon
                    icon="mingcute:down-line"
                    className="inline-block w-3 h-3 ml-2 text-neutral-700"
                  ></Icon>
                </span>
              </div>
            </div>

            <button className="bg-orange-500 size-12 lg:ml-0 ml-auto rounded-lg">
              <Icon
                icon="mdi:search"
                className="text-white mx-auto w-6 h-6"
              ></Icon>
            </button>
          </div>
        </div>
      </section>

      <section id="explore" className="lg:px-40 px-16 overflow-hidden py-16">
        <div className="flex flex-row items-center content-center justify-between">
          <h1 className="text-lg md:text-2xl font-bold mr-10 text-black">
            Explore Our Popular Destinations
          </h1>
          <div className="flex flex-row space-x-3">
            <div className="size-8 flex items-center content-center text-neutral-500 bg-neutral-200 rounded-full ">
              <Icon icon="mdi:chevron-left" className="mx-auto size-6"></Icon>
            </div>
            <div className="size-8 flex items-center content-center text-white bg-orange-500 rounded-full ">
              <Icon icon="mdi:chevron-right" className="mx-auto size-6"></Icon>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 grid-flow-row gap-16 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card
            image="\popular_dest\popular_dest_1.svg"
            name="Lucas Bike Tour"
            price="34$"
            day="everyday"
            people="3 - 10"
            description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."
          />
          <Card
            image="\popular_dest\popular_dest_2.svg"
            name="Lucas Bike Tour"
            price="34$"
            day="everyday"
            people="3 - 10"
            description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."
          />
          <Card
            image="\popular_dest\popular_dest_3.svg"
            name="Lucas Bike Tour"
            price="34$"
            day="everyday"
            people="3 - 10"
            description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."
          />
          <Card
            image="\popular_dest\popular_dest_4.svg"
            name="Lucas Bike Tour"
            price="34$"
            day="everyday"
            people="3 - 10"
            description="Lorem ipsum dolor sit amet is the standard dummy text of the printing industry used as a standard since the fouteenth century AD."
          />
        </div>
      </section>
<section className="lg:px-40 px-16 overflow-hidden py-0 pb-32 flex flex-col lg:flex-row items-center mt-24 space-y-10 lg:space-y-0 lg:space-x-8">

  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
    <img
      src="\best_company\best_company01.svg"
      alt="Tourist with phone and map"
      className="w-72 h-auto lg:w-96 object-contain"
    />
  </div>

  <div className="w-full lg:w-1/2 text-center lg:text-left">
  <h2 className="text-sm mb-2 font-semibold text-neutral-500">WELCOME TO OUR SITE</h2>
    <h2 className="text-2xl font-bold text-black mb-6">
      We are the best company for your visit
    </h2>
    <p className="text-neutral-600 leading-relaxed mb-6">
      After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!
    </p>

    <div className="grid grid-cols-2 gap-8 lg:gap-12">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-orange-500">20+</span>
        <span className="text-neutral-600 mt-2">Years Experience</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-orange-500">100+</span>
        <span className="text-neutral-600 mt-2">Happy Customers</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-orange-500">15+</span>
        <span className="text-neutral-600 mt-2">Choice of Services</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-orange-500">10+</span>
        <span className="text-neutral-600 mt-2">Professional Guides</span>
      </div>
    </div>
  </div>
</section>
<section className="h-[calc(120*4px)] relative flex flex-col items-end content-end w-screen  ">
  <section className="mt-auto flex items-center content-center bg-gradient-to-b h-full lg:h-3/4 w-full from-orange-200 to-orange-300">
    <div className="bg-white bg-opacity-40 max-w-[450px] rounded-2xl mx-10 sm:mx-auto lg:mr-0   lg:ml-40 px-10 py-6 flex flex-col items-center content-center">
      <div className="flex flex-col my-auto">
      <h1 className="text-2xl font-bold text-black text-center">Get Special Offers For Organizations</h1>
      <h1 className="text-sm font-medium text-neutral-600 text-center mt-4">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </h1>
      <button className="text-white text-sm font-semibold px-6 py-3 rounded-full w-max mx-auto my-4 bg-orange-500">Contact Us</button>
      </div>
    </div>
  </section>
  <img
      src="\special_offers\special_offers01.svg"
      alt="Tourist with phone and map"
      className="absolute h-full w-auto hidden lg:block right-40 object-contain"
    />
</section>
<section id="packages" className="grid py-20 gap-8 lg:px-40 px-10 w-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
<Package img={"/popular_package/pop_package01.svg"} name="Bike and Auto rental" desc="lorem ipsum dolor sit amet is the dummy text of the printing industry"></Package>
<Package img={"/popular_package/pop_package02.svg"} name="Bike and Auto rental" desc="lorem ipsum dolor sit amet is the dummy text of the printing industry"></Package>
<Package img={"/popular_package/pop_package03.svg"} name="Bike and Auto rental" desc="lorem ipsum dolor sit amet is the dummy text of the printing industry"></Package>
<Package img={"/popular_package/pop_package04.svg"} name="Bike and Auto rental" desc="lorem ipsum dolor sit amet is the dummy text of the printing industry"></Package>
</section>
<section className="relative py-20 lg:px-40 px-10 relative grid grid-cols-1 lg:grid-cols-2 w-screen bg-gradient-to-b h-full  from-orange-200 to-orange-300  ">
  <form className="w-auto">
    <h1 className="mx-auto text-center font-bold text-3xl mb-8">Book Bike Now</h1>
    <div className="bg-white flex flex-col space-y-8 py-10 items-center content-center w-auto bg-opacity-20 p-4 px-6 rounded-2xl">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div className="flex flex-col space-y-4">
      <h1 className="text-base font-medium text-black">Name and surname</h1>
      <input placeholder="Enter your name and surname" className="w-full px-6 py-3 rounded-lg bg-white placeholder:text-sm placeholder:font-normal placeholder:text-neutral-600 text-black"></input>
      </div>
      <div className="flex flex-col space-y-4">
      <h1 className="text-base font-medium text-black">Email Address</h1>
      <input type="email" placeholder="Enter your email address" className="w-full px-6 py-3 rounded-lg bg-white placeholder:text-sm placeholder:font-normal placeholder:text-neutral-600 text-black"></input>
      </div>
      <div className="flex flex-col space-y-4">
      <h1 className="text-base font-medium text-black">Telephone Number</h1>
      <input type="number" placeholder="Enter your name and surname" className="w-full px-6 py-3 rounded-lg bg-white placeholder:text-sm placeholder:font-normal placeholder:text-neutral-600 text-black"></input>
      </div>
      <div className="flex flex-col space-y-4">
      <h1 className="text-base font-medium text-black">Service Types</h1>
      <select className="w-full px-6 py-3 rounded-lg bg-white placeholder:text-sm placeholder:font-normal placeholder:text-neutral-600 text-black">
          <option value="" disabled selected>Select the service type</option>
      </select>
      </div>
      <div className="flex flex-col space-y-4">
      <h1 className="text-base font-medium text-black">Date</h1>
      <input type="date" placeholder="Select the date" className="w-full px-6 py-3 rounded-lg placeholder:text-sm placeholder:font-normal placeholder:text-neutral-600 bg-white  text-black"></input>
      </div>
      <div className="flex flex-col space-y-4">
      <h1 className="text-base font-medium text-black">Time</h1>
      <input placeholder="Enter your name and surname" type="time" className="w-full px-6 py-3 rounded-lg placeholder:text-sm placeholder:font-normal placeholder:text-neutral-600 bg-white  text-black"></input>
      </div>
</div>
<button className="mx-auto bg-orange-500 rounded-full px-6 py-3 text-sm font-semibold text-white">Book Now</button>

  </div>
  </form>
  <img
      src="/book_a_bike/bike picture.png"
      alt="Tourist with phone and map"
      className="w-72 h-auto lg:w-[calc(100%/2.4)] hidden lg:block absolute right-20  -bottom-8 object-contain"
    />
</section>
<h1 className="py-20 pb-10 font-black text-3xl lg:px-40 px-10">The Most Popular Packages</h1>
<section className="px-10 gap-10 lg:px-40 grid grid-cols-1 pt-0 pb-20 md:grid-cols-2 lg:grid-cols-4">

<Popular image="/popular_package/pop_package01.svg" price="10" title="BIKE / RICKSHAW" one="Your bike for a day" two="City App" three="Discount on Rickshaw"></Popular>


<Popular image="/popular_package/pop_package02.svg" price="10" title="BIKE TOURS" one="Your bike for a day" two="City App" three="Discount on Rickshaw"></Popular>



<Popular image="/popular_package/pop_package03.svg" price="10" title="BUS TRIPS" one="Your bike for a day" two="City App" three="Discount on Rickshaw"></Popular>



<Popular image="/popular_package/pop_package04.svg" price="10" title="TRANSFER" one="Your bike for a day" two="City App" three="Discount on Rickshaw"></Popular>

</section>
    </div>
  );
}
