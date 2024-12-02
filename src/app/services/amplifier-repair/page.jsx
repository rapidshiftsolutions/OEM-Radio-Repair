import Footer from '@/components/nj_footer'
import Hero from '@/components/nj_hero'
import Locations from '@/components/nj_locations'
import Navbar from '@/components/nj_navbar'
import QuickNav from '@/components/nj_quicknav'
import RapidShift from '@/components/nj_rapidshift'

export const metadata = {
  title: 'Factory Car Amplifier Repair - Birmingham, AL | OEM Radio Repair',
  description:
    'Expert car amplifier repair services in Birmingham, AL. Specializing in factory amplifiers, we provide in-person and mail-in repairs nationwide. Contact us today!',
  keywords: [
    'car amplifier repair near me',
    'factory amplifier repair services',
    'OEM amplifier repair',
    'amplifier repair cost',
    'car audio amplifier repair',
    'factory car amplifier repair Birmingham AL',
    'truck amplifier repair',
    'amplifier repair service near me',
    'audio system repair',
    'factory amplifier replacement',
  ],
  openGraph: {
    title: 'Factory Car Amplifier Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Affordable and professional car amplifier repair services in Birmingham, AL. Mail-in service available nationwide for quick and reliable repairs.',
    url: 'https://www.oemradiorepair.com/services/amplifier-repair',
    images: [
      {
        url: '/meta.webp',
        width: 1200,
        height: 630,
        alt: 'Factory car amplifier repair in Birmingham, AL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Factory Car Amplifier Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Professional and affordable car amplifier repair services in Birmingham, AL. Mail-in options available nationwide for factory amplifiers.',
    image: '/meta.webp',
  },
}

export default function AmplifierRepair() {
  return (
    <div>
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
                Factory Car Amplifier Repair in Birmingham, AL
              </h1>
              <p className="mb-8 text-lg leading-7 text-gray-700">
                Experiencing issues with your car&apos;s amplifier? OEM Radio
                Repair specializes in repairing factory-installed amplifiers for
                all major vehicle brands. Whether you&apos;re dealing with low
                sound quality, distortion, or complete amplifier failure, we
                provide expert solutions to restore your audio system&apos;s
                performance.
              </p>

              {/* Section 1: Common Amplifier Issues */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Common Amplifier Problems We Fix
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  Our technicians handle a wide range of amplifier issues,
                  including:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>Distorted or static-filled sound</li>
                  <li>No sound output from speakers</li>
                  <li>Amplifier overheating and shutting down</li>
                  <li>Blown fuses and electrical failures</li>
                  <li>Low or inconsistent volume levels</li>
                </ul>
              </section>

              {/* Section 2: Why Choose OEM Radio Repair */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Why Choose OEM Radio Repair?
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  At OEM Radio Repair, we provide top-tier amplifier repair
                  services tailored to meet your needs. Here&apos;s why
                  customers in Birmingham and nationwide trust us:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>Expert technicians specializing in factory amplifiers</li>
                  <li>Affordable and transparent pricing</li>
                  <li>
                    Fast turnaround times for both in-person and mail-in repairs
                  </li>
                  <li>High-quality replacement parts for durable repairs</li>
                  <li>Convenient mail-in service for nationwide customers</li>
                </ul>
              </section>

              {/* Section 3: Supported Brands */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Brands We Service
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  We specialize in repairing factory-installed amplifiers from
                  leading manufacturers, including:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>Ford ACM (Audio Control Module) Repairs</li>
                  <li>Dodge and Jeep Amplifiers</li>
                  <li>Subaru OEM Amplifier Repairs</li>
                  <li>Toyota Amplifiers</li>
                  <li>Vintage and luxury vehicle amplifiers</li>
                </ul>
              </section>

              {/* Section 4: Repair Options */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Repair Options
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  We offer two convenient options for amplifier repair:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>
                    <strong>In-Person Repairs:</strong> Visit us at our
                    Birmingham, AL, location for diagnostics and quick repairs.
                  </li>
                  <li>
                    <strong>Mail-In Service:</strong> Can’t make it to
                    Birmingham? Send your amplifier to us for professional
                    repair and fast return shipping.
                  </li>
                </ul>
              </section>

              {/* Section 5: Call to Action */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Schedule Your Repair Today
                </h2>
                <p className="mb-8 text-lg leading-7 text-gray-600">
                  Don&apos;t let a malfunctioning amplifier ruin your driving
                  experience. Contact OEM Radio Repair today for affordable and
                  reliable amplifier repair services. Whether you visit us in
                  Birmingham or mail in your unit, we&apos;ll ensure your audio
                  system is back to its best.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Contact Us Now <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Locations />
        <Hero />
      </main>
      <Footer />
      <RapidShift />
    </div>
  )
}
