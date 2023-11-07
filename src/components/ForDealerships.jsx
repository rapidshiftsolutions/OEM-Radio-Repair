import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Genuine Parts 💯',
    description:
      'We only use high quality parts, no exceptions, to ensure the best service.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Fast Turn Arounds 🏁',
    description:
      'We have this down to a science. Entrust us to complete your repairs in a timely manner.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Quality Worksmanship 🛠️',
    description:
      'All repairs are completed in Birmingham, Alabama by our expert technicians.',
    href: '#',
    icon: TrashIcon,
  },
]

export default function Example() {
  return (
    <div id="dealers" className="bg-blue-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl">Dealers, Let Us Handle It.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Dealerships across the country trust us to repair their sound systems. Outsource this tedious and timely task to us.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-10 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-white">
 
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>

                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
