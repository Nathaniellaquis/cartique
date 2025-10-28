import { BookingConfirmationPage } from "@/components/pages/booking-confirmation-page"
import { use } from "react"

export default function BookingConfirmation({ params }: { params: Promise<{ bookingId: string }> }) {
  const { bookingId } = use(params)
  return <BookingConfirmationPage bookingId={bookingId} />
}
