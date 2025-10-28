"use client"

import { useState } from "react"
import { ChevronLeft, Check, X, Eye, Download, Mail, Phone, Building, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type PendingSupplier = {
  id: string
  businessName: string
  ownerName: string
  email: string
  phone: string
  location: string
  appliedDate: string
  yearsInBusiness: number
  numberOfVehicles: number
  status: "pending" | "reviewing"
}

export function AdminSuppliersPendingPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const pendingSuppliers: PendingSupplier[] = [
    {
      id: "1",
      businessName: "Premium Auto LLC",
      ownerName: "James Anderson",
      email: "james@premiumauto.com",
      phone: "+1 (310) 555-0123",
      location: "Beverly Hills, CA",
      appliedDate: "2025-10-20",
      yearsInBusiness: 8,
      numberOfVehicles: 15,
      status: "pending"
    },
    {
      id: "2",
      businessName: "Elite Motors Group",
      ownerName: "Rachel Kim",
      email: "rachel@elitemotors.com",
      phone: "+1 (305) 555-0456",
      location: "Miami, FL",
      appliedDate: "2025-10-21",
      yearsInBusiness: 5,
      numberOfVehicles: 8,
      status: "reviewing"
    },
    {
      id: "3",
      businessName: "Luxury Drive Co",
      ownerName: "Marcus Thompson",
      email: "marcus@luxurydrive.com",
      phone: "+1 (480) 555-0789",
      location: "Scottsdale, AZ",
      appliedDate: "2025-10-22",
      yearsInBusiness: 12,
      numberOfVehicles: 22,
      status: "pending"
    },
  ]

  const selected = selectedId ? pendingSuppliers.find(s => s.id === selectedId) : null

  const handleApprove = (id: string) => {
    console.log("Approving supplier:", id)
  }

  const handleReject = (id: string) => {
    console.log("Rejecting supplier:", id)
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
          <h1 className="text-5xl font-bold text-white mb-2">Pending Suppliers</h1>
          <p className="text-zinc-400">{pendingSuppliers.length} applications awaiting review</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Supplier List */}
          <div className="lg:col-span-1 space-y-4">
            {pendingSuppliers.map((supplier) => (
              <button
                key={supplier.id}
                onClick={() => setSelectedId(supplier.id)}
                className={cn(
                  "w-full p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all",
                  selectedId === supplier.id && "border-accent bg-accent/10"
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-white mb-1">{supplier.businessName}</h3>
                    <p className="text-sm text-zinc-400">{supplier.ownerName}</p>
                  </div>
                  <Badge variant={supplier.status === "reviewing" ? "accent" : "outline"} className="text-xs">
                    {supplier.status}
                  </Badge>
                </div>
                <div className="space-y-1 text-xs text-zinc-500">
                  <p>Applied: {new Date(supplier.appliedDate).toLocaleDateString()}</p>
                  <p>{supplier.numberOfVehicles} vehicles • {supplier.yearsInBusiness} years</p>
                </div>
              </button>
            ))}
          </div>

          {/* Supplier Details */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{selected.businessName}</h2>
                  <p className="text-zinc-400">{selected.ownerName}</p>
                </div>

                {/* Business Info */}
                <div className="space-y-6 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">EMAIL</div>
                      <div className="flex items-center gap-2 text-sm text-white">
                        <Mail className="h-4 w-4 text-zinc-500" />
                        <span>{selected.email}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">PHONE</div>
                      <div className="flex items-center gap-2 text-sm text-white">
                        <Phone className="h-4 w-4 text-zinc-500" />
                        <span>{selected.phone}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">LOCATION</div>
                      <div className="flex items-center gap-2 text-sm text-white">
                        <MapPin className="h-4 w-4 text-zinc-500" />
                        <span>{selected.location}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">APPLIED</div>
                      <div className="flex items-center gap-2 text-sm text-white">
                        <Calendar className="h-4 w-4 text-zinc-500" />
                        <span>{new Date(selected.appliedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-xs text-zinc-500 mb-1">YEARS IN BUSINESS</div>
                      <div className="text-2xl font-bold text-white">{selected.yearsInBusiness}</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-xs text-zinc-500 mb-1">NUMBER OF VEHICLES</div>
                      <div className="text-2xl font-bold text-white">{selected.numberOfVehicles}</div>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Submitted Documents</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Business License", verified: true },
                      { name: "Insurance Certificate", verified: true },
                      { name: "Owner ID", verified: false },
                    ].map((doc) => (
                      <div key={doc.name} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center",
                            doc.verified ? "bg-green-500/20" : "bg-orange-500/20"
                          )}>
                            {doc.verified ? (
                              <Check className="h-4 w-4 text-green-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-orange-400" />
                            )}
                          </div>
                          <span className="text-sm font-semibold text-white">{doc.name}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
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
                    Reject Application
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    className="flex-1"
                    onClick={() => handleApprove(selected.id)}
                  >
                    <Check className="h-5 w-5 mr-2" />
                    Approve Supplier
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
                <Building className="h-16 w-16 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No supplier selected</h3>
                <p className="text-zinc-400">Select an application from the list to review</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
