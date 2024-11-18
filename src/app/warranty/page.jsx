import Footer from '@/components/nj_footer';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';

export const metadata = {
  title: 'Warranty - OEM Radio Repair',
  description:
    'OEM Radio Repair warranty information outlining the coverage and guarantees for our factory radio, amplifier, and touch screen repair services.',
  keywords: [
    'radio warranty',
    'OEM Radio Repair warranty',
    'radio repair guarantee',
    'product warranty',
    'service warranty',
    'warranty coverage',
    'amplifier repair',
    'touch screen repair',
    'car audio services guarantee',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Warranty - OEM Radio Repair',
    description: 'Learn about the warranty coverage provided by OEM Radio Repair for our factory radio, amplifier, and touch screen repair services.',
    url: 'https://www.oemradiorepair.com/warranty',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warranty - OEM Radio Repair',
    description: 'OEM Radio Repair warranty coverage for factory radios, amplifiers, and touch screen repairs.',
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
              Warranty
            </h1>
            <p className="text-base leading-7 text-gray-700 mb-8">
              Last updated: November 15th, 2024
            </p>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1-Year Limited Warranty</h2>
              <p className="text-base/7 text-gray-600">
                OEM Radio Repair provides a 1-Year Limited Warranty on all factory radio, amplifier, and touch screen repair services. This warranty covers defects in materials and workmanship under normal use and conditions for a period of one year from the date of repair. The 1-Year Limited Warranty is applicable to the original purchaser of our services and is non-transferable.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                This warranty includes repairs or replacement of defective components, at no cost to the customer, provided the defect is due to our repair services or materials. Please note that our warranty does not cover damage caused by accidents, acts of nature, improper use, or modifications performed by others.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranty Exclusions</h2>
              <p className="text-base/7 text-gray-600">
                Our 1-Year Limited Warranty does not cover damage resulting from the following:
              </p>
              <ul className="list-disc ml-8 mt-4 text-base/7 text-gray-600">
                <li>Acts of nature, including but not limited to floods, earthquakes, and severe weather.</li>
                <li>Improper use or handling of radios, amplifiers, or touch screens.</li>
                <li>Modifications, alterations, or repairs not performed by OEM Radio Repair.</li>
                <li>Damage resulting from the installation of incompatible aftermarket accessories.</li>
                <li>Accidental or intentional damage caused by the vehicle owner or third parties.</li>
              </ul>
              <p className="mt-4 text-base/7 text-gray-600">
                Additionally, normal wear and tear, such as fading, discoloration, or minor component degradation, is not covered under this warranty.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Claim Procedure</h2>
              <p className="text-base/7 text-gray-600">
                To file a warranty claim, please contact our office by phone or email. You will need to provide proof of service, a description of the issue, and any relevant photos. We will schedule an inspection to assess the problem and determine the appropriate course of action.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                If the issue is determined to be covered under warranty, we will repair or replace the defective components at no cost. In cases where the problem is not covered, we can provide a quote for the necessary repairs.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Maintenance Requirements</h2>
              <p className="text-base/7 text-gray-600">
                To ensure your repaired components remain in optimal condition and that your warranty remains valid, it is essential to follow proper maintenance guidelines. This includes avoiding exposure to excessive moisture, preventing electrical overloads, and handling all components with care. Failure to properly maintain your audio system may void the warranty.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                OEM Radio Repair also offers routine maintenance services to help keep your vehicle's audio system in top shape. Regular checkups will not only keep your system functioning properly but also extend its lifespan.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-base/7 text-gray-600">
                OEM Radio Repair’s liability under this warranty is limited to repair or replacement of the defective product or workmanship. We are not responsible for any incidental or consequential damages, including but not limited to property damage, loss of use, or personal injury.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                This warranty is provided in lieu of all other warranties, expressed or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-base/7 text-gray-600">
                For warranty claims or questions, please contact us at:
              </p>
              <address className="text-base/7 text-gray-600 not-italic">
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
