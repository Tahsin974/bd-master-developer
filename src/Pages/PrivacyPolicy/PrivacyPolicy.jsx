const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto  shadow-none pt-20">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">
            CodexBond • Effective Date: August 12, 2025
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Last Updated: August 12, 2025
          </p>
        </header>

        <main className="space-y-6 text-gray-700">
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4  ">Introduction</h2>
            <p className="leading-relaxed text-gray-700">
              At CodexBond, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information when you use our
              services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4  ">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Personal Information:</strong> name, email address,
                phone number, and other details you provide.
              </li>
              <li>
                <strong>Financial Information:</strong> payment details and
                transaction history.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device
                info, pages visited, and time spent on our site.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> cookies and similar
                technologies for analytics and user experience.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4  ">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and maintain our services.</li>
              <li>Process transactions and deliver requested services.</li>
              <li>
                Send important updates and promotional material (with consent).
              </li>
              <li>Detect and prevent fraud.</li>
              <li>Comply with legal requirements.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4  ">Data Security</h2>
            <p className="leading-relaxed text-gray-700">
              We use encryption and secure servers to protect your data. While
              no method is 100% secure, we strive to safeguard your personal
              information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4  ">Your Rights</h2>
            <p className="leading-relaxed text-gray-700">
              You may request access, correction, or deletion of your personal
              data. You also have rights to restrict or object to certain data
              processing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-4  ">Contact Us</h2>
            <p className="leading-relaxed text-gray-700">
              If you have questions or concerns, please contact us at{" "}
              <a
                href="mailto:contact@codexbond.com"
                className="link link-primary"
              >
                info@codexbond.com
              </a>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
