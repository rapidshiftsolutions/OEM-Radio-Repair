import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Intro from '@/components/nj_intro';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';
import Image from 'next/image';

export const metadata = {
  title: 'Amplifier Repair - OEM Radio Repair',
  description:
    'Expert amplifier repair services by OEM Radio Repair. We specialize in repairing factory amplifiers for various vehicle makes and models to restore top-notch sound quality.',
  keywords: [
    'amplifier repair',
    'OEM amplifier repair',
    'car amplifier repair',
    'vehicle amplifier services',
    'OEM Radio Repair',
    'amplifier troubleshooting',
    'factory amplifier repair',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Amplifier Repair - OEM Radio Repair',
    description: 'Professional amplifier repair services to restore the sound quality of your vehicle. We specialize in factory amplifiers for a wide range of makes and models.',
    url: 'https://www.oemradiorepair.com/services/amplifier-repair',
    type: 'website',
    images: [
      {
        url: 'https://www.oemradiorepair.com/OEMRadioRepair/marketing/amplifier-repair.webp',
        width: 1200,
        height: 630,
        alt: 'Amplifier Repair Services by OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplifier Repair - OEM Radio Repair',
    description: 'Specialized amplifier repair services for factory amplifiers by OEM Radio Repair. Restoring top-notch sound quality for your vehicle.',
    image: 'https://www.oemradiorepair.com/OEMRadioRepair/marketing/amplifier-repair.webp'
  }
};

export const viewport = 'width=device-width, initial-scale=1';

export default function AmplifierRepair() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-10">
                Amplifier Repair Services
              </h1>
              <p className="text-xl leading-8 text-gray-700 mb-8">
                OEM Radio Repair specializes in factory amplifier repair services. Our team of expert technicians has years of experience working with a wide range of vehicle makes and models, ensuring that your vehicle&apos;s audio system is restored to its original high-quality performance.
              </p>
            </div>
            <div className="mt-12">
              <Image
                alt="Amplifier Repair Service"
                src="/OEMRadioRepair/marketing/old-toyota.webp"
                width={1200}
                height={800}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <section className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-700 mb-8">
                At OEM Radio Repair, we use advanced diagnostic tools and techniques to identify and fix issues with factory amplifiers. Whether your amplifier is experiencing distortion, no sound, or low volume issues, our experts can help.
              </p>
              <ul className="list-disc ml-8 text-gray-700">
                <li className="mb-4">
                  <strong>Certified Technicians:</strong> Our team consists of highly-trained technicians who understand the intricacies of vehicle audio systems.
                </li>
                <li className="mb-4">
                  <strong>Quality Service:</strong> We provide comprehensive amplifier repair services, ensuring that your vehicle&apos;s sound quality is restored to its optimal level.
                </li>
                <li className="mb-4">
                  <strong>Affordable Pricing:</strong> We offer competitive pricing for all our amplifier repair services without compromising on quality.
                </li>
              </ul>
            </section>
            <section className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Common Amplifier Issues We Fix</h2>
              <ul className="list-disc ml-8 text-gray-700">
                <li className="mb-4">No sound output from speakers</li>
                <li className="mb-4">Distorted or unclear sound</li>
                <li className="mb-4">Overheating and shutting off</li>
                <li className="mb-4">Low or inconsistent volume levels</li>
                <li className="mb-4">Blown fuses or electrical issues</li>
              </ul>
            </section>
            <section className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Get Started Today</h2>
              <p className="text-lg text-gray-700 mb-8">
                If you are experiencing issues with your vehicle&apos;s factory amplifier, contact OEM Radio Repair today. We provide quick turnaround times and excellent customer service to get you back on the road with the sound quality you love.
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
