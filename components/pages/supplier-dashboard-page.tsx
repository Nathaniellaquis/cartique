"use client"

import { DollarSign, Car, Calendar, TrendingUp, Plus, ChevronRight, Eye, Edit, MoreVertical, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockCarListings } from "@/lib/mock-data"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

export function SupplierDashboardPage() {
  const supplierName = "Elite Auto Rentals"
  const myListings = mockCarListings.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Supplier Dashboard</h1>
            <p className="text-zinc-400">{supplierName}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" asChild>
              <Link href="/supplier/messages">
                <MessageCircle className="h-5 w-5 mr-2" />
                Messages
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/supplier/calendar">
                <Calendar className="h-5 w-5 mr-2" />
                Calendar
              </Link>
            </Button>
            <Button variant="default" size="lg" asChild>
              <Link href="/supplier/listings/create">
                <Plus className="h-5 w-5 mr-2" />
                Add Listing
              </Link>
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">$12,450</div>
                <div className="text-xs text-zinc-400">This Month</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-green-400">
              <TrendingUp className="h-3 w-3" />
              <span>+23% from last month</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-xs text-zinc-400">Active Bookings</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">3 pending approval</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">{myListings.length}</div>
                <div className="text-xs text-zinc-400">Active Listings</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">2 pending verification</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">1,247</div>
                <div className="text-xs text-zinc-400">Profile Views</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">Last 30 days</div>
          </div>
        </div>

        {/* My Listings */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">My Listings</h2>
            <Button variant="ghost" className="text-zinc-400 hover:text-accent" asChild>
              <Link href="/supplier/listings">
                View All
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myListings.map((car) => {
              const imageUrl = carImages[car.id] || carImages["1"]

              return (
                <div key={car.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group">
                  <div className="aspect-video relative">
                    <Image
                      src={imageUrl}
                      alt={car.name}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                    {car.featured && (
                      <Badge variant="gold" className="absolute top-3 left-3">Featured</Badge>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white mb-1">{car.name}</h3>
                    <p className="text-sm text-zinc-400 mb-3">{car.location}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-white">${car.price}</span>
                        <span className="text-sm text-zinc-500">/day</span>
                      </div>
                      <Badge variant="success">Active</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/listing/${car.id}`}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/supplier/listings/edit/${car.id}`}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Recent Bookings */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Recent Bookings</h2>
            <Button variant="ghost" className="text-zinc-400 hover:text-accent" asChild>
              <Link href="/supplier/bookings">
                View All
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            {[
              { id: 1, customer: "Michael Ross", car: "McLaren 720S", dates: "Nov 1-4, 2025", amount: "$4,485", status: "confirmed" },
              { id: 2, customer: "Sarah Johnson", car: "Ferrari F8 Tributo", dates: "Nov 10-15, 2025", amount: "$8,750", status: "pending" },
              { id: 3, customer: "David Kim", car: "Porsche 911 Turbo S", dates: "Nov 20-22, 2025", amount: "$2,500", status: "confirmed" },
            ].map((booking, index) => (
              <div key={booking.id}>
                <div className="flex items-center justify-between p-5 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-black">
                      {booking.customer.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-sm">{booking.customer}</h4>
                      <p className="text-sm text-zinc-400">{booking.car}</p>
                      <p className="text-xs text-zinc-500">{booking.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-white">{booking.amount}</div>
                      <Badge variant={booking.status === "confirmed" ? "success" : "outline"} className="text-xs">
                        {booking.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon" className="text-zinc-400">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                {index < 2 && <div className="h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
