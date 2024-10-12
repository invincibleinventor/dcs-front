export default function Page(){
    return(
        <div className="flex flex-col">
<section className="relative h-screen bg-cover bg-center flex -z-10 items-center justify-center" >
  <div className="absolute -z-10 inset-0 bg-[url(/About_bg.svg)]"></div> {/* Dark overlay */}
  <div className="relative mt-20 text-center text-white max-w-3xl mx-auto">
  <h1 className="font-pacifico mx-auto text-white text-center font-bold text-3xl px-10 md:text-5xl">Our team cares about your full relax</h1>
  <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...</p>
    <button className="mt-10 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition">View Tour Packages</button> {/* Transparent button with white border */}
  </div>
</section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16">
    <div className="w-full md:w-1/2">
      <img src="/path/to/lucca-image.jpg" className="w-full rounded-lg shadow-lg" alt="Lucca" />
    </div>
    <div className="w-full md:w-1/2">
      <h2 className="text-4xl font-bold mb-6">We Are The Center Of Lucca To Offer You The Best</h2>
      <p className="text-gray-600 leading-relaxed mb-8">We are right in the center of Lucca to offer you the real Italy life! With years of experience and more than 100 happy customers...</p>
      <div className="flex space-x-10">
        <div>
          <h3 className="text-4xl font-bold text-[#f4b246]">20+</h3>
          <p className="text-gray-500">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#f4b246]">100+</h3>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#f4b246]">15+</h3>
          <p className="text-gray-500">Tours Available</p>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
    )
}
