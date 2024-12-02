import Footer from '@/components/nj_footer'
import Hero from '@/components/nj_hero'
import Locations from '@/components/nj_locations'
import Navbar from '@/components/nj_navbar'
import QuickNav from '@/components/nj_quicknav'
import RapidShift from '@/components/nj_rapidshift'

export const metadata = {
  title: 'Factory Car Touch Screen Repair - Birmingham, AL | OEM Radio Repair',
  description:
    'Professional touch screen repair for factory car systems in Birmingham, AL. Expert service for unresponsive, cracked, or malfunctioning screens. Mail-in repair available nationwide.',
  keywords: [
    'car touch screen repair near me',
    'touch screen repair for car',
    'factory touch screen repair',
    'car touch screen replacement',
    'OEM touch screen repair',
    'car infotainment screen repair',
    'car radio touch screen repair',
    'car screen repair near me',
    'touch screen problems car',
    'touch screen display repair for cars',
    'Birmingham car touch screen repair',
  ],
  openGraph: {
    title:
      'Factory Car Touch Screen Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Expert car touch screen repair services for factory systems in Birmingham, AL. Mail-in service available nationwide for quick and reliable repairs.',
    url: 'https://www.oemradiorepair.com/services/touch-screen-repair',
    images: [
      {
        url: '/meta.webp',
        width: 1200,
        height: 630,
        alt: 'Factory car touch screen repair in Birmingham, AL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Factory Car Touch Screen Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Affordable and reliable touch screen repair for factory systems in Birmingham, AL. Mail-in options available for nationwide service.',
    image: '/meta.webp',
  },
}

export default function TouchScreenRepair() {
  return (
    <div>
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="mb-10 text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
                Factory Car Touch Screen Repair in Birmingham, AL
              </h1>
              <p className="mb-8 text-lg leading-7 text-gray-700">
                Struggling with an unresponsive or malfunctioning touch screen
                in your vehicle? OEM Radio Repair specializes in repairing
                factory-installed touch screens for all major car brands.
                Whether you&apos;re dealing with a cracked screen, calibration
                issues, or a complete display failure, we provide expert
                solutions to restore your system&apos;s functionality.
              </p>

              {/* Section 1: Common Touch Screen Issues */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Common Touch Screen Problems We Fix
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  We offer repair services for a wide range of touch screen
                  issues, including:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>Unresponsive touch inputs</li>
                  <li>Cracked or shattered touch screens</li>
                  <li>Lagging or delayed touch response</li>
                  <li>Black or blank display screens</li>
                  <li>Calibration and alignment problems</li>
                  <li>Software glitches affecting screen functionality</li>
                </ul>
              </section>

              {/* Section 2: Why Choose OEM Radio Repair */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Why Choose OEM Radio Repair?
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  Our team specializes in repairing factory-installed touch
                  screens, ensuring the highest quality service. Here&apos;s why
                  customers in Birmingham and across the country trust us:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>
                    Experienced technicians with expertise in factory systems
                  </li>
                  <li>Affordable pricing with upfront cost estimates</li>
                  <li>Fast turnaround times to minimize downtime</li>
                  <li>
                    Specialized tools for advanced diagnostics and repairs
                  </li>
                  <li>Mail-in repair options for nationwide customers</li>
                  <li>In-person repairs at our Birmingham, AL, location</li>
                </ul>
              </section>

              {/* Section 3: Supported Brands */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Brands We Service
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  We repair touch screens for a variety of manufacturers,
                  including:
                </p>
                <ul className="ml-8 mt-4 list-disc text-lg text-gray-600">
                  <li>Ford, Dodge, and Jeep</li>
                  <li>Subaru and Toyota</li>
                  <li>Mercedes-Benz factory systems</li>
                  <li>Vintage and OEM infotainment systems</li>
                  <li>Uconnect and other factory-installed platforms</li>
                </ul>
              </section>

              {/* Section 4: Repair Options */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Repair Options
                </h2>
                <p className="text-lg leading-7 text-gray-600">
                  Located near Birmingham? Visit us in person for expert
                  diagnostics and same-day repairs. For customers outside the
                  area, our mail-in service provides a convenient way to get
                  your touch screen repaired quickly and efficiently. Simply
                  send your faulty unit to us, and we&apos;ll take care of the
                  rest.
                </p>
              </section>

              {/* Section 5: Call to Action */}
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Schedule Your Repair Today
                </h2>
                <p className="mb-8 text-lg leading-7 text-gray-600">
                  Don&apos;t let a malfunctioning touch screen interfere with
                  your driving experience. Contact OEM Radio Repair today for
                  affordable and reliable repair services. Whether you visit us
                  in Birmingham or mail in your system, we&apos;re here to help!
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
