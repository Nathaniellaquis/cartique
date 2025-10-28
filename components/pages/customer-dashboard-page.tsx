"use client"

import { Heart, Car, MessageCircle, Settings, Calendar, MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockCustomer, mockCarListings, mockBookings } from "@/lib/mock-data"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

export function CustomerDashboardPage() {
  const savedCars = mockCarListings.slice(0, 3)
  const upcomingBookings = mockBookings.filter(b => b.status === "confirmed")

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Welcome back, {mockCustomer.name.split(" ")[0]}</h1>
            <p className="text-zinc-400">Manage your rentals and saved vehicles</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-black">
              {mockCustomer.name.charAt(0)}
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-white">{mockCustomer.name}</p>
              <p className="text-sm text-zinc-400">{mockCustomer.email}</p>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link href="/settings/account">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* KPI Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-accent" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{savedCars.length}</div>
                <div className="text-sm text-zinc-400">Saved Cars</div>
              </div>
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-accent" asChild>
                <Link href="/saved">
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-accent" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{upcomingBookings.length}</div>
                <div className="text-sm text-zinc-400">Active Rentals</div>
              </div>
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-accent" asChild>
                <Link href="/rentals/active">
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <MessageCircle className="h-7 w-7 text-accent" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-zinc-400">Messages</div>
              </div>
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xs font-bold text-black">2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Rentals */}
        {upcomingBookings.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Upcoming Rentals</h2>
              <Button variant="ghost" className="text-zinc-400 hover:text-accent" asChild>
                <Link href="/rentals/active">
                  View All
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {upcomingBookings.map((booking) => {
                const car = mockCarListings.find(c => c.id === booking.carId)
                if (!car) return null
                const imageUrl = carImages[car.id] || carImages["1"]

                return (
                  <div key={booking.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-56 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                        <Image
                          src={imageUrl}
                          alt={car.name}
                          width={224}
                          height={144}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{booking.carName}</h3>
                            <p className="text-sm text-zinc-400">{car.location}</p>
                          </div>
                          <Badge variant="accent">Confirmed</Badge>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-zinc-300">
                            <Calendar className="h-4 w-4 text-zinc-500" />
                            <span>
                              {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-300">
                            <MapPin className="h-4 w-4 text-zinc-500" />
                            <span>Pickup at 10:00 AM</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button variant="default" size="sm" asChild>
                            <Link href={`/booking/confirmation/${booking.id}`}>
                              View Booking
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/messages">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message Supplier
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Saved Cars */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Saved Cars</h2>
            <Button variant="ghost" className="text-zinc-400 hover:text-accent" asChild>
              <Link href="/saved">
                View All
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {savedCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedCars.map((car) => {
                const imageUrl = carImages[car.id] || carImages["1"]

                return (
                  <div key={car.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all group">
                    <div className="aspect-video relative">
                      <Image
                        src={imageUrl}
                        alt={car.name}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-red-500/90 border border-red-500/50 backdrop-blur-xl flex items-center justify-center">
                        <Heart className="h-5 w-5 fill-current text-white" />
                      </button>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white mb-1">
                        {car.name}
                      </h3>
                      <p className="text-sm text-zinc-400 mb-3">{car.location}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-white">${car.price}</span>
                          <span className="text-sm text-zinc-500">/day</span>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/listing/${car.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
              <Heart className="h-16 w-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No saved cars yet</h3>
              <p className="text-zinc-400 mb-6">Start browsing and save your favorites</p>
              <Button variant="default" asChild>
                <Link href="/search">Browse Cars</Link>
              </Button>
            </div>
          )}
        </section>

        {/* Recent Messages */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Recent Messages</h2>
            <Button variant="ghost" className="text-zinc-400 hover:text-accent" asChild>
              <Link href="/messages">
                View All
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            {[
              {
                id: 1,
                supplier: "John Smith",
                car: "Re: McLaren 720S",
                message: "Thanks for your interest! The car is available for your dates. Would you like to proceed?",
                time: "2h ago",
                unread: true
              },
              {
                id: 2,
                supplier: "Maria Garcia",
                car: "Re: Ferrari F8 Tributo",
                message: "I can offer a discount for bookings over 5 days. Let me know if you're interested!",
                time: "1d ago",
                unread: true
              },
              {
                id: 3,
                supplier: "David Chen",
                car: "Re: Lamborghini Huracán",
                message: "The vehicle is in excellent condition. I can meet you at your hotel for pickup.",
                time: "3d ago",
                unread: false
              }
            ].map((msg, index) => (
              <div key={msg.id}>
                <Link
                  href="/messages"
                  className="flex items-start gap-4 p-5 hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-black flex-shrink-0">
                    {msg.supplier.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-white">{msg.supplier}</h4>
                      <span className="text-xs text-zinc-500">{msg.time}</span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-1">{msg.car}</p>
                    <p className="text-sm text-zinc-500 truncate">{msg.message}</p>
                  </div>
                  {msg.unread && (
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                  )}
                </Link>
                {index < 2 && <div className="h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" size="lg" className="w-full justify-start" asChild>
            <Link href="/search">
              <Car className="h-5 w-5 mr-2" />
              Browse Cars
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start" asChild>
            <Link href="/rentals/active">
              <Calendar className="h-5 w-5 mr-2" />
              My Rentals
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start" asChild>
            <Link href="/messages">
              <MessageCircle className="h-5 w-5 mr-2" />
              Messages
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full justify-start" asChild>
            <Link href="/settings/account">
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
