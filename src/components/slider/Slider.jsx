import React from 'react'
import SectionTitle from '../partials/SectionTitle'

const Slider = () => {
  return (
    <div className="relative grid grid-cols-2 max-w-full max-h-full mt-0">
  <div className="flex justify-center items-center h-full bg-graybg overflow-hidden">
    <img 
      src="https://tympanus.net/Freebies/HalcyonDaysTemplate/img/iphone-bg.png" 
      alt="" 
      className=" object-cover h-full transform translate-x-[35%] max-w-full" 
    />
  </div>

  

<div className="text-center py-12">
<SectionTitle
              title="Responsive Design Specialists"
            />
  <div className="flex justify-center mb-6">
    <img 
      src="https://tympanus.net/Freebies/HalcyonDaysTemplate/img/h1-bg.png" 
      alt="" 
      className='' 
    />
  </div>
  <div  className="text-[14px] text-center text-sm text-gray-400 mb-20 px-20">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero.</p>
    <p>Mauris ultrices odio vitae nulla ultrices iaculis. Nulla rhoncus odio eu lectus faucibus facilisis. Maecenas ornare augue vitae sollicitudin accumsan.</p>
    <p>Etiam eget libero et erat eleifend consectetur a nec lectus. Sed id tellus lorem. Suspendisse sed venenatis odio, quis lobortis eros.
  </p>
  </div>
</div>

  </div>
  )
}

export default Slider
