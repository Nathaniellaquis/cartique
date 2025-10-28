import { Suspense } from "react"
import { BookingCheckoutPage } from "@/components/pages/booking-checkout-page"

export default function BookingCheckout() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />}>
      <BookingCheckoutPage />
    </Suspense>
  )
}
