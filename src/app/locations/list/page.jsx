import Footer from '@/components/nj_footer';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import cities from '@/data/cities';
import Locations from '@/components/nj_locations'


export const metadata = {
  title: 'Service Locations - OEM Radio Repair',
  description:
    'Discover the full list of locations served by OEM Radio Repair. We offer in-person repairs in Birmingham and mail-in repair services to all cities in Alabama.',
  keywords: [
    'service locations',
    'OEM Radio Repair locations',
    'radio repair near me',
    'factory audio repair Alabama',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Service Locations - OEM Radio Repair',
    description:
      'Discover the full list of locations served by OEM Radio Repair. In-person repairs in Birmingham and mail-in repair services across Alabama.',
    url: 'https://www.oemradiorepair.com/locations',
    type: 'website',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

const LocationsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <QuickNav />
      <Locations />

      <main className="overflow-hidden py-12 sm:py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl mb-12">
            Service Locations
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            Visit our Birmingham location for in-person repairs or use our mail-in services from any city in Alabama.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 shadow-sm rounded-lg p-6 transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {city.name}, {city.state}
                </h3>
                <p className="text-gray-600">
                  Explore repair services for factory radios, amplifiers, and touch screens.
                </p>
                <a
                  href={`/locations/cities/${city.name
                    .toLowerCase()
                    .replace(/\s+/g, '-')}-${city.state.toLowerCase()}`}
                  className="inline-block mt-4 text-primary-500 font-medium hover:underline"
                >
                  Learn More &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationsPage;
