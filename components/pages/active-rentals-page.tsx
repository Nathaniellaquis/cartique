"use client"

import { useState } from "react"
import { Calendar, MapPin, MessageSquare, Phone, ChevronRight, Download, XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { mockBookings, type Booking } from "@/lib/mock-data"

export function ActiveRentalsPage() {
  const [selectedTab, setSelectedTab] = useState("upcoming")
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [cancelReason, setCancelReason] = useState("")

  // Filter bookings by status
  const upcomingBookings = mockBookings.filter((b) => b.status === "confirmed")
  const activeBookings = mockBookings.filter((b) => b.status === "in-progress")
  const completedBookings = mockBookings.filter((b) => b.status === "completed")

  const handleCancelBooking = () => {
    if (selectedBooking && cancelReason) {
      console.log("Cancelled booking:", selectedBooking.id, "Reason:", cancelReason)
      setShowCancelDialog(false)
      setCancelReason("")
      setSelectedBooking(null)
    }
  }

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "in-progress":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "completed":
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
      default:
        return "bg-gray-500/10 text-gray-700"
    }
  }

  const renderBookingCard = (booking: Booking) => (
    <Card key={booking.id} className="hover:border-accent transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Car Image */}
          <div className="lg:w-64 h-40 bg-muted rounded-lg overflow-hidden flex-shrink-0">
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
                  <h3 className="text-xl font-semibold">{booking.carName}</h3>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status === "confirmed" && "Confirmed"}
                    {booking.status === "in-progress" && "Active"}
                    {booking.status === "completed" && "Completed"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold">${booking.totalPrice.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>

            {/* Rental Period */}
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
              <span className="text-muted-foreground">
                ({" "}
                {Math.ceil(
                  (new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days )
              </span>
            </div>

            {/* Supplier Info */}
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {booking.supplierName.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{booking.supplierName}</p>
                <p className="text-xs text-muted-foreground">Supplier</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href={`/listing/${booking.carId}`}>
                  <ChevronRight className="h-4 w-4" />
                  View Car
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href="/messages">
                  <MessageSquare className="h-4 w-4" />
                  Message Supplier
                </Link>
              </Button>
              {booking.status === "confirmed" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-destructive hover:text-destructive"
                  onClick={() => {
                    setSelectedBooking(booking)
                    setShowCancelDialog(true)
                  }}
                >
                  <XCircle className="h-4 w-4" />
                  Cancel Booking
                </Button>
              )}
              {booking.status === "completed" && (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href={`/review/submit/${booking.id}`}>
                    Leave Review
                  </Link>
                </Button>
              )}
              <Button variant="ghost" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download Receipt
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light mb-2">My Rentals</h1>
          <p className="text-muted-foreground">Manage your current and past vehicle rentals</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Upcoming</CardDescription>
              <CardTitle className="text-3xl">{upcomingBookings.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active</CardDescription>
              <CardTitle className="text-3xl">{activeBookings.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Completed</CardDescription>
              <CardTitle className="text-3xl">{completedBookings.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6 space-y-4">
            {upcomingBookings.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-1">No upcoming rentals</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start browsing to book your next adventure
                  </p>
                  <Button asChild>
                    <Link href="/search">Browse Cars</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              upcomingBookings.map(renderBookingCard)
            )}
          </TabsContent>

          <TabsContent value="active" className="mt-6 space-y-4">
            {activeBookings.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-1">No active rentals</p>
                  <p className="text-sm text-muted-foreground">
                    You don't have any active rentals at the moment
                  </p>
                </CardContent>
              </Card>
            ) : (
              activeBookings.map(renderBookingCard)
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-6 space-y-4">
            {completedBookings.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-1">No completed rentals</p>
                  <p className="text-sm text-muted-foreground">
                    Your rental history will appear here
                  </p>
                </CardContent>
              </Card>
            ) : (
              completedBookings.map(renderBookingCard)
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Cancel Dialog */}
      <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Booking</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? Cancellation fees may apply based on our
              cancellation policy.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
              <p className="font-medium">Cancellation Policy:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>More than 7 days: Full refund</li>
                <li>3-7 days: 50% refund</li>
                <li>Less than 3 days: No refund</li>
              </ul>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Reason for cancellation (optional)
              </label>
              <Textarea
                placeholder="Let us know why you're cancelling..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCancelDialog(false)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={handleCancelBooking}>
              Cancel Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
