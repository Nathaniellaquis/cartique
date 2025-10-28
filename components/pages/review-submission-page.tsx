"use client"

import { useState } from "react"
import { Star, Upload, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { mockBookings } from "@/lib/mock-data"

export function ReviewSubmissionPage({ bookingId }: { bookingId: string }) {
  const booking = mockBookings.find((b) => b.id === bookingId)
  const [carRating, setCarRating] = useState(0)
  const [supplierRating, setSupplierRating] = useState(0)
  const [carReview, setCarReview] = useState("")
  const [supplierReview, setSupplierReview] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    window.location.href = "/rentals/active"
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-lg mb-4">Booking not found</p>
            <Button asChild>
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderStars = (rating: number, setRating: (r: number) => void) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="transition-all hover:scale-110"
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating ? "fill-accent text-accent" : "text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">Leave a Review</h1>
          <p className="text-muted-foreground">
            Share your experience with {booking.carName}
          </p>
        </div>

        {/* Booking Info */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400"
                  alt={booking.carName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{booking.carName}</h3>
                <p className="text-sm text-muted-foreground">
                  Rented: {new Date(booking.startDate).toLocaleDateString()} -{" "}
                  {new Date(booking.endDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-muted-foreground">Supplier: {booking.supplierName}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className="space-y-8"
        >
          {/* Vehicle Review */}
          <Card>
            <CardHeader>
              <CardTitle>Rate the Vehicle</CardTitle>
              <CardDescription>How was your experience with the car?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">Overall Rating *</Label>
                {renderStars(carRating, setCarRating)}
              </div>

              <div>
                <Label htmlFor="carReview">Your Review *</Label>
                <Textarea
                  id="carReview"
                  placeholder="Share details about the vehicle's condition, performance, cleanliness..."
                  value={carReview}
                  onChange={(e) => setCarReview(e.target.value)}
                  rows={5}
                  required
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Minimum 50 characters ({carReview.length}/50)
                </p>
              </div>

              <div>
                <Label className="mb-2 block">Add Photos (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload photos of the vehicle
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supplier Review */}
          <Card>
            <CardHeader>
              <CardTitle>Rate the Supplier</CardTitle>
              <CardDescription>How was your interaction with {booking.supplierName}?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">Overall Rating *</Label>
                {renderStars(supplierRating, setSupplierRating)}
              </div>

              <div>
                <Label htmlFor="supplierReview">Your Review *</Label>
                <Textarea
                  id="supplierReview"
                  placeholder="Share details about communication, pickup/dropoff experience, professionalism..."
                  value={supplierReview}
                  onChange={(e) => setSupplierReview(e.target.value)}
                  rows={5}
                  required
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Minimum 50 characters ({supplierReview.length}/50)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Questions</CardTitle>
              <CardDescription>Help us improve the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="mb-3 block">Would you rent from this supplier again?</Label>
                <div className="flex gap-3">
                  <Button type="button" variant="outline" className="flex-1">
                    Yes
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    No
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Maybe
                  </Button>
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Was the car as described in the listing?</Label>
                <div className="flex gap-3">
                  <Button type="button" variant="outline" className="flex-1">
                    Yes, exactly
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Mostly
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Not really
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={
                submitting ||
                carRating === 0 ||
                supplierRating === 0 ||
                carReview.length < 50 ||
                supplierReview.length < 50
              }
              className="gap-2"
              size="lg"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Submitting..." : "Submit Review"}
            </Button>
            <Button type="button" variant="outline" size="lg" asChild>
              <Link href="/rentals/active">Cancel</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            By submitting this review, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            . Reviews are public and cannot be deleted once submitted.
          </p>
        </form>
      </div>
    </div>
  )
}
