"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I rent a car on Cartique?",
        a: "Browse our collection, select your dates, and book instantly. You'll need to verify your identity and driver's license before your first rental. Payment is secure and held until pickup confirmation.",
      },
      {
        q: "What are the requirements to rent?",
        a: "You must be at least 25 years old with a valid driver's license (held for minimum 2 years). Identity verification and a security deposit are required.",
      },
      {
        q: "How does insurance work?",
        a: "Every rental includes $1M comprehensive insurance coverage. This protects both the vehicle owner and the renter against damage, theft, and liability.",
      },
    ],
  },
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "When am I charged?",
        a: "Your payment method is authorized at booking but not charged until pickup confirmation. If the booking is cancelled, the authorization is released.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellations more than 7 days before pickup: full refund. 3-7 days: 50% refund. Less than 3 days: no refund. Suppliers set their own policies.",
      },
      {
        q: "Are there additional fees?",
        a: "Prices shown include insurance and platform fees. Security deposits (refundable) and optional delivery fees may apply depending on the listing.",
      },
    ],
  },
  {
    category: "During Your Rental",
    questions: [
      {
        q: "What if the car has issues?",
        a: "Contact the supplier immediately through our messaging system. For emergencies, call our 24/7 support line. Do not attempt repairs without authorization.",
      },
      {
        q: "Can I extend my rental?",
        a: "Yes, if the car is available. Request an extension through your booking dashboard. The supplier must approve, and you'll be charged for additional days.",
      },
      {
        q: "What happens if I return the car late?",
        a: "Late returns may incur fees ($100/hour is standard). Always communicate delays with the supplier. Repeated violations may result in account suspension.",
      },
    ],
  },
  {
    category: "For Suppliers",
    questions: [
      {
        q: "How much can I earn?",
        a: "Earnings vary by vehicle type and location. Exotic cars typically rent for $800-$3,000/day. Cartique takes a 15% service fee. You keep 85%.",
      },
      {
        q: "How do I get paid?",
        a: "Payouts are processed monthly, 24 hours after each rental ends. Funds are deposited directly to your bank account. Early payout options available.",
      },
      {
        q: "What if a renter damages my car?",
        a: "Our $1M insurance covers damages. File a claim through your dashboard with photos and description. Claims are typically resolved within 7-14 days.",
      },
      {
        q: "Can I decline a booking request?",
        a: "Yes, but your acceptance rate affects your listing visibility. Valid reasons include vehicle maintenance, scheduling conflicts, or renter credibility concerns.",
      },
    ],
  },
  {
    category: "Trust & Safety",
    questions: [
      {
        q: "How are users verified?",
        a: "All users must verify government ID and driver's license. We use third-party verification services and run background checks on all renters.",
      },
      {
        q: "What if I feel unsafe?",
        a: "Trust your instincts. You can cancel any booking that makes you uncomfortable. Report suspicious behavior through our safety center immediately.",
      },
      {
        q: "How does the review system work?",
        a: "After each rental, both parties can leave reviews. Reviews are public and cannot be deleted, promoting honest and respectful behavior.",
      },
    ],
  },
]

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = faqCategories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions about renting and listing on Cartique
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-12 text-base"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        {filteredCategories.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-lg text-muted-foreground">
              No questions match your search. Try different keywords.
            </p>
          </Card>
        ) : (
          <div className="space-y-8">
            {filteredCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, qIndex) => (
                    <AccordionItem
                      key={qIndex}
                      value={`${catIndex}-${qIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="hover:no-underline text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="border-t bg-muted/30 mt-12">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-3xl font-light mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help 24/7
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
