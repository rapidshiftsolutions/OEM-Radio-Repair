'use client'

import Image from 'next/image'

const navigation = {
  information: [
    { name: 'About Us', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Careers', href: '/careers' },
  ],
  services: [
    { name: 'Amplifier Repair', href: '/services/amplifier-repair' },
    { name: 'Factory Touch Screen Repair', href: '/services/touch-screen-repair' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Warranty', href: '/warranty' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-light-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="flex items-center justify-center xl:col-span-1 max-w-screen-sm">
            <Image
              alt="OEM Radio Repair Logo"
              src="/OEMRadioRepair/OEMRadioRepair-w.svg" // Update with the actual logo path
              width={200}
              height={80}
              className="w-2/3 h-auto" // Ensures the aspect ratio is maintained
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-3 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-light-50">Information</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.information.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-light-50">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-50">Our Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-100 hover:text-light-50">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-light-50">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-light-50">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between items-center border-t border-primary-500 pt-8">
          <div className="flex items-center space-x-4">
            <span className="text-xs md:text-sm text-gray-100">© 2024 OEM Radio Repair. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
