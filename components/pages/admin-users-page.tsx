"use client"

import { useState } from "react"
import { ChevronLeft, Search, MoreVertical, Shield, Ban, Mail, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

type User = {
  id: string
  name: string
  email: string
  phone: string
  role: "customer" | "supplier"
  status: "active" | "suspended" | "pending"
  joinedDate: string
  bookings: number
  listings?: number
}

export function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const users: User[] = [
    {
      id: "1",
      name: "Michael Ross",
      email: "michael.ross@email.com",
      phone: "+1 (555) 123-4567",
      role: "customer",
      status: "active",
      joinedDate: "2024-03-15",
      bookings: 12
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 234-5678",
      role: "customer",
      status: "active",
      joinedDate: "2024-06-20",
      bookings: 5
    },
    {
      id: "3",
      name: "John Smith",
      email: "john@premiumauto.com",
      phone: "+1 (310) 555-0123",
      role: "supplier",
      status: "active",
      joinedDate: "2023-11-10",
      bookings: 0,
      listings: 8
    },
    {
      id: "4",
      name: "Maria Garcia",
      email: "maria@elitemotors.com",
      phone: "+1 (305) 555-0456",
      role: "supplier",
      status: "active",
      joinedDate: "2024-01-05",
      bookings: 0,
      listings: 5
    },
    {
      id: "5",
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "+1 (555) 345-6789",
      role: "customer",
      status: "suspended",
      joinedDate: "2024-08-12",
      bookings: 2
    },
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = filterRole === "all" || user.role === filterRole
    return matchesSearch && matchesRole
  })

  const selected = selectedId ? users.find(u => u.id === selectedId) : null

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
            <h1 className="text-5xl font-bold text-white mb-2">User Management</h1>
            <p className="text-zinc-400">{filteredUsers.length} total users</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/20 text-white"
            />
          </div>
          <Select value={filterRole} onValueChange={setFilterRole}>
            <SelectTrigger className="w-48 bg-white/5 border-white/20 text-white">
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-white/10">
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="customer">Customers</SelectItem>
              <SelectItem value="supplier">Suppliers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* User Table */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left p-4 text-xs font-bold text-zinc-400 uppercase">User</th>
                  <th className="text-left p-4 text-xs font-bold text-zinc-400 uppercase">Role</th>
                  <th className="text-left p-4 text-xs font-bold text-zinc-400 uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-bold text-zinc-400 uppercase">Joined</th>
                  <th className="text-left p-4 text-xs font-bold text-zinc-400 uppercase">Activity</th>
                  <th className="text-right p-4 text-xs font-bold text-zinc-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={cn(
                      "border-b border-white/10 hover:bg-white/5 transition-colors",
                      index === filteredUsers.length - 1 && "border-b-0"
                    )}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-black">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{user.name}</div>
                          <div className="text-xs text-zinc-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant={user.role === "supplier" ? "gold" : "outline"} className="text-xs">
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant={user.status === "active" ? "success" : user.status === "suspended" ? "destructive" : "outline"}
                        className="text-xs"
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-zinc-300">
                        {new Date(user.joinedDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-zinc-300">
                        {user.role === "customer" ? `${user.bookings} bookings` : `${user.listings} listings`}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="icon" className="text-zinc-400">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
