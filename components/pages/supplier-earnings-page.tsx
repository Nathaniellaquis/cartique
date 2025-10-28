"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, Calendar, Download, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const earningsData = {
  totalEarnings: 45280,
  thisMonth: 8950,
  lastMonth: 7340,
  pendingPayouts: 2150,
  nextPayout: "Nov 15, 2025",
  payoutHistory: [
    { id: "PAY-001", date: "Oct 15, 2025", amount: 7340, status: "completed" as const },
    { id: "PAY-002", date: "Sep 15, 2025", amount: 6890, status: "completed" as const },
    { id: "PAY-003", date: "Aug 15, 2025", amount: 5420, status: "completed" as const },
    { id: "PAY-004", date: "Jul 15, 2025", amount: 4380, status: "completed" as const },
  ],
  recentBookings: [
    { id: "BK-12345", date: "Oct 25", car: "McLaren 720S", earnings: 1495, days: 1 },
    { id: "BK-12344", date: "Oct 20", car: "Porsche 911 Turbo S", earnings: 3750, days: 3 },
    { id: "BK-12343", date: "Oct 15", car: "McLaren 720S", earnings: 2990, days: 2 },
  ],
}

export function SupplierEarningsPage() {
  const [timePeriod, setTimePeriod] = useState("month")
  const monthlyGrowth = ((earningsData.thisMonth - earningsData.lastMonth) / earningsData.lastMonth * 100).toFixed(1)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-light mb-2">Earnings</h1>
            <p className="text-muted-foreground">Track your revenue and payouts</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Earnings</CardDescription>
              <CardTitle className="text-3xl">${earningsData.totalEarnings.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-3xl">${earningsData.thisMonth.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">+{monthlyGrowth}%</span>
                <span className="text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending Payout</CardDescription>
              <CardTitle className="text-3xl">${earningsData.pendingPayouts.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Ready for withdrawal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Next Payout</CardDescription>
              <CardTitle className="text-xl">{earningsData.nextPayout}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">Request Early Payout</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Earnings Chart Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>Your revenue over time</CardDescription>
                </div>
                <Select value={timePeriod} onValueChange={setTimePeriod}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Last 7 days</SelectItem>
                    <SelectItem value="month">Last 30 days</SelectItem>
                    <SelectItem value="quarter">Last 3 months</SelectItem>
                    <SelectItem value="year">Last 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {/* Chart would go here - using placeholder */}
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Earnings chart visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Latest completed rentals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {earningsData.recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{booking.car}</p>
                    <p className="text-xs text-muted-foreground">{booking.date} · {booking.days}d</p>
                  </div>
                  <p className="font-semibold ml-2">${booking.earnings}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Payout History */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Payout History</CardTitle>
            <CardDescription>Your past payments and transfers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {earningsData.payoutHistory.map((payout) => (
                <div
                  key={payout.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">{payout.id}</p>
                      <p className="text-sm text-muted-foreground">{payout.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">${payout.amount.toLocaleString()}</p>
                    <p className="text-sm text-green-500">Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payout Method */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Payout Method</CardTitle>
            <CardDescription>Where your earnings are sent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                  <span className="font-bold">••••</span>
                </div>
                <div>
                  <p className="font-medium">Bank Account</p>
                  <p className="text-sm text-muted-foreground">•••• •••• •••• 4242</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Change</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
