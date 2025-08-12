const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto  shadow-none pt-20">
        <h1 className="text-5xl font-bold mb-10 ">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 italic mb-12">
          Last Updated: August 12, 2025
        </p>

        {/* 1. Acceptance of Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-5   ">
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            By accessing or using CodexBond’s website, services, or products,
            you agree to be legally bound by these Terms and Conditions and all
            applicable laws and regulations. If you do not agree to these terms,
            you must not use our website or services.
          </p>
          <p className="leading-relaxed text-gray-700">
            These terms constitute a binding agreement between you and
            CodexBond. We reserve the right to update or modify these Terms at
            any time without prior notice. Your continued use of our services
            after changes indicates your acceptance of the updated Terms.
          </p>
        </section>

        {/* 2. Use of Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-5   ">2. Use of Services</h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            You agree to use our services solely for lawful purposes and in a
            manner that does not infringe upon the rights of others or restrict
            or inhibit anyone else's use and enjoyment of the services.
          </p>
          <p className="leading-relaxed text-gray-700">
            You shall not engage in any activity that could damage, disable, or
            impair the functionality of our website or interfere with other
            users' access and enjoyment.
          </p>
        </section>

        {/* 3. Orders and Payment */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-5   ">
            3. Orders and Payment
          </h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            All orders placed through CodexBond are subject to acceptance and
            availability. We reserve the right to refuse or cancel any order at
            our sole discretion, including but not limited to cases of suspected
            fraud or violation of these Terms.
          </p>
          <p className="leading-relaxed text-gray-700 mb-4">
            <strong>Payment Terms:</strong> CodexBond requires a non-refundable
            30% advance payment before starting any project. This advance
            payment confirms your commitment and allows us to allocate resources
            and begin work promptly.
          </p>
          <p className="leading-relaxed text-gray-700 mb-4">
            The remaining balance or agreed milestones must be paid as per the
            agreed schedule outlined in your project proposal or invoice.
            Payment must be confirmed before we deliver any final deliverables.
          </p>
          <p className="leading-relaxed text-gray-700 mb-4">
            Please note that CodexBond currently does not have an integrated
            payment gateway on our website. All payments are processed
            externally via bank transfers or other approved payment methods. You
            will receive detailed payment instructions upon order confirmation.
          </p>
          <p className="leading-relaxed text-gray-700">
            Failure to make timely payments may result in suspension or
            termination of services until the payment issues are resolved.
          </p>
        </section>

        {/* 4. Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-5   ">
            4. Limitation of Liability
          </h2>
          <p className="leading-relaxed text-gray-700">
            To the fullest extent permitted by law, CodexBond shall not be
            liable for any indirect, incidental, consequential, special, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly.
          </p>
          <p className="leading-relaxed text-gray-700">
            Our maximum aggregate liability arising from or related to these
            Terms shall not exceed the amount you have paid us for the relevant
            services.
          </p>
          <p className="leading-relaxed text-gray-700">
            This limitation applies regardless of the form of action, whether in
            contract, tort, negligence, strict liability, or otherwise.
          </p>
        </section>

        {/* 5. Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-5   ">
            5. Changes to Terms
          </h2>
          <p className="leading-relaxed text-gray-700">
            CodexBond reserves the right to modify, update, or replace these
            Terms and Conditions at any time without prior notice. Changes will
            be effective immediately upon posting on our website.
          </p>
          <p className="leading-relaxed text-gray-700">
            Your continued use of our services after any such changes
            constitutes your acceptance of the new Terms.
          </p>
          <p className="leading-relaxed text-gray-700">
            We recommend reviewing this page periodically to stay informed about
            any updates.
          </p>
        </section>

        {/* 6. Contact Us */}
        <section>
          <h2 className="text-3xl font-semibold mb-5   ">6. Contact Us</h2>
          <p className="leading-relaxed text-gray-700 mb-2">
            If you have any questions, concerns, or requests regarding these
            Terms and Conditions, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Email:{" "}
              <a href="mailto:info@codexbond.com" className="link link-primary">
                info@codexbond.com
              </a>
            </li>
            <li>Phone: +880176-8789018</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
