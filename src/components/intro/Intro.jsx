import React from 'react'
import SectionTitle from '../partials/SectionTitle';

const Intro = () => {
  return (
    <section className="intro bg-graybg flex justify-center items-center p-20 ">
  <div className="container text-center max-w-4xl w-full p-4">
  <SectionTitle
         title="A Creative Portfolio Template"
            />
    <div className="flex justify-center mb-6">
      <img 
        src="https://tympanus.net/Freebies/HalcyonDaysTemplate/img/h1-bg.png" 
        alt="" className='mb-[20px]' 
      />
    </div>
    <p className="text-[14px] max-w-3xl mx-auto text-gray-400">
      Sed a lorem quis neque interdum <a href="#" className="text-black">consequat ut sed sem</a>. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
  </div>
</section>



  )
}

export default Intro;
