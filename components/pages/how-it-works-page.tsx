"use client"

import { Search, Calendar, Key, Star, Shield, CreditCard, MessageSquare, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorksPage() {
  const customerSteps = [
    {
      icon: Search,
      title: "Browse & Search",
      description: "Explore our curated collection of exotic vehicles. Filter by make, model, location, and price to find your perfect match.",
    },
    {
      icon: Calendar,
      title: "Select Dates",
      description: "Choose your rental period and check real-time availability. Our calendar shows exactly when each car is available.",
    },
    {
      icon: CreditCard,
      title: "Book Securely",
      description: "Complete your booking with our secure checkout. Payment is held safely until pickup confirmation.",
    },
    {
      icon: Key,
      title: "Pick Up & Drive",
      description: "Meet the supplier or opt for white-glove delivery. Inspect the vehicle, sign the agreement, and hit the road.",
    },
    {
      icon: Star,
      title: "Return & Review",
      description: "Return the car as agreed, then leave a review to help the community and earn rewards.",
    },
  ]

  const supplierSteps = [
    {
      icon: Shield,
      title: "Apply & Verify",
      description: "Submit your supplier application with vehicle details and documentation. Our team reviews within 24-48 hours.",
    },
    {
      icon: Search,
      title: "List Your Cars",
      description: "Create professional listings with photos, specs, and pricing. Set your own rates and availability calendar.",
    },
    {
      icon: Calendar,
      title: "Receive Bookings",
      description: "Get notified when customers request your vehicles. Approve or decline based on your schedule.",
    },
    {
      icon: MessageSquare,
      title: "Coordinate Pickup",
      description: "Communicate with renters through our messaging system. Arrange pickup location and time.",
    },
    {
      icon: CreditCard,
      title: "Get Paid",
      description: "Receive automatic payouts after completed rentals. We handle all payment processing and protection.",
    },
  ]

  const trustFeatures = [
    {
      icon: Shield,
      title: "$1M Insurance",
      description: "Every rental is covered by comprehensive insurance protecting both owners and renters.",
    },
    {
      icon: CheckCircle,
      title: "Verified Users",
      description: "All users undergo identity and license verification before their first rental.",
    },
    {
      icon: Star,
      title: "Review System",
      description: "Transparent ratings and reviews help build trust within our community.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Bank-level encryption and fraud protection on all transactions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <p className="text-sm font-semibold text-accent">Like Turo, but for Exotics</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6">How Cartique Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The premier peer-to-peer marketplace for exotic and luxury vehicles.
            Connect with verified owners. Drive Ferrari, Lamborghini, McLaren, and Porsche.
            Safe, secure, and simple.
          </p>
        </div>
      </div>

      {/* For Customers */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">For Customers</h2>
          <p className="text-lg text-muted-foreground">Book your dream car in 5 simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {customerSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative overflow-hidden group hover:border-accent transition-colors">
                <div className="absolute top-4 right-4 text-6xl font-light text-muted-foreground/10">
                  {index + 1}
                </div>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/search">Start Browsing Cars</Link>
          </Button>
        </div>
      </div>

      {/* For Suppliers */}
      <div className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">For Suppliers</h2>
            <p className="text-lg text-muted-foreground">Earn money sharing your exotic vehicles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {supplierSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="relative overflow-hidden group hover:border-accent transition-colors">
                  <div className="absolute top-4 right-4 text-6xl font-light text-muted-foreground/10">
                    {index + 1}
                  </div>
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/supplier/apply">Become a Supplier</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust & Safety */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Trust & Safety</h2>
          <p className="text-lg text-muted-foreground">
            Your peace of mind is our priority
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="border-t bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-light mb-4">Have More Questions?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our comprehensive FAQ or contact our support team
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/faq">View FAQ</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
