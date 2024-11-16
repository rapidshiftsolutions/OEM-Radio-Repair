import Footer from '@/components/nj_footer';
import Hero from '@/components/nj_hero';
import Intro from '@/components/nj_intro';
import Navbar from '@/components/nj_navbar';
import QuickNav from '@/components/nj_quicknav';
import RapidShift from '@/components/nj_rapidshift';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <QuickNav />
      <main>
      <div className="privacy-policy-container bg-light-50 text-gray-900 py-16 px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-8 text-primary-900">Privacy Policy for OEM Radio Repair</h1>
        <p className="mb-8 text-lg">
          <strong>Effective Date:</strong> November 15, 2024
        </p>
        <p className="mb-8 text-lg">
          <strong>OEM Radio Repair</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
          protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and
          safeguard your information when you visit our website, use our services, or interact with us in other ways.
          Please read this Privacy Policy carefully. By using our website or services, you agree to the practices
          outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-2">A. Information You Provide to Us</h3>
        <p className="mb-4">
          We collect information you provide directly to us when you:
        </p>
        <ul className="list-disc ml-8 mb-8">
          <li>Fill out forms on our website, such as when you request a quote or contact us.</li>
          <li>Sign up for our newsletter or marketing communications.</li>
          <li>Interact with us through emails, phone calls, or in-person consultations.</li>
          <li>Apply for a job or express interest in career opportunities.</li>
        </ul>
        <p className="mb-8">
          The types of information we may collect include:
        </p>
        <ul className="list-disc ml-8 mb-8">
          <li><strong>Personal Identification Information:</strong> Name, email address, phone number, mailing address, and other contact details.</li>
          <li><strong>Business Information:</strong> Company name, job title, and other details related to your business needs.</li>
          <li><strong>Payment Information:</strong> Billing address and payment card details (when applicable).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">B. Information We Collect Automatically</h3>
        <p className="mb-8">
          When you visit our website, we automatically collect certain information about your device and browsing activity, including:
        </p>
        <ul className="list-disc ml-8 mb-8">
          <li><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages, and referring URLs.</li>
          <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information about your browsing behavior and preferences. You can control cookie preferences through your browser settings.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">C. Information from Third Parties</h3>
        <p className="mb-8">
          We may receive information about you from third-party services, including social media platforms (when you interact with our social media accounts), marketing partners, and other publicly available sources.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc ml-8 mb-8">
          <li><strong>Provide and Manage Services:</strong> To deliver our services, including scheduling consultations, providing quotes, and managing ongoing projects.</li>
          <li><strong>Communicate with You:</strong> To respond to inquiries, provide customer support, send updates, and market our products and services.</li>
          <li><strong>Improve User Experience:</strong> To analyze website usage, improve content, and enhance our services based on your preferences and feedback.</li>
          <li><strong>Manage Payment Processing:</strong> To facilitate transactions related to our services.</li>
          <li><strong>Ensure Safety and Compliance:</strong> To detect and prevent fraud, maintain security, and comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
        <p className="mb-8">
          We do not sell your personal information. However, we may share your information under the following circumstances:
        </p>
        <ul className="list-disc ml-8 mb-8">
          <li><strong>Service Providers:</strong> We work with trusted service providers who assist us in delivering services (e.g., payment processors, marketing services).</li>
          <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental regulations.</li>
          <li><strong>Protection of Rights:</strong> We may share your information when we believe it is necessary to protect the rights, property, or safety of OEM Radio Repair, our employees, or customers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Your Rights and Choices</h2>
        <ul className="list-disc ml-8 mb-8">
          <li><strong>Access and Correction:</strong> You can request access to or correction of your personal information.</li>
          <li><strong>Opt-Out of Marketing Communications:</strong> You may opt out of receiving marketing emails by following the unsubscribe instructions in the email.</li>
          <li><strong>Cookie Preferences:</strong> You can control the use of cookies through your browser settings.</li>
        </ul>
        <p className="mb-8">
          To exercise these rights, please contact us at <a href="mailto:privacy@oemradiorepair.com" className="text-primary-500 underline">privacy@oemradiorepair.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="mb-8">
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no security measures are entirely foolproof, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="mb-8">
          We retain your personal information for as long as necessary to fulfill the purposes for which it was collected or as required by applicable laws. When your information is no longer needed, we will securely delete or anonymize it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
        <p className="mb-8">
          Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any significant changes by posting the updated policy on our website and updating the effective date.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="mb-8">
          If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p className="mb-4">
          <strong>OEM Radio Repair</strong><br />
          2413 1st Ave S, Birmingham, AL 35233<br />
          <strong>Email:</strong> <a href="mailto:privacy@oemradiorepair.com" className="text-primary-500 underline">privacy@oemradiorepair.com</a><br />
          <strong>Phone:</strong> <a href="tel:+12055221162" className="text-primary-500 underline">+1 (205) 522-1162</a>
        </p>
        <p>
          We value your trust in us and are committed to safeguarding your personal information.
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
