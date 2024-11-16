import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Intro from '@/components/nj_intro';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';

export const metadata = {
  title: 'Service Locations - OEM Radio Repair',
  description:
    'Discover the full list of locations served by OEM Radio Repair. We offer specialized repair services for factory radios, amplifiers, and touch screens in Birmingham, AL, and the surrounding areas.',
  keywords: [
    'Service locations',
    'Birmingham radio repair',
    'OEM Radio Repair',
    'car audio repair Birmingham',
    'amplifier repair',
    'touch screen repair',
    'factory radio service',
    'vehicle audio system repair',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Service Locations - OEM Radio Repair',
    description: 'Explore the areas served by OEM Radio Repair for specialized vehicle audio system repair services in Birmingham, AL, and surrounding regions.',
    url: 'https://www.oemradiorepair.com/services/locations',
    type: 'website',
    images: [
      {
        url: 'https://www.oemradiorepair.com/OEMRadioRepair/marketing/audi.webp',
        width: 1200,
        height: 630,
        alt: 'Service Locations of OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Locations - OEM Radio Repair',
    description: 'OEM Radio Repair provides specialized vehicle audio system repair services across Birmingham, AL, and nearby areas.',
    image: 'https://www.oemradiorepair.com/OEMRadioRepair/marketing/audi.webp'
  }
};

export const viewport = 'width=device-width, initial-scale=1';

export default function ServiceLocations() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-white py-10 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
Our Service Areas
              </h1>
              <p className="mt-6 text-balance text-xl/8 text-gray-700">
                OEM Radio Repair is proud to serve Birmingham, Alabama, and the surrounding areas. Our specialized repair services include factory radios, touch screens, and amplifiers, ensuring that your vehicle&apos;s audio system is restored to its original condition.
              </p>
            </div>
            <section className="">
              <ul className="mt-6 list-disc pl-8 text-base/7 text-gray-600">
                <li>Birmingham</li>
                <li>Hoover</li>
                <li>Vestavia Hills</li>
                <li>Mountain Brook</li>
                <li>Homewood</li>
                <li>Trussville</li>
                <li>Bessemer</li>
                <li>Pelham</li>
                <li>Alabaster</li>
                <li>Gardendale</li>
              </ul>
              <p className="mt-8 text-base/7 text-gray-600">
                Our experienced team is dedicated to providing high-quality, reliable repair services for your vehicle&apos;s audio system. Whether you&apos;re dealing with a malfunctioning radio, amplifier, or touch screen, OEM Radio Repair has you covered.
              </p>
            </section>
          </div>
        </div>
        <Hero />
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
