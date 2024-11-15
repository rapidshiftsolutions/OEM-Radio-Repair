import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Intro from '@/components/nj_intro';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';

export const metadata = {
  title: 'Careers - OEM Radio Repair',
  description:
    'Explore career opportunities at OEM Radio Repair. Join our dedicated team of professionals and help us provide top-quality radio, touch screen, and amplifier repair services.',
  keywords: [
    'careers',
    'jobs at OEM Radio Repair',
    'OEM Radio Repair careers',
    'job opportunities',
    'automotive repair jobs',
    'factory radio repair jobs',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Careers - OEM Radio Repair',
    description: 'Join OEM Radio Repair and be a part of a growing team dedicated to factory radio, touch screen, and amplifier repairs.',
    url: 'https://www.oemradiorepair.com/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - OEM Radio Repair',
    description: 'Discover career opportunities at OEM Radio Repair and help us provide high-quality services in the automotive repair industry.',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function Careers() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <div className="careers-container bg-light-50 text-gray-900 py-16 px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold mb-8 text-primary-900">Careers at OEM Radio Repair</h1>
            <p className="mb-8 text-lg">
              Are you passionate about automotive electronics and customer service? OEM Radio Repair is looking for talented and motivated individuals to join our team. We specialize in repairing factory radios, touch screens, and amplifiers, and we pride ourselves on delivering the highest quality of service to our customers in Birmingham and the surrounding areas.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Current Job Openings</h2>
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Automotive Electronics Technician</h3>
              <p className="text-base text-gray-700 mb-4">
                We are seeking an experienced Automotive Electronics Technician to diagnose, repair, and test factory radios, touch screens, and amplifiers. The ideal candidate will have hands-on experience with automotive electronics and a strong attention to detail.
              </p>
              <p className="text-base text-gray-700">
                <strong>Location:</strong> Birmingham, AL<br />
                <strong>Type:</strong> Full-time<br />
                <strong>Requirements:</strong> 2+ years of experience in automotive electronics repair, strong troubleshooting skills, and a customer-first attitude.
              </p>
            </section>
            <section className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Customer Service Representative</h3>
              <p className="text-base text-gray-700 mb-4">
                We are looking for a Customer Service Representative to handle customer inquiries, schedule appointments, and ensure a smooth service experience. The ideal candidate will have excellent communication skills and a passion for helping customers.
              </p>
              <p className="text-base text-gray-700">
                <strong>Location:</strong> Birmingham, AL<br />
                <strong>Type:</strong> Full-time<br />
                <strong>Requirements:</strong> Previous experience in customer service, strong organizational skills, and a friendly demeanor.
              </p>
            </section>
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <p className="mb-8 text-lg">
              At OEM Radio Repair, we value our employees and provide a supportive work environment with opportunities for growth. We offer competitive salaries, ongoing training, and the chance to work with a dedicated team that is passionate about automotive electronics.
            </p>
            <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
            <p className="mb-8 text-lg">
              If you are interested in joining our team, please send your resume and a cover letter to <a href="mailto:careers@oemradiorepair.com" className="text-primary-500 underline">careers@oemradiorepair.com</a>. We look forward to hearing from you!
            </p>
          </div>
        </div>
        <Intro />
        <Hero />
      </main>
      <Footer />
      <RapidShift />
    </div>
  );
}
