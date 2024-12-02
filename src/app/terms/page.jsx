import Footer from '@/components/nj_footer';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';

export const metadata = {
  title: 'Terms and Conditions - OEM Radio Repair',
  description:
    'Review the terms and conditions for using OEM Radio Repair services, including repair terms, payment policies, and limitations of liability.',
  keywords: [
    'terms and conditions',
    'OEM Radio Repair terms',
    'repair policies',
    'service agreement',
    'user agreement',
    'liability limitations',
    'payment terms',
    'refund policies',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Terms and Conditions - OEM Radio Repair',
    description:
      'Understand the terms and conditions that apply to OEM Radio Repair services, including repair guidelines and customer obligations.',
    url: 'https://www.oemradiorepair.com/terms-and-conditions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions - OEM Radio Repair',
    description: 'Read the terms and conditions for OEM Radio Repair services and understand your responsibilities as a customer.',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function TermsAndConditions() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <QuickNav />
      <main className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-10">
              Terms and Conditions
            </h1>
            <p className="text-base leading-7 text-gray-700 mb-8">
              Last updated: November 15, 2024
            </p>
            {/* Section 1: Agreement to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-base text-gray-600">
                By accessing or using OEM Radio Repair services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services.
              </p>
            </section>
            {/* Section 2: Service Scope */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Scope</h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair specializes in factory radio, amplifier, and touch screen repairs. Services are available both through our Birmingham, AL, location for in-person repairs and via mail-in service for customers nationwide.
              </p>
              <p className="mt-4 text-base text-gray-600">
                All repairs are conducted using industry-standard techniques and materials. OEM Radio Repair does not install or repair aftermarket audio systems.
              </p>
            </section>
            {/* Section 3: Payment Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <ul className="list-disc ml-8 text-gray-600">
                <li className="mb-4">
                  Full payment is required at the time of service or prior to shipping repaired items back to the customer.
                </li>
                <li className="mb-4">
                  Accepted payment methods include credit cards, debit cards, and online payment platforms. Checks are not accepted.
                </li>
                <li className="mb-4">
                  Unpaid invoices may result in delayed service or return of repaired items.
                </li>
              </ul>
            </section>
            {/* Section 4: Shipping and Handling */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Shipping and Handling</h2>
              <p className="text-base text-gray-600">
                Customers using mail-in repair services are responsible for shipping costs to and from OEM Radio Repair. OEM Radio Repair is not liable for damages or delays caused during transit.
              </p>
              <p className="mt-4 text-base text-gray-600">
                It is recommended that customers insure their packages and use a reliable shipping service.
              </p>
            </section>
            {/* Section 5: Warranty and Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Warranty and Liability</h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair provides a 1-Year Limited Warranty on all repairs. The warranty covers defects in workmanship or materials but does not extend to damage caused by misuse, accidents, or unauthorized modifications.
              </p>
              <p className="mt-4 text-base text-gray-600">
                Liability is limited to the cost of the repair service. OEM Radio Repair is not responsible for any indirect, incidental, or consequential damages.
              </p>
            </section>
            {/* Section 6: Refund Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Refund Policy</h2>
              <p className="text-base text-gray-600">
                Refunds are issued only if OEM Radio Repair is unable to complete the requested service. Refunds are not provided for diagnostic fees or shipping costs.
              </p>
            </section>
            {/* Section 7: Customer Responsibilities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Customer Responsibilities</h2>
              <ul className="list-disc ml-8 text-gray-600">
                <li className="mb-4">
                  Ensure accurate information is provided when scheduling repairs.
                </li>
                <li className="mb-4">
                  Properly package and ship items for mail-in service to prevent damage during transit.
                </li>
                <li className="mb-4">
                  Notify OEM Radio Repair of any issues promptly after receiving repaired items.
                </li>
              </ul>
            </section>
            {/* Section 8: Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-base text-gray-600">
                These Terms and Conditions are governed by the laws of the State of Alabama. Any disputes arising from this agreement will be resolved in the courts of Jefferson County, Alabama.
              </p>
            </section>
            {/* Section 9: Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-base text-gray-600">
                For questions regarding these Terms and Conditions, please contact:
              </p>
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
