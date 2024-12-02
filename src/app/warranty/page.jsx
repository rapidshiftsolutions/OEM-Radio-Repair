import Footer from '@/components/nj_footer';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';

export const metadata = {
  title: 'Warranty - OEM Radio Repair',
  description:
    'OEM Radio Repair provides a comprehensive warranty policy for factory radio, amplifier, and touch screen repairs, with clear guidelines and exclusions.',
  keywords: [
    'car radio warranty',
    'OEM Radio Repair warranty terms',
    'amplifier warranty',
    'touch screen warranty policy',
    'factory radio repair guarantee',
    'audio system repair coverage',
    'OEM audio repairs warranty',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Warranty - OEM Radio Repair',
    description: 'Understand the warranty coverage provided for OEM Radio Repair services including terms, exclusions, and claim process.',
    url: 'https://www.oemradiorepair.com/warranty',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warranty - OEM Radio Repair',
    description: 'OEM Radio Repair offers a warranty for factory radios, amplifiers, and touch screen repairs with clear terms and exclusions.',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function Warranty() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <QuickNav />
      <main className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-10">
              Warranty Policy
            </h1>
            <p className="text-base leading-7 text-gray-700 mb-8">
              Effective Date: November 15, 2024
            </p>
            {/* Warranty Coverage */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprehensive Warranty Coverage
              </h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair offers a 1-Year Limited Warranty on repairs for factory radios, amplifiers, and touch screens. This warranty applies exclusively to the original customer and covers defects in workmanship or materials used in our repair services.
              </p>
              <p className="mt-4 text-base text-gray-600">
                This warranty includes:
              </p>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Replacement of defective parts due to workmanship or material failure.</li>
                <li>Reassessments and additional repairs if the initial service did not meet quality standards.</li>
              </ul>
              <p className="mt-4 text-base text-gray-600">
                Note: The warranty does not apply to products or components outside the original scope of repair.
              </p>
            </section>
            {/* Warranty Exclusions */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranty Limitations and Exclusions</h2>
              <p className="text-base text-gray-600">
                The warranty does not cover:
              </p>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Damage from misuse, accidents, improper installations, or modifications.</li>
                <li>Issues arising from subsequent repairs or interference by unauthorized parties.</li>
                <li>Environmental damage (e.g., water, fire, or extreme temperatures).</li>
                <li>Cosmetic defects that do not affect functionality.</li>
              </ul>
              <p className="mt-4 text-base text-gray-600">
                Customers are advised to handle repaired items with care and avoid exposure to extreme conditions.
              </p>
            </section>
            {/* Claim Procedure */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to File a Warranty Claim</h2>
              <p className="text-base text-gray-600">
                To initiate a warranty claim, customers must:
              </p>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Provide proof of original service (e.g., invoice or receipt).</li>
                <li>Submit a detailed description of the issue, accompanied by photos if applicable.</li>
                <li>Contact OEM Radio Repair via phone or email to schedule an inspection.</li>
              </ul>
              <p className="mt-4 text-base text-gray-600">
                If the defect qualifies for warranty coverage, repairs or replacements will be arranged at no additional cost.
              </p>
            </section>
            {/* Disclaimer and Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer and Limitation of Liability</h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair’s liability is strictly limited to the repair or replacement of defective parts. We are not responsible for any incidental or consequential damages, including but not limited to:
              </p>
              <ul className="list-disc ml-8 mt-4 text-gray-600">
                <li>Loss of use or inconvenience.</li>
                <li>Damage to vehicles or personal property.</li>
              </ul>
            </section>
            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <address className="text-base text-gray-600 not-italic">
                OEM Radio Repair<br />
                2413 1st Ave S, Birmingham, AL 35233<br />
                Email: info@oemradiorepair.com<br />
                Phone: +1 (205) 522-1162
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
