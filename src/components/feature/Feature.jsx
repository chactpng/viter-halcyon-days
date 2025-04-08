import React from 'react'
import { CodeXml, Heart, LaptopMinimal } from "lucide-react";

const Feature = () => {
  return (
    <section className="feature flex justify-center items-center p-20">
  <div className="text-center max-w-4xl w-full p-4">
    <h3 className="mb-3 uppercase font-semibold">Love what you do, and you'll do it well</h3>
    
    <div className="flex justify-center mb-6">
      <img 
        src="https://tympanus.net/Freebies/HalcyonDaysTemplate/img/h1-bg.png" 
        alt="" 
        className="mb-[20px]" 
      />
    </div>
    
    {/* Circles Section */}
    <div className="text-center py-12">
  <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
    {/* Feature 1 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="size-40 rounded-full bg-teal-400 flex items-center justify-center shadow-lg mb-8">
        <LaptopMinimal size={50} className="stroke-white" />
      </div>
      <h4 className="text-sm font-semibold uppercase text-gray-800 mb-2">Digital Design</h4>
      <div className="h-1 w-10 bg-teal-400 mb-4"></div>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="size-40 rounded-full bg-teal-400 flex items-center justify-center shadow-lg mb-8">
        <CodeXml size={50} className="stroke-white" />
      </div>
      <h4 className="text-sm font-semibold uppercase text-gray-800 mb-2">Web Development</h4>
      <div className="h-1 w-10 bg-teal-400 mb-4"></div>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="size-40 rounded-full bg-teal-400 flex items-center justify-center shadow-lg mb-8">
        <Heart size={50} className="stroke-white fill-white" />
      </div>
      <h4 className="text-sm font-semibold uppercase text-gray-800 mb-2">Creative Direction</h4>
      <div className="h-1 w-10 bg-teal-400 mb-4"></div>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
      </p>
    </div>
  </div>
</div>
  </div>
</section>

  )
}

export default Feature