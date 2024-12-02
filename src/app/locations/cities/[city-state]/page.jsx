import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';
import cities from '@/data/cities';

export async function generateStaticParams() {
  return cities.map((city) => ({
    'city-state': `${city.name.toLowerCase().replace(/\s+/g, '-')}-${city.state.toLowerCase()}`,
  }));
}

export async function generateMetadata({ params }) {
  const cityState = params['city-state'];
  if (!cityState) {
    return {
      title: 'Page Not Found | OEM Radio Repair',
      description: 'This page could not be found.',
    };
  }

  const [city, state] = cityState.split('-');
  const cityName = `${city.charAt(0).toUpperCase()}${city.slice(1)}`;
  const stateName = state.toUpperCase();

  return {
    title: `Expert Car Radio Repair - ${cityName}, ${stateName} | OEM Radio Repair`,
    description: `Affordable car radio and audio repair services in ${cityName}, ${stateName}. Specializing in Dodge, Subaru, Ford, Toyota, Jeep, and vintage radio repair.`,
    keywords: [
      `dodge radio repair near ${cityName.toLowerCase()} ${stateName.toLowerCase()}`,
      `jeep radio repair near me`,
      `subaru radio repair near ${cityName.toLowerCase()} ${stateName.toLowerCase()}`,
      `ford radio repair near ${cityName.toLowerCase()} ${stateName.toLowerCase()}`,
      `toyota radio repair near ${cityName.toLowerCase()} ${stateName.toLowerCase()}`,
      `car audio repair near me`,
      `vintage ford radio repair`,
      `android radio repair near me`,
    ],
    openGraph: {
      title: `Expert Car Radio Repair - ${cityName}, ${stateName} | OEM Radio Repair`,
      description: `Professional car radio repair services for Dodge, Subaru, Ford, Toyota, Jeep, and more in ${cityName}, ${stateName}. Contact us for affordable and expert repairs.`,
      url: `https://www.oemradiorepair.com/locations/cities/${cityState}`,
      images: [
        {
          url: '/meta.webp',
          width: 1200,
          height: 630,
          alt: `Car radio repair services in ${cityName}, ${stateName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Expert Car Radio Repair - ${cityName}, ${stateName} | OEM Radio Repair`,
      description: `Comprehensive car radio repair services in ${cityName}, ${stateName}. Specializing in Dodge, Subaru, Ford, Toyota, and Jeep radio repairs.`,
      image: '/meta.webp',
    },
  };
}

export default function CityPage({ params }) {
  const cityState = params['city-state'];
  const [city, state] = cityState.split('-');
  const cityName = `${city.charAt(0).toUpperCase()}${city.slice(1)}`;
  const stateName = state.toUpperCase();

  return (
    <div>
      <Navbar />
      <QuickNav />
      <main>
        <div className="overflow-hidden bg-light-50 py-12 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl mb-10">
                Car Radio Repair in {cityName}, {stateName}
              </h1>
              <p className="text-lg leading-7 text-gray-700 mb-8">
                Looking for reliable car radio repair in {cityName}, {stateName}? OEM Radio Repair specializes in fixing a variety of car audio systems, including Dodge, Subaru, Ford, Toyota, Jeep, and vintage radios. From repairing short circuits to replacing audio control modules, we provide expert services to restore your car&apos;s audio system to peak performance.
              </p>

              {/* Section 1: Common Brands and Services */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Brands We Service</h2>
                <p className="text-lg leading-7 text-gray-600">
                  Our team is experienced in repairing OEM radios and aftermarket systems. We specialize in:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Dodge Uconnect Radio Repair</li>
                  <li>Subaru OEM Radio Repair</li>
                  <li>Ford ACM (Audio Control Module) Repair and Replacement</li>
                  <li>Toyota Radio Repairs and Parts</li>
                  <li>Jeep Radio Systems</li>
                  <li>Vintage and OBS Ford Radios</li>
                  <li>Mercedes-Benz and Pioneer Car Audio Repairs</li>
                </ul>
              </section>

              {/* Section 2: Why Choose OEM Radio Repair */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
                <p className="text-lg leading-7 text-gray-600">
                  At OEM Radio Repair, we pride ourselves on offering high-quality, affordable, and reliable car audio repair services. Here’s why drivers in {cityName}, {stateName}, choose us:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Skilled technicians with expertise in OEM and aftermarket systems</li>
                  <li>Affordable pricing and transparent cost estimates</li>
                  <li>Fast turnaround times to get you back on the road quickly</li>
                  <li>Specialized tools for complex repairs like circuit board fixes</li>
                  <li>Mobile repair options for added convenience</li>
                </ul>
              </section>

              {/* Section 3: Common Repairs */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Car Radio Issues We Fix</h2>
                <p className="text-lg leading-7 text-gray-600">
                  Our team can handle a wide range of car radio problems, including:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Short circuits and damaged wiring</li>
                  <li>Unresponsive touch screens and faulty displays</li>
                  <li>Static, distorted, or no audio output</li>
                  <li>Failed software updates in Android and OEM systems</li>
                  <li>Replacement of faulty components like control knobs and buttons</li>
                </ul>
              </section>

              {/* Section 4: Call to Action */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Schedule Your Repair Today</h2>
                <p className="text-lg leading-7 text-gray-600 mb-8">
                  Don&apos;t let a malfunctioning car radio disrupt your driving experience. Contact OEM Radio Repair in {cityName}, {stateName}, today for professional and affordable repairs. Let us help you restore your car&apos;s audio system to its full potential.
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
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
