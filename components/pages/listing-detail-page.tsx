"use client"

import { useState } from "react"
import { ArrowLeft, Heart, Share2, MapPin, Calendar, Shield, Star, MessageCircle, Zap, Check, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { mockCarListings, mockSuppliers } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format", // McLaren
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format", // Ferrari
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format", // Lamborghini
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format", // Porsche
}

interface ListingDetailPageProps {
  carId: string
}

export function ListingDetailPage({ carId }: ListingDetailPageProps) {
  const car = mockCarListings.find(c => c.id === carId)
  const supplier = car ? mockSuppliers.find(s => s.id === car.supplierId) : null

  const [saved, setSaved] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [hoveringDate, setHoveringDate] = useState<Date | null>(null)

  const imageUrl = car ? carImages[car.id] || carImages["1"] : ""

  // Blocked dates (example: some dates are already booked)
  const blockedDates = [
    new Date(2025, 10, 25), // Nov 25
    new Date(2025, 10, 26), // Nov 26
    new Date(2025, 10, 27), // Nov 27
    new Date(2025, 11, 1),  // Dec 1
    new Date(2025, 11, 2),  // Dec 2
  ]

  const isDateBlocked = (date: Date) => {
    return blockedDates.some(blocked =>
      blocked.getFullYear() === date.getFullYear() &&
      blocked.getMonth() === date.getMonth() &&
      blocked.getDate() === date.getDate()
    )
  }

  const isDateInRange = (date: Date) => {
    if (!startDate) return false
    if (!endDate && !hoveringDate) return false
    const end = hoveringDate || endDate
    if (!end) return false
    return date >= startDate && date <= end
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Car not found</h1>
          <Button asChild>
            <Link href="/search">Back to Search</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Calculate booking details
  const calculateTotal = () => {
    if (!startDate || !endDate) return null
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    if (days <= 0) return null

    const subtotal = car.price * days
    const serviceFee = Math.round(subtotal * 0.1)
    const insurance = 89
    const total = subtotal + serviceFee + insurance

    return { days, subtotal, serviceFee, insurance, total }
  }

  const handleDateClick = (date: Date) => {
    if (isDateBlocked(date)) return

    if (!startDate || (startDate && endDate)) {
      // Starting new selection
      setStartDate(date)
      setEndDate(null)
    } else if (date < startDate) {
      // Clicked before start, make it new start
      setStartDate(date)
      setEndDate(null)
    } else {
      // Set as end date
      setEndDate(date)
      setShowCalendar(false)
    }
  }

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return "Add date"
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const booking = calculateTotal()

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Browse
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={car.name}
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Actions */}
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <button
                onClick={() => setSaved(!saved)}
                className={cn(
                  "w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all hover:bg-white/10",
                  saved && "bg-red-500/90 border-red-500/50"
                )}
              >
                <Heart className={cn("w-5 h-5 text-white transition-all", saved && "fill-current")} />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Car Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end justify-between">
                <div>
                  {car.featured && (
                    <div className="inline-flex items-center gap-1.5 bg-accent/90 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3">
                      <Zap className="w-3.5 h-3.5 text-black fill-black" />
                      <span className="text-xs font-bold text-black">FEATURED</span>
                    </div>
                  )}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{car.name}</h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300">
                    <span>{car.year}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-500" />
                    <span>{car.mileage.toLocaleString()} mi</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-500" />
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span>{car.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">

            {/* Specifications */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "Engine", value: car.specs.engine },
                  { label: "Horsepower", value: `${car.specs.horsepower} HP` },
                  { label: "Torque", value: car.specs.torque },
                  { label: "0-60 MPH", value: car.specs.acceleration },
                  { label: "Top Speed", value: car.specs.topSpeed },
                  { label: "Transmission", value: car.specs.transmission },
                  { label: "Drivetrain", value: car.specs.drivetrain },
                  { label: "Weight", value: car.specs.weight },
                  { label: "Seats", value: car.specs.seats },
                ].map((spec) => (
                  <div key={spec.label} className="space-y-1">
                    <div className="text-sm text-zinc-500">{spec.label}</div>
                    <div className="font-semibold text-white">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Vehicle</h2>
              <p className="text-base leading-relaxed text-zinc-300">
                {car.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Included Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-black stroke-[3]" />
                    </div>
                    <span className="text-base text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supplier Info */}
            {supplier && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Meet Your Supplier</h2>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-black">
                    {supplier.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{supplier.name}</h3>
                    <p className="text-sm text-zinc-400 mb-3">
                      Joined {supplier.joined}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold text-white">{supplier.rating}</span>
                        <span className="text-sm text-zinc-400">({supplier.reviews} reviews)</span>
                      </div>
                      {supplier.verified && (
                        <Badge variant="accent">ID Verified</Badge>
                      )}
                    </div>
                    <p className="text-sm text-zinc-300 mb-4 leading-relaxed">{supplier.bio}</p>
                    <Button variant="outline" asChild>
                      <Link href="/messages">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message Supplier
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">${car.price}</span>
                    <span className="text-lg text-zinc-400">/day</span>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {/* Date Selection */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="relative p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-all"
                    >
                      <div className="text-xs text-zinc-500 mb-1">CHECK-IN</div>
                      <div className="text-sm font-semibold text-white">{formatDateDisplay(startDate)}</div>
                    </button>
                    <button
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="relative p-4 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 transition-all"
                    >
                      <div className="text-xs text-zinc-500 mb-1">CHECKOUT</div>
                      <div className="text-sm font-semibold text-white">{formatDateDisplay(endDate)}</div>
                    </button>
                  </div>

                  {/* Airbnb-Style Calendar Popup */}
                  {showCalendar && (
                    <div className="absolute z-50 mt-2 p-6 bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Select dates</h3>
                        <button
                          onClick={() => setShowCalendar(false)}
                          className="text-zinc-400 hover:text-white"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Calendar Grid - November 2025 */}
                      <div className="space-y-6">
                        <div>
                          <div className="text-sm font-semibold text-white mb-3">November 2025</div>
                          <div className="grid grid-cols-7 gap-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                              <div key={day} className="text-xs text-zinc-500 text-center font-semibold">
                                {day}
                              </div>
                            ))}
                            {/* Generate calendar days for November 2025 */}
                            {Array.from({ length: 30 }, (_, i) => {
                              const date = new Date(2025, 10, i + 1) // November is month 10
                              const isBlocked = isDateBlocked(date)
                              const isStart = startDate?.toDateString() === date.toDateString()
                              const isEnd = endDate?.toDateString() === date.toDateString()
                              const isInRange = isDateInRange(date)
                              const isPast = date < new Date()

                              return (
                                <button
                                  key={i}
                                  onClick={() => handleDateClick(date)}
                                  onMouseEnter={() => setHoveringDate(date)}
                                  onMouseLeave={() => setHoveringDate(null)}
                                  disabled={isBlocked || isPast}
                                  className={cn(
                                    "relative aspect-square p-2 text-sm rounded-xl transition-all",
                                    isBlocked || isPast
                                      ? "text-zinc-700 line-through cursor-not-allowed"
                                      : "text-white hover:bg-white/10",
                                    isStart || isEnd
                                      ? "bg-accent text-black font-bold"
                                      : isInRange
                                      ? "bg-accent/20"
                                      : ""
                                  )}
                                >
                                  {i + 1}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* December 2025 */}
                        <div>
                          <div className="text-sm font-semibold text-white mb-3">December 2025</div>
                          <div className="grid grid-cols-7 gap-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                              <div key={day} className="text-xs text-zinc-500 text-center font-semibold">
                                {day}
                              </div>
                            ))}
                            {/* Generate calendar days for December 2025 */}
                            {Array.from({ length: 31 }, (_, i) => {
                              const date = new Date(2025, 11, i + 1) // December is month 11
                              const isBlocked = isDateBlocked(date)
                              const isStart = startDate?.toDateString() === date.toDateString()
                              const isEnd = endDate?.toDateString() === date.toDateString()
                              const isInRange = isDateInRange(date)

                              return (
                                <button
                                  key={i}
                                  onClick={() => handleDateClick(date)}
                                  onMouseEnter={() => setHoveringDate(date)}
                                  onMouseLeave={() => setHoveringDate(null)}
                                  disabled={isBlocked}
                                  className={cn(
                                    "relative aspect-square p-2 text-sm rounded-xl transition-all",
                                    isBlocked
                                      ? "text-zinc-700 line-through cursor-not-allowed"
                                      : "text-white hover:bg-white/10",
                                    isStart || isEnd
                                      ? "bg-accent text-black font-bold"
                                      : isInRange
                                      ? "bg-accent/20"
                                      : ""
                                  )}
                                >
                                  {i + 1}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Clear dates button */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <button
                          onClick={() => {
                            setStartDate(null)
                            setEndDate(null)
                          }}
                          className="text-sm text-zinc-400 hover:text-white underline"
                        >
                          Clear dates
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                {booking && (
                  <>
                    <div className="h-px bg-white/10" />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">${car.price} × {booking.days} days</span>
                        <span className="font-medium text-white">${booking.subtotal}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">Service fee</span>
                        <span className="font-medium text-white">${booking.serviceFee}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">Insurance</span>
                        <span className="font-medium text-white">${booking.insurance}</span>
                      </div>
                      <div className="h-px bg-white/10" />
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg text-white">Total</span>
                        <span className="font-bold text-xl text-white">${booking.total}</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Reserve Button */}
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={!booking}
                  asChild={!!booking}
                >
                  {booking ? (
                    <Link href={`/booking/checkout?car=${car.id}&start=${startDate}&end=${endDate}`}>
                      Reserve Now
                    </Link>
                  ) : (
                    <span>Select dates to book</span>
                  )}
                </Button>

                {booking && (
                  <p className="text-xs text-center text-zinc-500">
                    You won't be charged yet
                  </p>
                )}

                <div className="h-px bg-white/10" />

                {/* Message Button */}
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/messages">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Supplier
                  </Link>
                </Button>

                {/* Trust Badges */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-5 w-5 text-zinc-500" />
                    <span className="text-zinc-400">Protected by Cartique Insurance</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-5 w-5 text-zinc-500" />
                    <span className="text-zinc-400">Free cancellation up to 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
