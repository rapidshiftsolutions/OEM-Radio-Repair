import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';
import Image from 'next/image';

export const metadata = {
  title: 'Car Amplifier Repair - Birmingham, AL | OEM Radio Repair',
  description:
    'Looking for car amplifier repair shops near Birmingham, AL? OEM Radio Repair offers top-rated car and truck amplifier repair services at competitive prices. Call today for mobile repair options!',
  keywords: [
    'car amplifier repair shops near me',
    'car audio amplifier repair near me',
    'car audio amplifier repair shop near me',
    'car amplifier repair near me',
    'mobile car amplifier repair Birmingham AL',
    'truck amplifier repair Birmingham AL',
    'car or truck amplifier repair Birmingham AL reviews',
    'car or truck amplifier repair Birmingham AL prices',
    'car or truck amplifier repair Birmingham AL phone number',
    'best car or truck amplifier repair Birmingham AL',
    'car or truck amplifier repair Birmingham AL cost',
    'radio active car stereos inc',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Car Amplifier Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Expert car amplifier repair services in Birmingham, AL. Find the best repair prices and mobile repair options with top reviews. Schedule today!',
    url: 'https://www.oemradiorepair.com/services/car-amplifier-repair',
    type: 'website',
    images: [
      {
        url: '/meta.webp',
        width: 1200,
        height: 630,
        alt: 'Car Amplifier Repair in Birmingham, AL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Amplifier Repair - Birmingham, AL | OEM Radio Repair',
    description:
      'Affordable and reliable car amplifier repair services in Birmingham, AL. Mobile repairs and top-rated customer reviews available!',
    image: '/meta.webp',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function AmplifierRepair() {
  return (
    <div>
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:max-w-7xl lg:px-8">
            {/* Introduction */}
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-10">
                Car and Truck Amplifier Repair in Birmingham, AL
              </h1>
              <p className="text-xl leading-8 text-gray-700 mb-8">
                OEM Radio Repair is the top choice for car and truck amplifier repairs in Birmingham, AL. If you&apos;re searching for the best car amplifier repair in Birmingham AL, you&apos;ve found it! We deliver expert services tailored to your needs. Contact us for affordable pricing and mobile repair options!
              </p>
            </div>
            <Image
              alt="Car and Truck Amplifier Repair"
              src="/OEMRadioRepair/marketing/speaker.webp"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg object-cover"
            />

            {/* Why Choose Us */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Why OEM Radio Repair is the Best in Birmingham
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At OEM Radio Repair, we understand the frustration of faulty amplifiers. That’s why we provide high-quality repair services backed by top customer reviews. Here’s what makes us the best choice for amplifier repair:
              </p>
              <ul className="list-disc ml-8 text-gray-700">
                <li className="mb-4">
                  <strong>Expert Technicians:</strong> Skilled in diagnosing and repairing all amplifier issues.
                </li>
                <li className="mb-4">
                  <strong>Mobile Services:</strong> We bring our repair expertise to you, perfect for busy schedules.
                </li>
                <li className="mb-4">
                  <strong>Affordable Pricing:</strong> Transparent pricing ensures you get value without surprises.
                </li>
                <li className="mb-4">
                  <strong>Top Reviews:</strong> See why customers rate us as the &quot;best car amplifier repair in Birmingham, AL.&quot;
                </li>
              </ul>
            </section>

            {/* Common Issues */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Common Amplifier Issues We Repair
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our technicians handle a variety of amplifier problems, including:
              </p>
              <ul className="list-disc ml-8 text-gray-700">
                <li className="mb-4">Distorted or weak sound output</li>
                <li className="mb-4">Amplifiers overheating or shutting down</li>
                <li className="mb-4">Blown fuses and electrical failures</li>
                <li className="mb-4">Inconsistent or low volume levels</li>
                <li className="mb-4">No sound output from speakers</li>
              </ul>
              <p className="text-lg text-gray-700">
                Searching for &apos;car amplifier repair near me&apos;? OEM Radio Repair in Birmingham, AL, has you covered!
              </p>
            </section>

            {/* Pricing and Contact */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Pricing, Reviews, and Mobile Services
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you’re concerned about car or truck amplifier repair prices, or mobile repairs, we provide flexible solutions to meet your needs. Here’s how we make the repair process seamless:
              </p>
              <ul className="list-disc ml-8 text-gray-700">
                <li className="mb-4">
                  <strong>Contact Us:</strong> Call <a href="tel:+12055221162" className="text-primary-500 underline">+1 205-522-1162</a> to speak with our experts.
                </li>
                <li className="mb-4">
                  <strong>Affordable Costs:</strong> Competitive pricing with no hidden fees.
                </li>
                <li className="mb-4">
                  <strong>Mobile Repairs:</strong> We come to you for convenience and efficiency.
                </li>
                <li className="mb-4">
                  <strong>Customer Reviews:</strong> Check our glowing reviews to see why we’re rated as the best in Birmingham.
                </li>
              </ul>
            </section>

            {/* Call to Action */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Schedule Your Amplifier Repair Today!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Don’t wait—fix your car or truck amplifier today. Contact OEM Radio Repair in Birmingham, AL, for affordable, reliable service. Your perfect sound system is just a call away!
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
  );
}
