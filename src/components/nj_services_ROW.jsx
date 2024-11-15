import React from 'react';

const features = [
  {
    name: 'Electrical ROW Mowing',
    description:
      'Efficient right-of-way mowing services for electrical lines to ensure safety and accessibility.',
  },
  {
    name: 'Pipeline ROW Mowing',
    description:
      'Specialized mowing services to maintain clear access to pipelines, ensuring compliance and operational efficiency.',
  },
  {
    name: 'Sewer ROW Mowing',
    description:
      'Mowing services for sewer rights-of-way to prevent overgrowth and maintain proper infrastructure visibility.',
  },
];

export default function RightOfWayServices() {
  return (
    <div className="overflow-hidden bg-light-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-primary-400">Ensuring Accessibility</h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Right of Way Services
              </p>
              <p className="mt-6 text-lg text-gray-300">
                Our Right of Way (ROW) services ensure that critical infrastructure is always accessible, safe, and well-maintained, reducing risks and improving operational efficiency.
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
            alt="Right of Way services"
            src="/PD/marketing/row.webp"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
