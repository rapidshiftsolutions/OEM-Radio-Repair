'use client'

import { Disclosure, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Image from 'next/image'


const navigation = {
  information: [ //contact
    { name: 'About Us', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Careers', href: '/careers' },
  ],
  services: [ //services
    { name: 'Amplifier Repair', href: '/services/amplifier-repair' },
    { name: 'Factory Touch Screen Repair', href: '/services/touch-screen-repair' },
  ],

  legal: [ //information
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Warranty', href: '/warranty' },
  ],
}

export default function NewNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="relative z-50 bg-primary-600 py-6 shadow">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <a href="/">
              <Image src="/OEMRadioRepair/OEMRadioRepair-w.svg" width={120} height={60} alt="OEM Radio Repair Logo" className="ml-4 h-6 md:h-12 w-auto" />
            </a>
          </div>

          <div className="hidden space-x-4 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="inline-flex items-center gap-1 text-sm font-medium text-light-50 hover:text-primary-100">
                    Information
                    <ChevronDownIcon className="h-5 w-5" />
                  </PopoverButton>
                  <PopoverPanel className="absolute z-20 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-light-900/5">
                    <div className="p-4">
                      {navigation.information.map((item) => (
                        <a key={item.name} href={item.href} className="block px-4 py-2 text-sm font-medium text-light-700 hover:bg-light-100">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="inline-flex items-center gap-1 text-sm font-medium text-light-50 hover:text-primary-100">
                    Services
                    <ChevronDownIcon className="h-5 w-5" />
                  </PopoverButton>
                  <PopoverPanel className="absolute z-20 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-light-900/5">
                    <div className="p-4">
                      {navigation.services.map((item) => (
                        <a key={item.name} href={item.href} className="block px-4 py-2 text-sm font-medium text-light-700 hover:bg-light-100">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="inline-flex items-center gap-1 text-sm font-medium text-light-50 hover:text-primary-100">
                    Legal
                    <ChevronDownIcon className="h-5 w-5" />
                  </PopoverButton>
                  <PopoverPanel className="absolute z-20 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-light-900/5">
                    <div className="p-4">
                      {navigation.legal.map((item) => (
                        <a key={item.name} href={item.href} className="block px-4 py-2 text-sm font-medium text-light-700 hover:bg-light-100">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </div>

          <div className="hidden space-x-4 md:flex">
            <a
              href="tel:+12055221162"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-white"
              title="Call Us"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a
              href="locations"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-white"
              title="Locations"
            >
              <MapPinIcon className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-white"
              title="Contact Form"
            >
              <EnvelopeIcon className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <Disclosure as="div" className="bg-white shadow-md lg:hidden">
          <div className="space-y-2 px-4 pb-4 pt-2">
            {Object.keys(navigation).map((category) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-light-50">{category}</h3>
                {navigation[category].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-2 text-sm text-light-700 hover:bg-light-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </Disclosure>
      )}
    </>
  )
}
