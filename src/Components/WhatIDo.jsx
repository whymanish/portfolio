import React from 'react'

const WhatIDo = () => {
  return (
    <div className=''>

      <div class="py-16  flex justify-center">
        <div class="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
          <div>
            <h2 class="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
             My Tech Stack
            </h2>
          </div>
          <div class="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-2">

            <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="space-y-16">
                <div
                  aria-hidden="true"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                >
                  <span class="font-bold text-pink-600 dark:text-pink-300">1</span>
                </div>
                <div class="space-y-4">
                  <h3 class="text-4xl font-bold text-gray-800 transition dark:text-white">
                    Frontend Development
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam
                    voluptates nostrum.
                  </p>
                </div>
                <div className='grid grid-cols-7 gap-2'>
                  <span className="tooltip" data-tip="HTML5">
                <img
                  src="html5.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                
                <span className="tooltip" data-tip="CSS3">
                <img
                  src="css3.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                <span className="tooltip" data-tip="React Js">
                <img
                  src="reactjs.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                <span className="tooltip" data-tip="Javascript">
                <img
                  src="javascript.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                <span className="tooltip" data-tip="Github">
                <img
                  src="github.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                <span className="tooltip" data-tip="Tailwind Css">
                <img
                  src="tailwind.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                <span className="tooltip" data-tip="MongoDB">
                <img
                  src="mongodb.svg"
                  class="w-16 " 
                  width="512"
                  height="512"
                  alt="burger illustration"
                  
                /></span>
                </div>
              </div>
            </div>
            <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="space-y-16">
                <div
                  aria-hidden="true"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-gray-700"
                >
                  <span class="font-bold text-purple-600 dark:text-purple-300">2</span>
                </div>
                <div class="space-y-4">
                  <h3 class="text-4xl font-bold text-gray-800 transition dark:text-white">
                    UI/UX Development
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Quae accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam
                    voluptates nostrum.
                  </p>
                </div>
                <div className='grid grid-cols-6 gap-2'>
                  <span className="tooltip" data-tip="Figma">
                <img
                  src="figma.svg"
                  class="w-16"
                  width="512"
                  height="512"
                  alt="burger illustration"
                /></span>
                 <span className="tooltip" data-tip="Canva">
                <img
                  src="canva.svg"
                  class="w-16"
                  width="512"
                  height="512"
                  alt="burger illustration"
                /></span>
                <span className="tooltip" data-tip="Behance">
                <img
                  src="behance.svg"
                  class="w-16"
                  width="512"
                  height="512"
                  alt="burger illustration"
                /></span>
                </div>  
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhatIDo
