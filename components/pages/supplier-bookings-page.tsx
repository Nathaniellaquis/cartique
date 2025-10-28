"use client"

import { useState } from "react"
import { Calendar, Check, Clock, DollarSign, Filter, MapPin, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { mockBookings, mockCarListings, type Booking } from "@/lib/mock-data"

// Extended mock bookings for supplier view
const supplierBookings: (Booking & { customerEmail: string; customerPhone: string })[] = [
  {
    ...mockBookings[0],
    customerEmail: "alex@example.com",
    customerPhone: "+1 (555) 123-4567",
  },
  {
    ...mockBookings[1],
    status: "pending",
    customerEmail: "alex@example.com",
    customerPhone: "+1 (555) 123-4567",
  },
  {
    id: "BK-12347",
    carId: "4",
    carName: "Porsche 911 Turbo S",
    carImage: "/placeholder-car-1.jpg",
    customerId: "cust-2",
    customerName: "Sarah Miller",
    supplierId: "sup-1",
    supplierName: "John Smith",
    startDate: "2025-11-10",
    endDate: "2025-11-12",
    totalPrice: 2750,
    status: "in-progress",
    createdAt: "2025-10-15",
    customerEmail: "sarah.m@example.com",
    customerPhone: "+1 (555) 987-6543",
  },
  {
    id: "BK-12348",
    carId: "1",
    carName: "McLaren 720S Performance",
    carImage: "/placeholder-car-1.jpg",
    customerId: "cust-3",
    customerName: "Michael Chen",
    supplierId: "sup-1",
    supplierName: "John Smith",
    startDate: "2025-10-05",
    endDate: "2025-10-07",
    totalPrice: 3285,
    status: "completed",
    createdAt: "2025-09-28",
    customerEmail: "mchen@example.com",
    customerPhone: "+1 (555) 456-7890",
  },
]

export function SupplierBookingsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBooking, setSelectedBooking] = useState<typeof supplierBookings[0] | null>(null)
  const [showDeclineDialog, setShowDeclineDialog] = useState(false)
  const [declineReason, setDeclineReason] = useState("")

  const filteredBookings = supplierBookings.filter((booking) => {
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.carName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab =
      selectedTab === "all" ||
      booking.status === selectedTab

    return matchesSearch && matchesTab
  })

  const handleApprove = (bookingId: string) => {
    // Mock approval
    console.log("Approved booking:", bookingId)
  }

  const handleDecline = () => {
    if (selectedBooking && declineReason) {
      console.log("Declined booking:", selectedBooking.id, "Reason:", declineReason)
      setShowDeclineDialog(false)
      setDeclineReason("")
      setSelectedBooking(null)
    }
  }

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "confirmed":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "in-progress":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "completed":
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
      case "cancelled":
        return "bg-red-500/10 text-red-700 dark:text-red-400"
    }
  }

  const getStatusLabel = (status: Booking["status"]) => {
    return status
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">Booking Requests</h1>
          <p className="text-muted-foreground">
            Manage your rental bookings and communicate with customers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending Requests</CardDescription>
              <CardTitle className="text-3xl">
                {supplierBookings.filter((b) => b.status === "pending").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active Rentals</CardDescription>
              <CardTitle className="text-3xl">
                {supplierBookings.filter((b) => b.status === "in-progress").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Upcoming</CardDescription>
              <CardTitle className="text-3xl">
                {supplierBookings.filter((b) => b.status === "confirmed").length}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Completed</CardDescription>
              <CardTitle className="text-3xl">
                {supplierBookings.filter((b) => b.status === "completed").length}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by customer, car, or booking ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Bookings</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Value</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="in-progress">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-6">
            <div className="space-y-4">
              {filteredBookings.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium mb-1">No bookings found</p>
                    <p className="text-sm text-muted-foreground">
                      {searchQuery
                        ? "Try adjusting your search"
                        : "New bookings will appear here"}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredBookings.map((booking) => (
                  <Card key={booking.id} className="hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Car Image */}
                        <div className="lg:w-48 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400"
                            alt={booking.carName}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Booking Details */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold">{booking.carName}</h3>
                                <Badge className={getStatusColor(booking.status)}>
                                  {getStatusLabel(booking.status)}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Booking ID: {booking.id}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-semibold">${booking.totalPrice.toLocaleString()}</p>
                              <p className="text-sm text-muted-foreground">Total</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Customer Info */}
                            <div className="flex items-start gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback>
                                  {booking.customerName.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{booking.customerName}</p>
                                <p className="text-sm text-muted-foreground">{booking.customerEmail}</p>
                                <p className="text-sm text-muted-foreground">{booking.customerPhone}</p>
                              </div>
                            </div>

                            {/* Rental Dates */}
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {new Date(booking.startDate).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}{" "}
                                  -{" "}
                                  {new Date(booking.endDate).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {Math.ceil(
                                    (new Date(booking.endDate).getTime() -
                                      new Date(booking.startDate).getTime()) /
                                      (1000 * 60 * 60 * 24)
                                  )}{" "}
                                  days
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {booking.status === "pending" && (
                              <>
                                <Button
                                  onClick={() => handleApprove(booking.id)}
                                  className="gap-2"
                                >
                                  <Check className="h-4 w-4" />
                                  Approve Booking
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedBooking(booking)
                                    setShowDeclineDialog(true)
                                  }}
                                  className="gap-2"
                                >
                                  <X className="h-4 w-4" />
                                  Decline
                                </Button>
                              </>
                            )}
                            <Button variant="outline" asChild>
                              <a href="/supplier/messages">Message Customer</a>
                            </Button>
                            <Button variant="ghost">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Decline Dialog */}
      <Dialog open={showDeclineDialog} onOpenChange={setShowDeclineDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Decline Booking Request</DialogTitle>
            <DialogDescription>
              Please provide a reason for declining this booking. The customer will be notified.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="e.g., Car is undergoing scheduled maintenance..."
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeclineDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleDecline}
              disabled={!declineReason.trim()}
              variant="destructive"
            >
              Decline Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
