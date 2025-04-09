import React from 'react'
import { CodeXml, Heart, LaptopMinimal } from "lucide-react";
import { feature } from './feature-data';
import SectionTitle from '../partials/SectionTitle';

const Feature = () => {
  return (
    <section className="feature flex justify-center items-center pt-20">
  <div className="text-center max-w-4xl w-full p-4">
    <SectionTitle
              title="Love what you do, and you'll do it well"
            />
    
    <div className="flex justify-center mb-6">
      <img 
        src="https://tympanus.net/Freebies/HalcyonDaysTemplate/img/h1-bg.png" 
        alt="" 
        className="mb-[20px]" 
      />
    </div>
    
    {/* Circles Section */}
    <div className="text-center py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {feature.map((feature, key) => (
      <div className="flex flex-col items-center text-center" key={key}>
        {/* Feature Icon */}
        <div className="size-40 rounded-full bg-teal-400 flex items-center justify-center shadow-lg mb-8">
          {feature.icon}
        </div>
      
        <h4 className="text-sm font-semibold uppercase mb-2">{feature.title}</h4>
        <div className="h-1 w-10 bg-teal-400 mb-4"></div>
        <p className="text-sm text-gray-400">{feature.description}</p>
      </div>
    ))}
  </div>
</div>
  </div>
</section>

  )
}

export default Feature