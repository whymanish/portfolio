import React from 'react'

const Social = () => {
  return (
    <div >
      
      <div class="relative flex  flex-col items-center overflow-hidden py-16 md:py-20 bg-gradient-to-r from-gray-800 to-gray-900">
  <div class="container relative z-[1] m-auto px-6 md:px-12">
    <div class="m-auto text-center md:w-8/12 lg:w-6/12">
      <h2 class="text-2xl font-bold text-white  dark:text-white md:text-4xl">
        My <span class="text-[#98E4FF]">Social Media</span> handles
      </h2>
    </div>
    <div class="m-auto mt-16 ">
      <div class="flex flex-wrap justify-center gap-6">
        <div
          class="group rounded-2xl border border-gray-200 dark:border-gray-600 bg-white  hover:bg-opacity-100 py-2 px-4 "
        >
          <img
            src="github.svg"
            class=" h-16 lg:h-20 transition "
            loading="lazy"
            alt="logo airbnb"
          />
        </div>
       
        
        <div
          class="group rounded-2xl border border-gray-200 dark:border-gray-600 bg-white  py-2 px-4 hover:bg-opacity-100"
        >
          <img
            src="behance.svg"
            class=" h-16 lg:h-20 transition "
            loading="lazy"
            alt="logo airbnb"
          />
        </div>
       
        <div
          class="group rounded-2xl border border-gray-200 dark:border-gray-600 bg-white  py-2 px-4 hover:bg-opacity-100"
        >
          <img
            src="x.com.svg"
            class=" h-16 lg:h-20 transition "
            loading="lazy"
            alt="logo airbnb"
          />
        </div>
       
        <div
          class="group rounded-2xl border border-gray-200 dark:border-gray-600 bg-white py-2 px-4 hover:bg-opacity-100 "
        >
          <img
            src="instagram.svg"
            class=" h-16 lg:h-20 transition "
            loading="lazy"
            alt="logo airbnb"
          />
        </div>
       
      </div>
    </div>
  </div>
</div>
                                    
    </div>
  )
}

export default Social
