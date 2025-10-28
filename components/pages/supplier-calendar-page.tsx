"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockCarListings } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

type Booking = {
  id: string
  carId: string
  customerName: string
  startDate: Date
  endDate: Date
  status: "confirmed" | "pending" | "completed"
}

export function SupplierCalendarPage() {
  const [selectedCarId, setSelectedCarId] = useState<string>("all")
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10)) // November 2025

  const myListings = mockCarListings.slice(0, 3)

  // Mock bookings
  const bookings: Booking[] = [
    {
      id: "1",
      carId: "1",
      customerName: "Michael Ross",
      startDate: new Date(2025, 10, 1),
      endDate: new Date(2025, 10, 4),
      status: "confirmed"
    },
    {
      id: "2",
      carId: "2",
      customerName: "Sarah Johnson",
      startDate: new Date(2025, 10, 10),
      endDate: new Date(2025, 10, 15),
      status: "pending"
    },
    {
      id: "3",
      carId: "1",
      customerName: "David Kim",
      startDate: new Date(2025, 10, 20),
      endDate: new Date(2025, 10, 22),
      status: "confirmed"
    },
    {
      id: "4",
      carId: "4",
      customerName: "Emma Wilson",
      startDate: new Date(2025, 10, 25),
      endDate: new Date(2025, 10, 28),
      status: "confirmed"
    },
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isDateBooked = (date: Date) => {
    return bookings
      .filter(b => selectedCarId === "all" || b.carId === selectedCarId)
      .some(booking =>
        date >= booking.startDate && date <= booking.endDate
      )
  }

  const getBookingForDate = (date: Date) => {
    return bookings
      .filter(b => selectedCarId === "all" || b.carId === selectedCarId)
      .find(booking =>
        date >= booking.startDate && date <= booking.endDate
      )
  }

  const filteredBookings = bookings.filter(b => selectedCarId === "all" || b.carId === selectedCarId)

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Booking Calendar</h1>
            <p className="text-zinc-400">View and manage your rental schedule</p>
          </div>

          {/* Vehicle Filter */}
          <div className="flex items-center gap-3">
            <Select value={selectedCarId} onValueChange={setSelectedCarId}>
              <SelectTrigger className="w-64 bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="All Vehicles" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10">
                <SelectItem value="all">All Vehicles</SelectItem>
                {myListings.map((car) => (
                  <SelectItem key={car.id} value={car.id}>{car.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={previousMonth}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-xs text-zinc-500 text-center font-semibold py-2">
                    {day}
                  </div>
                ))}

                {/* Empty cells for days before month starts */}
                {Array.from({ length: getFirstDayOfMonth(currentMonth) }, (_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Calendar days */}
                {Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => {
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
                  const isBooked = isDateBooked(date)
                  const booking = getBookingForDate(date)
                  const isPast = date < new Date()

                  return (
                    <div
                      key={i}
                      className={cn(
                        "aspect-square p-2 rounded-xl transition-all relative",
                        isBooked
                          ? booking?.status === "confirmed"
                            ? "bg-accent/20 border border-accent/50"
                            : "bg-orange-500/20 border border-orange-500/50"
                          : "bg-white/5 hover:bg-white/10",
                        isPast && !isBooked && "opacity-50"
                      )}
                    >
                      <div className="text-sm font-semibold text-white text-center">
                        {i + 1}
                      </div>
                      {isBooked && booking && (
                        <div className="absolute inset-x-1 bottom-1">
                          <div className="text-[9px] text-center font-bold truncate text-white">
                            {booking.customerName.split(' ')[0]}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent/20 border border-accent/50" />
                  <span className="text-sm text-zinc-400">Confirmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-orange-500/20 border border-orange-500/50" />
                  <span className="text-sm text-zinc-400">Pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white/5" />
                  <span className="text-sm text-zinc-400">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Bookings List */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Upcoming Bookings</h3>

              <div className="space-y-4">
                {filteredBookings
                  .filter(b => b.endDate >= new Date())
                  .slice(0, 5)
                  .map((booking) => {
                    const car = mockCarListings.find(c => c.id === booking.carId)
                    if (!car) return null

                    return (
                      <div key={booking.id} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white text-sm">{booking.customerName}</h4>
                          <Badge variant="accent" className="text-xs">
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-zinc-400 mb-2">{car.name}</p>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <CalendarIcon className="h-3 w-3" />
                          <span>
                            {booking.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {booking.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    )
                  })}
              </div>

              {filteredBookings.length === 0 && (
                <div className="text-center py-8">
                  <CalendarIcon className="h-12 w-12 text-zinc-600 mx-auto mb-3" />
                  <p className="text-sm text-zinc-400">No upcoming bookings</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
