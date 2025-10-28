"use client"

import { useState } from "react"
import { ChevronLeft, Check, X, Eye, AlertCircle, Car } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { mockCarListings } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

type PendingListing = {
  id: string
  car: typeof mockCarListings[0]
  supplierName: string
  submittedDate: string
  status: "pending" | "reviewing"
  flags: string[]
}

export function AdminListingsPendingPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [rejectionReason, setRejectionReason] = useState("")

  const pendingListings: PendingListing[] = [
    {
      id: "1",
      car: mockCarListings[0],
      supplierName: "Premium Auto LLC",
      submittedDate: "2025-10-22",
      status: "pending",
      flags: ["Missing insurance docs"]
    },
    {
      id: "2",
      car: mockCarListings[1],
      supplierName: "Elite Motors Group",
      submittedDate: "2025-10-22",
      status: "reviewing",
      flags: []
    },
    {
      id: "3",
      car: mockCarListings[2],
      supplierName: "Luxury Drive Co",
      submittedDate: "2025-10-23",
      status: "pending",
      flags: ["Price verification needed"]
    },
  ]

  const selected = selectedId ? pendingListings.find(l => l.id === selectedId) : null

  const handleApprove = (id: string) => {
    console.log("Approving listing:", id)
  }

  const handleReject = (id: string) => {
    console.log("Rejecting listing:", id, "Reason:", rejectionReason)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      {/* Header */}
      <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            href="/admin/dashboard"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Admin Dashboard
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Pending Listings</h1>
          <p className="text-zinc-400">{pendingListings.length} vehicles awaiting approval</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Listing List */}
          <div className="lg:col-span-1 space-y-4">
            {pendingListings.map((listing) => {
              const imageUrl = carImages[listing.car.id] || carImages["1"]

              return (
                <button
                  key={listing.id}
                  onClick={() => setSelectedId(listing.id)}
                  className={cn(
                    "w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden text-left hover:bg-white/10 transition-all",
                    selectedId === listing.id && "border-accent bg-accent/10"
                  )}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={imageUrl}
                      alt={listing.car.name}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                    {listing.flags.length > 0 && (
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-500/90 border border-orange-500/50 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{listing.flags.length}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">{listing.car.name}</h3>
                    <p className="text-sm text-zinc-400 mb-2">{listing.supplierName}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-500">
                        {new Date(listing.submittedDate).toLocaleDateString()}
                      </span>
                      <Badge variant={listing.status === "reviewing" ? "accent" : "outline"} className="text-xs">
                        {listing.status}
                      </Badge>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Listing Details */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                {/* Image */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={carImages[selected.car.id] || carImages["1"]}
                    alt={selected.car.name}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selected.car.name}</h2>
                  <p className="text-zinc-400">{selected.car.year} • {selected.car.category} • {selected.car.mileage.toLocaleString()} miles</p>
                </div>

                {/* Flags */}
                {selected.flags.length > 0 && (
                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-white mb-1">Review Required</p>
                        <ul className="text-sm text-zinc-300 space-y-1">
                          {selected.flags.map((flag, i) => (
                            <li key={i}>• {flag}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Specs */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: "Engine", value: selected.car.specs.engine },
                      { label: "Horsepower", value: `${selected.car.specs.horsepower} HP` },
                      { label: "Transmission", value: selected.car.specs.transmission },
                      { label: "Drivetrain", value: selected.car.specs.drivetrain },
                      { label: "Weight", value: selected.car.specs.weight },
                      { label: "Seats", value: selected.car.specs.seats },
                    ].map((spec) => (
                      <div key={spec.label} className="p-3 bg-white/5 border border-white/10 rounded-xl">
                        <div className="text-xs text-zinc-500">{spec.label}</div>
                        <div className="text-sm font-semibold text-white">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-4">Pricing</h3>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Daily Rate</span>
                      <span className="text-2xl font-bold text-accent">${selected.car.price}</span>
                    </div>
                  </div>
                </div>

                {/* Rejection Reason */}
                <div className="mb-6">
                  <Label htmlFor="rejection" className="text-white">Rejection Reason (Optional)</Label>
                  <Textarea
                    id="rejection"
                    placeholder="Provide a reason if rejecting this listing..."
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    className="mt-2 min-h-[80px] bg-white/5 border-white/20 text-white"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10"
                    onClick={() => handleReject(selected.id)}
                  >
                    <X className="h-5 w-5 mr-2" />
                    Reject Listing
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    className="flex-1"
                    onClick={() => handleApprove(selected.id)}
                  >
                    <Check className="h-5 w-5 mr-2" />
                    Approve Listing
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
                <Car className="h-16 w-16 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No listing selected</h3>
                <p className="text-zinc-400">Select a listing from the list to review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
