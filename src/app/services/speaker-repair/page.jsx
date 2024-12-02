import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';
import Locations from '@/components/nj_locations';


export const metadata = {
  title: 'Factory Car Speaker Repair - Birmingham, AL | OEM Radio Repair',
  description:
    'Expert factory car speaker repair in Birmingham, AL. Specializing in OEM audio systems, speaker replacements, and diagnostics. Mail-in service available nationwide.',
  keywords: [
    'car speaker repair near me',
    'speaker repair near me',
    'car speaker replacement',
    'factory speaker repair',
    'OEM car speaker repair',
    'car speaker repair cost',
    'car audio speaker repair near me',
    'factory car audio repair',
    'Birmingham car speaker repair',
  ],
  openGraph: {
    title: 'Factory Car Speaker Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Professional factory car speaker repair in Birmingham, AL. We offer mail-in service nationwide for faulty or damaged OEM speakers.',
    url: 'https://www.oemradiorepair.com/services/speaker-repair',
    images: [
      {
        url: '/meta.webp',
        width: 1200,
        height: 630,
        alt: 'Factory car speaker repair in Birmingham, AL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Factory Car Speaker Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Affordable OEM speaker repair services in Birmingham, AL. Mail-in options available for nationwide service.',
    image: '/meta.webp',
  },
};

export default function SpeakerRepair() {
  return (
    <div>
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-10">
                Factory Car Speaker Repair in Birmingham, AL
              </h1>
              <p className="text-lg leading-7 text-gray-700 mb-8">
                Experiencing issues with your car&apos;s factory-installed speakers? OEM Radio Repair specializes in repairing factory sound systems for all major car brands. Whether your speakers are crackling, distorted, or producing no sound, we have the tools and expertise to get them back to optimal performance.
              </p>

              {/* Section 1: Common Speaker Issues */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Car Speaker Problems We Fix</h2>
                <p className="text-lg leading-7 text-gray-600">
                  We specialize in diagnosing and repairing a range of factory speaker issues, including:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Crackling or distorted sound</li>
                  <li>No audio from one or more speakers</li>
                  <li>Damaged speaker cones or surrounds</li>
                  <li>Intermittent audio output</li>
                  <li>Short circuits or wiring problems</li>
                </ul>
              </section>

              {/* Section 2: Why Choose OEM Radio Repair */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose OEM Radio Repair?</h2>
                <p className="text-lg leading-7 text-gray-600">
                  At OEM Radio Repair, we pride ourselves on providing specialized service for factory sound systems. Here&apos;s why drivers in Birmingham, AL, and across the country trust us:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Skilled technicians experienced in factory audio systems</li>
                  <li>Affordable pricing and upfront cost estimates</li>
                  <li>Convenient mail-in repair services for nationwide customers</li>
                  <li>Fast turnaround times</li>
                  <li>On-site repairs at our Birmingham location</li>
                </ul>
              </section>

              {/* Section 3: Brands We Service */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Brands We Service</h2>
                <p className="text-lg leading-7 text-gray-600">
                  Our expertise spans a wide range of manufacturers, including:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Ford, Dodge, and Toyota</li>
                  <li>Subaru and Jeep</li>
                  <li>Mercedes-Benz factory systems</li>
                  <li>Vintage and custom OEM systems</li>
                </ul>
              </section>

              {/* Section 4: Physical Repairs and Mail-In Service */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repair Options</h2>
                <p className="text-lg leading-7 text-gray-600">
                  Located in Birmingham, AL? Stop by our shop for in-person service. Not in the area? No problem! Our mail-in repair services ensure that customers across the United States can benefit from our expertise. Simply mail your faulty speaker to us, and we&apos;ll handle the rest.
                </p>
              </section>

              {/* Section 5: Call to Action */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Your Speakers Fixed Today</h2>
                <p className="text-lg leading-7 text-gray-600 mb-8">
                  Don&apos;t let broken or damaged speakers ruin your driving experience. Contact OEM Radio Repair today to schedule your repair. Whether you visit us in Birmingham or take advantage of our mail-in service, you&apos;ll receive expert care and reliable results.
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
  );
}
