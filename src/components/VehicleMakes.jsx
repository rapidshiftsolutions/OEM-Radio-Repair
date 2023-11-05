'use client'

import Image from 'next/image'

import chevy from '../images/makes/chevrolet-logo.webp'
import dodge from '../images/makes/dodge-logo.webp'
import ford from '../images/makes/ford-logo.webp'
import jeep from '../images/makes/jeep-logo.webp'
import ram from '../images/makes/ram-logo.webp'
import gmc from '../images/makes/gmc-logo.webp'



export default function Example() {
  return (
    <div id="makes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Which Brands Do We Support?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We work on OEM Radios from a large number of manufacturers, but domestic vehicles are our specialty. If you have a vehicle with a busted screen, we are the team for you.
            </p>
            <div className="mt-8 flex justify items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Info for Dealerships
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-20">
            <Image
              className="max-h-24 w-full object-contain object-left"
              src={dodge}
              alt="Tuple"
              width={125}
              height={70}
            />
           <Image
              className="max-h-24 w-full object-contain object-left"
              src={ford}
              alt="Tuple"
              width={105}
              height={48}
            />
           <Image
              className="max-h-24 w-full object-contain object-left"
              src={chevy}
              alt="Tuple"
              width={105}
              height={48}
            />
           <Image
              className="max-h-24 w-full object-contain object-left"
              src={jeep}
              alt="Tuple"
              width={105}
              height={48}
            />
           <Image
              className="max-h-24 w-full object-contain object-left"
              src={ram}
              alt="Tuple"
              width={105}
              height={48}
            />
           <Image
              className="max-h-24 w-full object-contain object-left"
              src={gmc}
              alt="Tuple"
              width={105}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
