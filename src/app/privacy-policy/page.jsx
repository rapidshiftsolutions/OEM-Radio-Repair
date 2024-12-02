import Footer from '@/components/nj_footer';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';

export const metadata = {
  title: 'Privacy Policy - OEM Radio Repair',
  description:
    'Learn about the privacy practices of OEM Radio Repair, including how we collect, use, and protect your personal information.',
  keywords: [
    'privacy policy',
    'OEM Radio Repair privacy',
    'data protection policy',
    'personal information use',
    'customer data privacy',
    'data security',
    'information collection',
  ],
  author: 'OEM Radio Repair',
  openGraph: {
    title: 'Privacy Policy - OEM Radio Repair',
    description:
      'OEM Radio Repair values your privacy. Read our detailed privacy policy to learn how we handle and protect your information.',
    url: 'https://www.oemradiorepair.com/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - OEM Radio Repair',
    description: 'Understand how OEM Radio Repair collects, uses, and protects your personal information.',
  },
};

export const viewport = 'width=device-width, initial-scale=1';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <QuickNav />
      <main className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:max-w-5xl lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-10">
              Privacy Policy
            </h1>
            <p className="text-base leading-7 text-gray-700 mb-8">
              Last updated: November 15, 2024
            </p>
            {/* Section 1: Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair collects the following types of information to provide and improve our services:
              </p>
              <ul className="list-disc ml-8 mt-4 text-base text-gray-600">
                <li>Personal Information: Name, email address, phone number, shipping address, and payment details.</li>
                <li>Device Information: IP address, browser type, and operating system.</li>
                <li>Service Details: Information about your vehicle&apos;s audio system and repair history.</li>
                <li>Communication Records: Emails, phone calls, and other correspondence with our team.</li>
              </ul>
            </section>
            {/* Section 2: How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair uses the information collected for the following purposes:
              </p>
              <ul className="list-disc ml-8 mt-4 text-base text-gray-600">
                <li>To process and fulfill repair orders.</li>
                <li>To communicate updates regarding your service status.</li>
                <li>To improve our website, products, and services based on customer feedback.</li>
                <li>To process payments securely and efficiently.</li>
                <li>To comply with legal requirements and prevent fraudulent activities.</li>
              </ul>
            </section>
            {/* Section 3: Information Sharing and Disclosure */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-base text-gray-600">
                We do not sell or rent your personal information. However, we may share your information in the following circumstances:
              </p>
              <ul className="list-disc ml-8 mt-4 text-base text-gray-600">
                <li>With trusted service providers who assist in processing payments, shipping, or customer support.</li>
                <li>When required by law, such as responding to subpoenas or legal processes.</li>
                <li>To protect the rights, property, or safety of OEM Radio Repair, our customers, or others.</li>
              </ul>
            </section>
            {/* Section 4: Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-base text-gray-600">
                We implement robust security measures to protect your personal information, including encryption, secure servers, and regular security audits. Despite our best efforts, no method of data transmission or storage is entirely secure, and we cannot guarantee absolute security.
              </p>
            </section>
            {/* Section 5: Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-base text-gray-600">
                As a customer, you have the following rights regarding your personal information:
              </p>
              <ul className="list-disc ml-8 mt-4 text-base text-gray-600">
                <li>Access: Request a copy of the personal data we have about you.</li>
                <li>Correction: Update or correct inaccuracies in your information.</li>
                <li>Deletion: Request the deletion of your personal information, subject to legal obligations.</li>
                <li>Opt-Out: Unsubscribe from promotional communications at any time.</li>
              </ul>
            </section>
            {/* Section 6: Cookies and Tracking */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="text-base text-gray-600">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us analyze website traffic, remember user preferences, and improve functionality. You can manage cookie preferences through your browser settings.
              </p>
            </section>
            {/* Section 7: Changes to This Privacy Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-base text-gray-600">
                OEM Radio Repair reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to this page. We encourage you to review this policy periodically for updates.
              </p>
            </section>
            {/* Section 8: Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-base text-gray-600">
                If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at:
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
