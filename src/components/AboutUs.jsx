'use client'

import Image from 'next/image'


import BG1 from '../images/Backgrounds/int1.webp'

export default function Example() {
  return (
    
    <div id="about" className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className='bg-black'>
      <Image
        src={BG1}
        alt=""
        className="opacity-30 absolute inset-0 -z-10 h-full w-full object-cover"
      />
      </div>
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >

      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >

      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Who Are We?</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          An OEM Car Radio Repair Shop that specializes in repairing broken factory touch screens and OEM amps. We are located in Birmingham Alabama, but we serve customers all over the country.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Our family has been in the Automotive Audio business for decades and we noticed a gap in our local market. No-one provides quality OEM Radio repairs at a decent price. This is when OEM Radio Repair was born.
        </p>
      </div>
    </div>
  )
}
