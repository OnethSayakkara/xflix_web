import React from 'react';
import Footer from './Footer';
import HeaderNotice from './HeaderNotice';
import Header from './Header';

const TermsOfService = () => {
  return (
      <div>
            <Header/>
            <div className='p-4 bg-zinc-900'>
            <HeaderNotice/>
            </div>
            
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 p-6 overflow-y-visible">
      <div className="w-full max-w-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Terms of Service</h1>
        <p className="text-gray-200 mb-4">
          <strong>Effective Date:</strong> [ Octomber 25, 2024 ]
        </p>

        <h2 className="text-3xl font-semibold text-gray-400 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-200 mb-4">
          By accessing or using our website, you confirm that you accept these Terms of Service and agree to comply with them. If you do not agree to these terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">2. Changes to Terms</h2>
        <p className="text-gray-200 mb-4">
          We may update these Terms of Service from time to time. Any changes will be posted on this page, and your continued use of the services after changes have been made constitutes your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">3. Use of Services</h2>
        <p className="text-gray-200 mb-4">
          You agree to use our services in accordance with all applicable laws and regulations. You must not use our services:
        </p>
        <ul className="list-disc list-inside text-yellow-500 mb-4">
          <li>For any unlawful purpose</li>
          <li>To harass, abuse, or harm another person</li>
          <li>To send unsolicited advertising or promotional materials</li>
          <li>To impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">4. Account Registration</h2>
        <p className="text-gray-300 mb-4">
          To access certain features of our services, you may be required to register for an account. You agree to:
        </p>
        <ul className="list-disc list-inside text-yellow-500 mb-4">
          <li>Provide accurate, current, and complete information during the registration process</li>
          <li>Maintain the security of your password and account</li>
          <li>Notify us immediately of any unauthorized use of your account or any other breach of security</li>
          <li>Take responsibility for all activities that occur under your account</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">5. Intellectual Property Rights</h2>
        <p className="text-gray-200 mb-4">
          All content, trademarks, and other intellectual property on our website are owned by or licensed to [Your Website Name]. You may not use, reproduce, or distribute any of our content without our prior written consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">6. Third-Party Links</h2>
        <p className="text-gray-200 mb-4">
          Our website may contain links to third-party websites that are not owned or controlled by [Your Website Name]. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we are not responsible for any damage or loss caused by or in connection with the use of any such content or services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">7. Limitation of Liability</h2>
        <p className="text-gray-200 mb-4">
          To the fullest extent permitted by law, [Your Website Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services. This includes, but is not limited to, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">8. Indemnification</h2>
        <p className="text-gray-200 mb-4">
          You agree to indemnify and hold harmless [Your Website Name], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys’ fees, arising out of or related to your use of our services or violation of these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">9. Governing Law</h2>
        <p className="text-gray-200 mb-4">
          These Terms of Service shall be governed by and construed in accordance with the laws of [Your State/Country]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
        </p>

        <h2 className="text-2xl font-semibold text-gray-400 mb-4">10. Contact Us</h2>
        <p className="text-gray-200 mb-4">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p className="text-yellow-500 mb-2 font-semibold">
          xFlix<br />
          xFlix.contact@gmail.com<br />
          +94-764 610 842
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TermsOfService;
