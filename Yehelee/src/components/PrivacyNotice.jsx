import React from 'react';
import Footer from './Footer';
import HeaderNotice from './HeaderNotice';
import Header from './Header';

const PrivacyNotice = () => {
  return (
    <div>
            <Header/>
            <div className='p-4 bg-zinc-900'>
            <HeaderNotice/>
            </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 p-6 overflow-y-visible">
        <div className="w-full max-w-3xl p-8">
          <h1 className="text-4xl font-bold text-center text-white mb-6">Privacy Notice</h1>
          <p className="text-gray-200 mb-4">
            <strong>Effective Date:</strong> [ October 25, 2024 ]
          </p>

          <h2 className="text-3xl font-semibold text-gray-400 mb-4">1. Introduction</h2>
          <p className="text-gray-200 mb-4">
            This Privacy Notice explains how [Your Website Name] ("we," "us," or "our") collects, uses, discloses, and protects your information when you visit our website. By using our services, you consent to the practices described in this notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">2. Information We Collect</h2>
          <p className="text-gray-200 mb-4">
            We may collect various types of information, including:
          </p>
          <ul className="list-disc list-inside text-yellow-500 mb-4">
            <li>Personal Information: Such as your name, email address, and contact details.</li>
            <li>Usage Data: Information about how you use our website, including your IP address, browser type, and pages visited.</li>
            <li>Cookies: Small data files that are placed on your device to enhance your experience on our site.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-200 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-yellow-500 mb-4">
            <li>To provide, maintain, and improve our services.</li>
            <li>To communicate with you, including sending updates and promotional materials.</li>
            <li>To monitor usage of our services and analyze trends.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">4. Information Sharing</h2>
          <p className="text-gray-200 mb-4">
            We may share your information with third parties in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-yellow-500 mb-4">
            <li>With service providers who assist us in operating our website and providing our services.</li>
            <li>In compliance with legal obligations or to protect our rights and the rights of others.</li>
            <li>In connection with a merger, sale, or transfer of our assets.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">5. Data Security</h2>
          <p className="text-gray-200 mb-4">
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">6. Your Rights</h2>
          <p className="text-gray-200 mb-4">
            You have the right to request access to the personal information we hold about you, to request correction of any inaccuracies, and to request deletion of your personal information, subject to certain exceptions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">7. Changes to This Privacy Notice</h2>
          <p className="text-gray-200 mb-4">
            We may update this Privacy Notice from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-400 mb-4">8. Contact Us</h2>
          <p className="text-gray-200 mb-4">
            If you have any questions or concerns about this Privacy Notice or our privacy practices, please contact us at:
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

export default PrivacyNotice;
