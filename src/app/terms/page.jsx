import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Intro from '@/components/nj_intro';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import ROW from '@/components/nj_services_ROW';
import Maint from '@/components/nj_services_Maint';
import Terrain from '@/components/nj_services_Terrain';
import RapidShift from '@/components/nj_rapidshift';

export default function TermsConditions() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
        <div className="terms-conditions-container bg-light-50 text-gray-900 py-16 px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold mb-8 text-primary-900">Terms and Conditions for OEM Radio Repair</h1>
            <p className="mb-8 text-lg">
              <strong>Effective Date:</strong> November 15, 2024
            </p>
            <p className="mb-8 text-lg">
              Welcome to <strong>OEM Radio Repair</strong> ("we," "our," or "us"). By accessing or using our
              services, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Services Provided</h2>
            <p className="mb-8">
              OEM Radio Repair provides specialized repair services for factory radios, touch screens, and amplifiers. Our services are offered throughout Birmingham and the surrounding areas.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
            <p className="mb-8">
              By using our services, you confirm that you accept these terms and that you agree to comply with them. If
              you do not agree with any part of these terms, you must not use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <p className="mb-8">
              Payment for services must be made in accordance with the terms set forth in the specific service agreement
              you receive. Failure to make timely payments may result in the suspension or termination of services.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Liability</h2>
            <p className="mb-8">
              OEM Radio Repair will not be liable for any damages resulting from the use or inability to use our
              services. We make no guarantees regarding the results of our services and shall not be held responsible
              for any indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Service Interruptions</h2>
            <p className="mb-8">
              We strive to maintain uninterrupted service. However, we reserve the right to suspend or terminate our
              services without notice for maintenance, repairs, or unforeseen circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
            <p className="mb-8">
              All content, trademarks, and other intellectual property displayed on our website or through our services
              are the property of OEM Radio Repair or its licensors. You are not permitted to use these without
              prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p className="mb-8">
              These terms are governed by and construed in accordance with the laws of the State of Alabama. Any
              disputes arising out of or related to these terms shall be resolved in the courts located in Alabama.
            </p>

            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-8">
              We may update these Terms and Conditions from time to time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting
              the updated terms on our website.
            </p>

            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="mb-8">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mb-4">
              <strong>OEM Radio Repair</strong><br />
              2413 1st Ave S, Birmingham, AL 35233<br />
              <strong>Email:</strong> <a href="mailto:info@oemradiorepair.com" className="text-primary-500 underline">info@oemradiorepair.com</a><br />
              <strong>Phone:</strong> <a href="tel:+12055221162" className="text-primary-500 underline">+1 (205) 522-1162</a>
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
