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
    title: `Factory Sound System Repair - ${cityName}, ${stateName} | OEM Radio Repair`,
    description: `Expert factory sound system repairs in ${cityName}, ${stateName}. Specializing in OEM radio, amplifier, and touch screen repairs for all major car brands.`,
    keywords: [
      `factory sound system repair near ${cityName.toLowerCase()}, ${stateName.toLowerCase()}`,
      `car radio repair near ${cityName.toLowerCase()}, ${stateName.toLowerCase()}`,
      `factory car radio repair near ${cityName.toLowerCase()}`,
      `car radio replacement ${cityName.toLowerCase()}`,
      `factory car radio services in ${cityName.toLowerCase()}, ${stateName.toLowerCase()}`,
      `OEM radio repair near ${cityName.toLowerCase()}`,
      `car radio repair cost ${cityName.toLowerCase()}`,
    ],
    openGraph: {
      title: `Factory Sound System Repair - ${cityName}, ${stateName} | OEM Radio Repair`,
      description: `Specialized OEM sound system repairs for radios, amplifiers, and touch screens in ${cityName}, ${stateName}. Visit our Birmingham location or mail in your equipment for expert service.`,
      url: `https://www.oemradiorepair.com/locations/cities/${cityState}`,
      images: [
        {
          url: '/meta.webp',
          width: 1200,
          height: 630,
          alt: `Factory sound system repair in ${cityName}, ${stateName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Factory Sound System Repair - ${cityName}, ${stateName} | OEM Radio Repair`,
      description: `Expert OEM radio and amplifier repairs in ${cityName}, ${stateName}. Call now or visit our Birmingham location.`,
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
                Radio Repair in {cityName}, {stateName}
              </h1>
              <p className="text-lg leading-7 text-gray-700 mb-8">
                OEM Radio Repair specializes in factory sound system repairs for all major car brands. Whether you&apos;re dealing with a malfunctioning radio, amplifier, or touch screen, our team has the expertise to get your OEM system back to peak performance.
              </p>

              {/* Section 1: Services */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Factory System Repair Services</h2>
                <p className="text-lg leading-7 text-gray-600">
                  We provide professional repair services for:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>OEM radio repair and replacement</li>
                  <li>Amplifier diagnostics and repairs</li>
                  <li>Touch screen calibration and fixes</li>
                  <li>Short circuit and wiring repairs</li>
                  <li>Audio control module replacements</li>
                </ul>
              </section>

              {/* Section 2: Why Choose OEM Radio Repair */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
                <p className="text-lg leading-7 text-gray-600">
                  At OEM Radio Repair, we understand the importance of your car&apos;s factory sound system. Here&apos;s why customers in {cityName}, {stateName}, trust us:
                </p>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Skilled technicians with years of experience</li>
                  <li>Affordable and transparent pricing</li>
                  <li>Fast turnaround times</li>
                  <li>Convenient mail-in service available for all of Alabama</li>
                  <li>Physical repairs available at our Birmingham location</li>
                </ul>
              </section>

              {/* Section 3: Common Brands */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Brands We Service</h2>
                <ul className="list-disc ml-8 mt-4 text-lg text-gray-600">
                  <li>Dodge, Subaru, and Ford</li>
                  <li>Toyota and Jeep</li>
                  <li>Vintage radios and OBS Ford systems</li>
                  <li>Mercedes-Benz factory sound systems</li>
                </ul>
              </section>

              {/* Section 4: Call to Action */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us Today</h2>
                <p className="text-lg leading-7 text-gray-600">
                  Visit us in Birmingham for in-person service or mail your radio, amplifier, or touch screen to us for expert repairs. Let OEM Radio Repair help restore your car&apos;s factory sound system to its original condition.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Schedule Your Repair <span aria-hidden="true">&rarr;</span>
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
