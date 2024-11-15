import React from 'react';

const features = [
  {
    name: 'Steep Slope Mowing',
    description:
      'Specialized mowing services for steep and challenging slopes, providing safety and maintaining visibility.',
  },
  {
    name: 'Wetland Management',
    description: 'Expert care for wetland areas, ensuring compliance with environmental standards while promoting ecological balance.',
  },
  {
    name: 'Brush and Vegetation Control',
    description: 'Comprehensive solutions for controlling overgrowth and maintaining terrain health in varied environments.',
  },
];

export default function SpecializedTerrainManagement() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-primary-600">Challenging Terrain Solutions</h2>
              <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Specialized Terrain Management
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Our specialized terrain management services tackle steep slopes, wetland areas, and overgrowth, ensuring safety, compliance, and optimal land usability.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span className='absolute left-1 top-1 h-6 w-6 text-primary-500'>&#10003;</span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Specialized Terrain Management services"
              src="/PD/marketing/creek-bridge.webp"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
