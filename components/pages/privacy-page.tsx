export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-5xl font-light mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: October 28, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Create an account (name, email, phone number, date of birth)</li>
              <li>Complete your profile (driver's license, payment information)</li>
              <li>Book a vehicle or list a vehicle for rent</li>
              <li>Communicate with us or other users</li>
              <li>Participate in surveys or promotions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Facilitate rental transactions between users</li>
              <li>Process payments and prevent fraud</li>
              <li>Verify user identity and driver's license validity</li>
              <li>Send booking confirmations, reminders, and updates</li>
              <li>Provide customer support</li>
              <li>Improve our platform and develop new features</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>With suppliers/renters:</strong> When you book or list a vehicle, we share relevant information to facilitate the transaction</li>
              <li><strong>Service providers:</strong> Third parties that help us operate the platform (payment processors, verification services)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">5. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to improve your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Object to certain data processing activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. Rental records are kept for 7 years for insurance and tax purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for users under 18 years old. We do not knowingly collect information from children. If you believe we have inadvertently collected such data, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy periodically. We will notify you of significant changes via email or platform notification. Your continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions or to exercise your rights, contact us at privacy@cartique.com or visit our <a href="/contact" className="text-accent hover:underline">Contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
