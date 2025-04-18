import React from 'react'

const Banner = () => {
  return (
    <section className="relative">
  <img
    src="https://tympanus.net/Freebies/HalcyonDaysTemplate/img/hero-bg.jpg"
    alt=""
    className="w-full h-full object-cover"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <h1 className="text-[40px] font-normal uppercase text-gray-800 tracking-[12px] mb-2">
      Halcyon<span className="text-gray-400">Days</span>
    </h1>

    <p className="text-[14px] max-w-xl text-gray-400 -mt-4">
      An exclusive HTML5/CSS3 freebie for <i>Codrops</i>
    </p>

    <button className="text-white w-[250px] mt-[30px] bg-green p-4 rounded-md shadow-[0_4px_0px_0_rgba(0,0,0,0.3)]">
      Back to The Article
    </button>
  </div>
</section>



  )
}

export default Banner
