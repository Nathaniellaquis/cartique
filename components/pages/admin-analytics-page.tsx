"use client"

import { ChevronLeft, TrendingUp, TrendingDown, DollarSign, Users, Car, Calendar, ArrowUpRight, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function AdminAnalyticsPage() {
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Platform Analytics</h1>
            <p className="text-zinc-400">Revenue, growth, and performance metrics</p>
          </div>
          <Select defaultValue="30days">
            <SelectTrigger className="w-48 bg-white/5 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-white/10">
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <Badge variant="accent" className="text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18%
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-1">$47,230</div>
            <div className="text-xs text-zinc-400">Total Revenue</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <Badge variant="accent" className="text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15%
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-1">$7,084</div>
            <div className="text-xs text-zinc-400">Commission (15%)</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <Badge variant="accent" className="text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                +23%
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-1">156</div>
            <div className="text-xs text-zinc-400">Total Bookings</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <Badge variant="accent" className="text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12%
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white mb-1">$303</div>
            <div className="text-xs text-zinc-400">Avg Booking Value</div>
          </div>
        </div>

        {/* Revenue Chart Mockup */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Revenue Over Time</h2>
            <Badge variant="accent" className="text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18% vs previous period
            </Badge>
          </div>

          {/* Simple bar chart mockup */}
          <div className="flex items-end justify-between gap-2 h-64">
            {[42, 55, 48, 67, 72, 58, 78, 85, 92, 88, 95, 103].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-accent to-yellow-500 rounded-t-xl hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ height: `${(value / 103) * 100}%` }}
                />
                <div className="text-xs text-zinc-500">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* User Growth */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">User Growth</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-bold text-white">New Customers</div>
                    <div className="text-xs text-zinc-400">This month</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">127</div>
                  <div className="text-xs text-green-400">+24%</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-bold text-white">New Suppliers</div>
                    <div className="text-xs text-zinc-400">This month</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-xs text-green-400">+33%</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-bold text-white">New Listings</div>
                    <div className="text-xs text-zinc-400">This month</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">23</div>
                  <div className="text-xs text-green-400">+15%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Suppliers */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Top Suppliers</h3>
            <div className="space-y-4">
              {[
                { rank: 1, name: "John Smith", earnings: "$8,450", bookings: 23 },
                { rank: 2, name: "Maria Garcia", earnings: "$6,230", bookings: 18 },
                { rank: 3, name: "David Chen", earnings: "$5,120", bookings: 15 },
              ].map((supplier) => (
                <div key={supplier.rank} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-black">
                      {supplier.rank}
                    </div>
                    <div>
                      <div className="font-bold text-white">{supplier.name}</div>
                      <div className="text-xs text-zinc-400">{supplier.bookings} bookings</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-accent">{supplier.earnings}</div>
                    <div className="text-xs text-zinc-500">revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">94%</div>
            <div className="text-xs text-zinc-400">Booking Success Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">4.8</div>
            <div className="text-xs text-zinc-400">Avg Supplier Rating</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">2.3</div>
            <div className="text-xs text-zinc-400">Avg Rental Days</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center">
            <div className="text-3xl font-bold text-white mb-1">87%</div>
            <div className="text-xs text-zinc-400">Customer Retention</div>
          </div>
        </div>
      </div>
    </div>
  )
}
