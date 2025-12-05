'use client';

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-[#0195FF] mb-2">Privacy Policy for Cue</h1>
          <p className="text-gray-600">Effective Date: December 5, 2025</p>
        </div>

        <p className="text-gray-700">
          At Cue ("we", "us", "our"), we respect your privacy and are committed to protecting any personal information you share with us when using our services, whether via our website, mobile app, WhatsApp, voice-AI interface, or other communication channels (collectively, the "Platform").
        </p>

        <section>
          <h2 className="text-[#0195FF] mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you use Cue — whether as a Rider or a Driver — we may collect:
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>
              <strong>Identity and contact information you provide directly:</strong> for example, your name, phone number, email address, and any other contact information needed for account setup, bookings, payments, communications, or support.
            </li>
            <li>
              <strong>Ride-related information:</strong> such as booking details, pickup and drop-off locations, trip history, timestamps, fare amounts, and rating/feedback information.
            </li>
            <li>
              <strong>Device and usage data:</strong> including your IP address, device type, operating system, browser or app version, and other diagnostic or log data to help us monitor, improve, and secure the Platform.
            </li>
            <li>
              <strong>Payment information:</strong> when you pay through the app, we may process payment data (via third-party payment processors), which may include billing information, transaction identifiers, and other related data required to complete payments.
            </li>
            <li>
              <strong>Communication data:</strong> any messages or communications you exchange with us when using phone, WhatsApp, the app, or customer support — including metadata such as time, date, and content of requests or messages (to the extent needed to support service).
            </li>
            <li>
              <strong>Optional information:</strong> if you choose to provide additional data (for instance in support requests, surveys, referrals, or other interactions), we collect only what you voluntarily supply.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect for purposes including — but not limited to:
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Providing, operating, and maintaining the Platform (matching riders & drivers, facilitating bookings, enabling payments, tracking trips, issuing receipts and history).</li>
            <li>Verifying user identity, processing payments, and enforcing safety and security (for riders, drivers, and others).</li>
            <li>Communicating with you — for customer support, notifications, updates, and important service-related messages.</li>
            <li>Improving and personalizing your experience — optimizing features, app performance, and reliability; diagnosing issues; and understanding how the Platform is used.</li>
            <li>Fraud prevention, risk management, and ensuring compliance with legal or regulatory obligations.</li>
            <li>Marketing and promotions — only with your consent (if we choose to offer promos, newsletters, or special offers).</li>
            <li>Aggregated or anonymized analytics — to understand trends, usage statistics, and to improve our services, without linking information back to you personally.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">3. Sharing & Disclosure of Information</h2>
          <p className="text-gray-700 mb-4">
            We may share or disclose personal information in the following circumstances:
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>With service providers or third-party partners who help us operate the Platform — for example payment processors, analytics providers, IT or hosting services, or customer support vendors.</li>
            <li>With drivers or riders when needed to facilitate a ride: e.g. sharing only the necessary booking, pickup and drop-off, or contact details to complete a ride.</li>
            <li>With law enforcement or regulatory authorities if required by law, or to help prevent fraud, illegal activities, or threats to safety or property.</li>
            <li>In connection with a merger, acquisition, sale of assets, reorganization, or other business transaction — in which case we will take steps to ensure your data remains subject to appropriate confidentiality and privacy protections.</li>
            <li>With your explicit consent, for any purpose outside those listed above (e.g. marketing, research).</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We do not sell or rent your personal information to unaffiliated third-parties for their own marketing or commercial purposes.
          </p>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">4. Cookies & Similar Technologies</h2>
          <p className="text-gray-700">
            We may use cookies or similar technologies (like local storage) to collect usage and device information, track sessions, diagnose technical issues, and support analytics. Such data helps us understand usage patterns, improve the Platform, and provide you with a more seamless experience. You may have the option to disable cookies — but this may impair certain functionalities of the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">5. Data Security & Retention</h2>
          <p className="text-gray-700 mb-4">
            We employ reasonable technical, administrative, and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. This includes secure storage, encryption (where appropriate), controlled access, and other security protocols.
          </p>
          <p className="text-gray-700">
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, or support legitimate business interests (e.g. dispute resolution). Once no longer needed, we will delete or anonymize the data.
          </p>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">6. Children & Minors</h2>
          <p className="text-gray-700">
            If you are under the age of 18 (or the minimum legal age in your jurisdiction), you should not use the Platform without parental or guardian consent. We do not knowingly collect personal information from minors without consent.
          </p>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">7. Your Rights & Choices</h2>
          <p className="text-gray-700 mb-4">
            Depending on your jurisdiction, you may have rights over your personal information, such as:
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Accessing or requesting a copy of the data we hold about you.</li>
            <li>Requesting correction or update of inaccurate or incomplete data.</li>
            <li>Requesting deletion or erasure of your personal data (subject to certain legitimate or legal retention requirements).</li>
            <li>Objecting to or restricting certain types of processing (e.g. marketing communications).</li>
            <li>Withdrawing consent for future collection or processing (for optional purposes).</li>
          </ul>
          <p className="text-gray-700 mt-4">
            If you wish to exercise any of these rights, please contact us at:{' '}
            <a href="mailto:privacy@cueapp.com" className="text-[#0195FF] hover:underline">
              privacy@cueapp.com
            </a>
          </p>
          <p className="text-gray-700 mt-4">
            You may also opt out of marketing communications by following the unsubscribe instructions in any marketing message we send, or by contacting us directly.
          </p>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">8. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. If we make material changes, we will notify you via the Platform (or by other communication). The "Effective Date" at the top will be updated accordingly, and your continued use of Cue after the updated policy becomes effective constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-[#0195FF] mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, concerns or requests regarding this Privacy Policy or our data handling practices, please contact us at:{' '}
            <a href="mailto:privacy@cueapp.com" className="text-[#0195FF] hover:underline">
              privacy@cueapp.com
            </a>
          </p>
        </section>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            Last updated: December 5, 2025
          </p>
        </div>
      </div>
    </div>
  );
}