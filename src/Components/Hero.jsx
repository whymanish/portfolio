import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='h-screen'>
  <div class="px-4 pt-12 mt-20 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="https://plus.unsplash.com/premium_photo-1694467832488-9bc48ff8d112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> About Me </span>
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Manishkumar Yadav</h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500">I have a Bachelor's in Electronics and Telecommunication Engineering, and I'm a UI/UX and front-end developer. I excel in React.js, JavaScript, HTML5, CSS3, and Tailwind CSS, crafting user-friendly web applications that blend technical expertise with creative design.</p>
        <div class="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
          <form action="" method="post" id="revue-form" name="revue-form" target="_blank" class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex">
            <div class="flex-1 min-w-0 revue-form-group">
              <label for="member_email" class="sr-only">Email address</label>
              <input id="cta-email" type="email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email  "/>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
              <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Notify me</button>
            </div>
          </form>
          <div class="sm:max-w-lg sm:flex">
            <p class="mt-3 text-xs text-gray-500">
              By subscribing, you agree with Revue’s
              <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a>
              and
              <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
