import React from 'react';


const features = [
  {
    name: 'General Mowing & Weed Eating',
    description:
      'Efficient mowing and weed eating services to maintain clear and safe environments for residential and industrial areas.',
    
  },
  {
    name: 'Fire Ant Control',
    description: 'Expert pest management solutions to protect landscapes from fire ant infestations, ensuring safe and usable outdoor spaces.',
    
  },
  {
    name: 'Industrial Weed Control',
    description: 'Comprehensive weed control strategies for industrial sites to minimize disruptions and maintain productivity.',
    
  },
];

export default function MaintenanceWeedControl() {
  return (
    <div className="overflow-hidden bg-accent-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-primary-400">Effective Land Management</h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Maintenance & Weed Control
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Our high-level maintenance and weed control services ensure your land is clear, safe, and productive, reducing hazards and enhancing usability.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <span className='absolute left-1 top-1 h-6 w-6 text-primary-500'>&#10003;</span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Maintenance and Weed Control services"
            src="/PD/marketing/tractor-weeds.webp"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
