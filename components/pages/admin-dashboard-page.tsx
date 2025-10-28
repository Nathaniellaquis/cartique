"use client"

import { DollarSign, Users, Car, TrendingUp, AlertCircle, CheckCircle, Clock, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-400">ADMIN ACCESS</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-zinc-400">Platform overview and management</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">$47,230</div>
                <div className="text-xs text-zinc-400">Platform Revenue</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-green-400">
              <TrendingUp className="h-3 w-3" />
              <span>+18% vs last month</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">1,247</div>
                <div className="text-xs text-zinc-400">Total Users</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">342 customers, 28 suppliers</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">87</div>
                <div className="text-xs text-zinc-400">Active Listings</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">12 pending approval</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Activity className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-white">156</div>
                <div className="text-xs text-zinc-400">Active Bookings</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">23 this week</div>
          </div>
        </div>

        {/* Pending Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Pending Suppliers */}
          <Link href="/admin/suppliers/pending" className="block group">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    Pending Suppliers
                  </h3>
                  <p className="text-sm text-zinc-400">Applications awaiting review</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-orange-400">7</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-orange-400">
                <Clock className="h-4 w-4" />
                <span>3 applications over 48 hours old</span>
              </div>
            </div>
          </Link>

          {/* Pending Listings */}
          <Link href="/admin/listings/pending" className="block group">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-accent/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    Pending Listings
                  </h3>
                  <p className="text-sm text-zinc-400">Vehicles awaiting approval</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-orange-400">12</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-orange-400">
                <Clock className="h-4 w-4" />
                <span>5 listings need review</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Access */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" size="lg" className="w-full justify-start h-auto py-4" asChild>
              <Link href="/admin/analytics">
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-accent" />
                  <div className="text-left">
                    <div className="font-bold text-white">Platform Analytics</div>
                    <div className="text-xs text-zinc-400">Revenue, users, trends</div>
                  </div>
                </div>
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="w-full justify-start h-auto py-4" asChild>
              <Link href="/admin/users">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  <div className="text-left">
                    <div className="font-bold text-white">User Management</div>
                    <div className="text-xs text-zinc-400">Customers & suppliers</div>
                  </div>
                </div>
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="w-full justify-start h-auto py-4" asChild>
              <Link href="/admin/listings/pending">
                <div className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-accent" />
                  <div className="text-left">
                    <div className="font-bold text-white">Listing Moderation</div>
                    <div className="text-xs text-zinc-400">Approve/reject vehicles</div>
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            {[
              { id: 1, type: "booking", text: "New booking: McLaren 720S by Michael Ross", time: "5 min ago", status: "success" },
              { id: 2, type: "supplier", text: "New supplier application: Premium Auto LLC", time: "1 hour ago", status: "pending" },
              { id: 3, type: "listing", text: "New listing submitted: Ferrari F8 Tributo", time: "2 hours ago", status: "pending" },
              { id: 4, type: "booking", text: "Booking completed: Porsche 911 Turbo S", time: "3 hours ago", status: "success" },
              { id: 5, type: "user", text: "New user registered: sarah.j@email.com", time: "5 hours ago", status: "success" },
            ].map((activity, index) => (
              <div key={activity.id}>
                <div className="flex items-center justify-between p-5 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      activity.status === "success" ? "bg-green-500" : "bg-orange-400"
                    )} />
                    <div className="flex-1">
                      <p className="text-sm text-white">{activity.text}</p>
                      <p className="text-xs text-zinc-500">{activity.time}</p>
                    </div>
                  </div>
                  <Badge variant="accent" className="text-xs">
                    {activity.status}
                  </Badge>
                </div>
                {index < 4 && <div className="h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
