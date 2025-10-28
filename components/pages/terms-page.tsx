export function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-5xl font-light mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: October 28, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Cartique's platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">2. Rental Agreement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each rental transaction through Cartique constitutes a separate agreement between the customer and the vehicle supplier. Cartique acts as a marketplace platform facilitating these transactions.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Renters must be at least 25 years old with a valid driver's license</li>
              <li>Renters must maintain valid insurance during the rental period</li>
              <li>Vehicles must be returned in the same condition as received</li>
              <li>Late returns may incur additional fees as specified by the supplier</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">3. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is collected at the time of booking. Cartique charges a service fee on all transactions. Refunds are subject to the cancellation policy of the specific listing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">4. Cancellation Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cancellation terms vary by listing but generally follow these guidelines:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>More than 7 days before pickup: Full refund minus service fee</li>
              <li>3-7 days before pickup: 50% refund</li>
              <li>Less than 3 days: No refund</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">5. Insurance & Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              All rentals include $1,000,000 comprehensive insurance coverage. However, renters are responsible for deductibles and damages not covered by the policy. Cartique is not liable for accidents, injuries, or damages occurring during rentals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">6. Prohibited Uses</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Racing or competitive events</li>
              <li>Off-road driving (unless explicitly permitted)</li>
              <li>Transporting illegal substances</li>
              <li>Subletting or unauthorized third-party use</li>
              <li>Driving under the influence of alcohol or drugs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">7. Supplier Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Suppliers must ensure all listed vehicles are properly maintained, insured, and accurately described. Misrepresentation of vehicle condition or availability may result in account suspension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">8. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from rentals should first be addressed between the renter and supplier. If unresolved, Cartique will mediate. All parties agree to binding arbitration for unresolved disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">9. Modification of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cartique reserves the right to modify these terms at any time. Users will be notified of significant changes via email. Continued use of the platform constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, please contact us at legal@cartique.com or visit our <a href="/contact" className="text-accent hover:underline">Contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
