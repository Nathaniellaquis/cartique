"use client"

import { CheckCircle2, Download, Calendar, MapPin, MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockCarListings, mockSuppliers } from "@/lib/mock-data"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

interface BookingConfirmationPageProps {
  bookingId: string
}

export function BookingConfirmationPage({ bookingId }: BookingConfirmationPageProps) {
  // In a real app, fetch booking by ID
  const car = mockCarListings[0]
  const supplier = mockSuppliers[0]
  const startDate = "2025-11-01"
  const endDate = "2025-11-04"
  const total = 4633
  const imageUrl = carImages[car.id] || carImages["1"]

  const copyBookingNumber = () => {
    navigator.clipboard.writeText(bookingId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Success Icon & Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 border-2 border-accent mb-6">
            <CheckCircle2 className="w-14 h-14 text-accent" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-zinc-400 max-w-md mx-auto">
            Your rental is confirmed. We've sent a confirmation email with all the details.
          </p>
        </div>

        {/* Booking Number */}
        <div className="p-6 mb-8 border-2 border-accent/30 bg-accent/10 backdrop-blur-xl rounded-3xl">
          <div className="text-center">
            <p className="text-sm text-zinc-400 mb-2">Booking Number</p>
            <button
              onClick={copyBookingNumber}
              className="text-3xl font-bold text-accent hover:text-yellow-400 transition-colors"
            >
              {bookingId}
            </button>
            <p className="text-xs text-zinc-500 mt-2">Tap to copy</p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">What Happens Next</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Confirmation Email",
                description: "You'll receive a detailed confirmation email with your booking number, pickup location, and supplier contact info.",
                time: "Within 5 minutes"
              },
              {
                step: 2,
                title: "Supplier Contact",
                description: "The supplier may reach out to confirm pickup details and answer any questions you have.",
                time: "1-2 days before pickup"
              },
              {
                step: 3,
                title: "Pickup Day",
                description: "Meet the supplier at the designated location, inspect the vehicle, and hit the road!",
                time: new Date(startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-black">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <Badge variant="outline" className="text-xs border-white/20 text-zinc-400">{item.time}</Badge>
                  </div>
                  <p className="text-sm text-zinc-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Booking Details</h2>

          {/* Car Info */}
          <div className="flex gap-6 mb-6">
            <div className="w-40 h-28 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src={imageUrl}
                alt={car.name}
                width={160}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
              <p className="text-sm text-zinc-400 mb-2">{car.year} • {car.category}</p>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="h-4 w-4" />
                <span>{car.location}</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-6" />

          {/* Dates & Time */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
                <Calendar className="h-4 w-4" />
                <span>Pickup</span>
              </div>
              <p className="font-bold text-white">
                {new Date(startDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
              <p className="text-sm text-zinc-400">10:00 AM</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1">
                <Calendar className="h-4 w-4" />
                <span>Return</span>
              </div>
              <p className="font-bold text-white">
                {new Date(endDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
              <p className="text-sm text-zinc-400">10:00 AM</p>
            </div>
          </div>

          <div className="h-px bg-white/10 my-6" />

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Subtotal</span>
              <span className="text-white">$4,485</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Service fee</span>
              <span className="text-white">$149</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Insurance</span>
              <span className="text-white">$89</span>
            </div>
            <div className="h-px bg-white/10 my-3" />
            <div className="flex justify-between text-lg">
              <span className="font-bold text-white">Total Paid</span>
              <span className="font-bold text-2xl text-accent">${total}</span>
            </div>
          </div>
        </div>

        {/* Supplier Contact */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Supplier Contact</h2>
          <div className="flex gap-6">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-black flex-shrink-0">
              {supplier.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">{supplier.name}</h3>
              <p className="text-sm text-zinc-400 mb-4">Response time: {supplier.responseTime}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Phone className="h-4 w-4 text-zinc-500" />
                  <span>Available after booking confirmation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Mail className="h-4 w-4 text-zinc-500" />
                  <span>Available after booking confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Button variant="outline" size="lg" className="w-full">
            <Download className="h-5 w-5 mr-2" />
            Download Receipt
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <Calendar className="h-5 w-5 mr-2" />
            Add to Calendar
          </Button>
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href={`/listing/${car.id}`}>
              <MapPin className="h-5 w-5 mr-2" />
              View Directions
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button variant="default" size="lg" className="w-full" asChild>
            <Link href="/messages">
              <MessageCircle className="h-5 w-5 mr-2" />
              Message Supplier
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href="/dashboard">
              View My Rentals
            </Link>
          </Button>
        </div>

        {/* Cancellation Policy */}
        <div className="p-6 mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
          <h3 className="font-bold text-white mb-3">Cancellation Policy</h3>
          <p className="text-sm text-zinc-400 mb-4">
            Free cancellation up to 24 hours before pickup. After that, 50% refund if cancelled more than 24 hours before pickup. No refund for cancellations within 24 hours of pickup.
          </p>
          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
            Cancel Booking
          </Button>
        </div>
      </div>
    </div>
  )
}
