import Footer from '@/components/nj_footer'
import Hero from '@/components/nj_hero'
import Locations from '@/components/nj_locations'
import Navbar from '@/components/nj_navbar'
import QuickNav from '@/components/nj_quicknav'
import RapidShift from '@/components/nj_rapidshift'

export const metadata = {
  title: 'Car Radio Repair Services - Birmingham, AL | OEM Radio Repair',
  description:
    'Get professional car radio repairs at our Birmingham shop or via mail-in service to any city in Alabama. Serving Mountain Brook, Huntsville, Mobile, Montgomery, and beyond.',
  keywords: [
    'car radio repair near Mountain Brook AL',
    'car radio repair near Birmingham AL',
    'factory car radio repair',
    'cheap car radio repair near me',
    'car radio repair cost',
    'best car radio repair near me',
    'car stereo stores Alabama',
    'car radio repairs near me',
    'car radio repair near me open now',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Car Radio Repair Services - Birmingham, AL | OEM Radio Repair',
    description:
      'Visit our shop in Birmingham or use our mail-in service for car radio repairs anywhere in Alabama, including Huntsville, Mobile, Montgomery, and more.',
    url: 'https://www.oemradiorepair.com/services/car-radio-repair',
    type: 'website',
    images: [
      {
        url: '/meta.webp',
        width: 1200,
        height: 630,
        alt: 'Car Radio Repair in Birmingham, AL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Radio Repair Services - Birmingham, AL | OEM Radio Repair',
    description:
      'Affordable car radio repair services in Birmingham, AL, and mail-in repairs available across Alabama. Visit us or ship your radio today.',
    image: '/meta.webp',
  },
}

export const viewport = 'width=device-width, initial-scale=1'

export default function CarRadioRepair() {
  return (
    <div>
      <Navbar />
      <QuickNav />
      <Locations />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:max-w-7xl lg:px-8">
            {/* Introduction */}
            <div className="max-w-4xl">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Car Radio Repair Services in Alabama
              </h1>
              <p className="mb-8 text-xl leading-8 text-gray-700">
                At OEM Radio Repair, we offer expert car radio repair services.
                You can visit our shop in Birmingham, AL, for in-person repairs
                or take advantage of our convenient mail-in service available
                for every city in Alabama.
              </p>
            </div>

            {/* Service Areas */}
            <section className="mt-16">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
                Our Birmingham Shop and Mail-In Repairs for Alabama
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Our repair shop in Birmingham provides hands-on service for
                customers who prefer visiting us in person. For those in other
                cities, we offer mail-in repair options that are fast, reliable,
                and secure. Here&apos;s some of cities we serve with our mail-in
                service:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700">
                <li>Birmingham</li>
                <li>Huntsville</li>
                <li>Mobile</li>
                <li>Montgomery</li>
                <li>Tuscaloosa</li>
                <li>Hoover</li>
                <li>Dothan</li>
                <li>Auburn</li>
                <li>Decatur</li>
                <li>Madison</li>
              </ul>
              <p className="mt-8 text-lg text-gray-700">
                Whether you&apos;re in a major city or a smaller town, OEM Radio
                Repair has you covered.
              </p>
            </section>

            {/* Services */}
            <section className="mt-16">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
                Comprehensive Car Radio Repair Services
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                We specialize in all types of car radio repairs, including:
              </p>
              <ul className="list-disc pl-8 text-lg text-gray-700">
                <li>Factory car radio repair for modern and classic models</li>
                <li>
                  Affordable solutions for damaged or malfunctioning stereos
                </li>
                <li>Fixes for static, distorted audio, or no sound</li>
                <li>
                  Repairs for short circuits, broken buttons, or faulty wiring
                </li>
                <li>Car stereo upgrades and performance enhancements</li>
              </ul>
              <p className="mt-8 text-lg text-gray-700">
                Searching for &apos;car radio repair near Mountain Brook,
                AL&apos; or &apos;factory car radio repair near Birmingham,
                AL&apos;? Visit us or use our mail-in service for professional
                assistance.
              </p>
            </section>

            {/* Call to Action */}
            <section className="mt-16">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
                Get Your Car Radio Fixed Today
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Don&apos;t let a faulty radio disrupt your driving experience.
                Visit our shop in Birmingham or ship your radio to us for
                repair. Contact OEM Radio Repair today to schedule your repair
                or learn more about our services.
              </p>
              <a
                href="/contact"
                className="rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Schedule Your Repair <span aria-hidden="true">&rarr;</span>
              </a>
            </section>
          </div>
        </div>
        <Hero />
      </main>
      <Footer />
      <RapidShift />
    </div>
  )
}
