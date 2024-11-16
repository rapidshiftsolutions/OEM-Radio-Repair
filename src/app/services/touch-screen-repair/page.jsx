import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Intro from '@/components/nj_intro';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';

export const metadata = {
  title: 'Touch Screen Repair - OEM Radio Repair',
  description:
    'Professional touch screen repair services by OEM Radio Repair. We specialize in fixing vehicle touch screen issues including unresponsive screens and calibration problems.',
  keywords: [
    'touch screen repair',
    'vehicle touch screen fix',
    'car infotainment repair',
    'OEM radio repair',
    'touch screen calibration',
    'infotainment system issues',
    'Birmingham car touch screen repair',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Touch Screen Repair - OEM Radio Repair',
    description: 'Get your vehicle touch screen repaired by our professional team at OEM Radio Repair. We provide quick and reliable touch screen fixes in Birmingham and surrounding areas.',
    url: 'https://www.oemradiorepair.com/services/touch-screen-repair',
    type: 'website',
    images: [
      {
        url: 'https://www.oemradiorepair.com/OEMRadioRepair/marketing/touch-screen-repair.webp',
        width: 1200,
        height: 630,
        alt: 'Touch screen repair service for vehicles by OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Touch Screen Repair - OEM Radio Repair',
    description: 'Professional touch screen repair services by OEM Radio Repair. Specializing in vehicle infotainment system repairs in Birmingham.',
    image: 'https://www.oemradiorepair.com/OEMRadioRepair/marketing/touch-screen-repair.webp'
  }
};

export const viewport = 'width=device-width, initial-scale=1';

export default function TouchScreenRepair() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-semibold tracking-tight text-primary-900 sm:text-5xl mb-10">
                Touch Screen Repair
              </h1>
              <p className="text-base leading-7 text-gray-700 mb-8">
                Has your vehicle&apos;s touch screen stopped responding? Experiencing calibration issues or intermittent responsiveness? OEM Radio Repair offers specialized touch screen repair services for all makes and models. Located in Birmingham, we ensure that your vehicle&apos;s infotainment system is restored to optimal condition quickly and efficiently.
              </p>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Issues We Fix</h2>
                <ul className="list-disc ml-8 mt-4 text-base/7 text-gray-600">
                  <li>Unresponsive touch screens</li>
                  <li>Incorrect or lagging touch response</li>
                  <li>Calibration errors causing incorrect touch detection</li>
                  <li>Cracked or physically damaged touch screens</li>
                  <li>Software glitches affecting the screen interface</li>
                </ul>
              </section>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
                <p className="text-base/7 text-gray-600">
                  At OEM Radio Repair, we understand the importance of your vehicle&apos;s infotainment system. Our expert technicians have years of experience working with touch screen interfaces, ensuring precise and reliable repairs. We use high-quality replacement parts and thorough testing procedures to guarantee your satisfaction.
                </p>
                <p className="mt-4 text-base/7 text-gray-600">
                  Whether it&apos;s a minor calibration fix or replacing an entire touch screen, we have the tools and expertise to handle it. We pride ourselves on offering quick turnaround times, transparent pricing, and exceptional service to all our customers.
                </p>
              </section>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schedule Your Repair Today</h2>
                <p className="text-base/7 text-gray-600">
                  Don’t let a faulty touch screen ruin your driving experience. Contact us today to schedule your touch screen repair and get your infotainment system back in action.
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
        <Hero />
        <Intro />
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
