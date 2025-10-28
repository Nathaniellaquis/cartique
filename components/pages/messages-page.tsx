"use client"

import { useState } from "react"
import { Send, Search, MoreVertical, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { mockSuppliers, mockCarListings } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

type Thread = {
  id: string
  supplierId: string
  carId: string
  lastMessage: string
  timestamp: string
  unread: boolean
}

type Message = {
  id: string
  from: "customer" | "supplier"
  text: string
  timestamp: string
}

export function MessagesPage() {
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null)
  const [messageText, setMessageText] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock threads
  const threads: Thread[] = [
    {
      id: "1",
      supplierId: "sup-1",
      carId: "1",
      lastMessage: "Thanks for your interest! The car is available for your dates.",
      timestamp: "2h ago",
      unread: true
    },
    {
      id: "2",
      supplierId: "sup-2",
      carId: "2",
      lastMessage: "I can offer a discount for bookings over 5 days.",
      timestamp: "1d ago",
      unread: true
    },
    {
      id: "3",
      supplierId: "sup-3",
      carId: "3",
      lastMessage: "The vehicle is in excellent condition.",
      timestamp: "3d ago",
      unread: false
    }
  ]

  // Mock messages for selected thread
  const messages: Message[] = selectedThreadId ? [
    {
      id: "1",
      from: "customer",
      text: "Hi! I'm interested in renting this car for a weekend trip. Is it available from Nov 1-4?",
      timestamp: "2 days ago"
    },
    {
      id: "2",
      from: "supplier",
      text: "Hello! Yes, the McLaren 720S is available for those dates. It's a fantastic choice for a weekend drive!",
      timestamp: "2 days ago"
    },
    {
      id: "3",
      from: "customer",
      text: "Great! Can you tell me more about the insurance options?",
      timestamp: "2 days ago"
    },
    {
      id: "4",
      from: "supplier",
      text: "Of course! We offer three levels:\n\n• Basic (free) - Covers major damage\n• Standard ($89) - All damage covered\n• Premium ($149) - Zero deductible\n\nI'd recommend at least Standard for peace of mind.",
      timestamp: "2 days ago"
    },
    {
      id: "5",
      from: "customer",
      text: "Thanks! I'll go with the Standard option. Where should I pick up the car?",
      timestamp: "1 day ago"
    },
    {
      id: "6",
      from: "supplier",
      text: "Thanks for your interest! The car is available for your dates. I can meet you at your hotel in Beverly Hills, or you can come to my garage. Whatever works best for you!",
      timestamp: "2h ago"
    }
  ] : []

  const selectedThread = threads.find(t => t.id === selectedThreadId)
  const supplier = selectedThread ? mockSuppliers.find(s => s.id === selectedThread.supplierId) : null
  const car = selectedThread ? mockCarListings.find(c => c.id === selectedThread.carId) : null
  const carImageUrl = car ? carImages[car.id] || carImages["1"] : ""

  const handleSendMessage = () => {
    if (!messageText.trim()) return
    console.log("Sending message:", messageText)
    setMessageText("")
  }

  const filteredThreads = threads.filter(thread => {
    if (!searchQuery) return true
    const supplier = mockSuppliers.find(s => s.id === thread.supplierId)
    const car = mockCarListings.find(c => c.id === thread.carId)
    return (
      supplier?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car?.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 pt-20">
      <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 py-6 flex gap-6">
        {/* Thread List (Left Column) */}
        <div className={cn(
          "w-full lg:w-96 flex-shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col overflow-hidden",
          selectedThreadId && "hidden lg:flex"
        )}>
          {/* Search Header */}
          <div className="p-6 border-b border-white/10">
            <h1 className="text-3xl font-bold text-white mb-4">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white"
              />
            </div>
          </div>

          {/* Thread List */}
          <div className="flex-1 overflow-y-auto">
            {filteredThreads.length > 0 ? (
              filteredThreads.map(thread => {
                const threadSupplier = mockSuppliers.find(s => s.id === thread.supplierId)
                const threadCar = mockCarListings.find(c => c.id === thread.carId)
                const threadCarImage = threadCar ? carImages[threadCar.id] || carImages["1"] : ""

                return (
                  <button
                    key={thread.id}
                    onClick={() => setSelectedThreadId(thread.id)}
                    className={cn(
                      "w-full p-4 border-b border-white/10 text-left hover:bg-white/5 transition-colors",
                      selectedThreadId === thread.id && "bg-white/10 border-l-4 border-l-accent"
                    )}
                  >
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-black flex-shrink-0">
                        {threadSupplier?.name.charAt(0) || "?"}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-sm text-white truncate">{threadSupplier?.name}</h3>
                          <span className="text-xs text-zinc-500 flex-shrink-0">{thread.timestamp}</span>
                        </div>
                        <p className="text-sm text-zinc-400 truncate mb-1">{threadCar?.name}</p>
                        <p className="text-sm text-zinc-500 truncate">{thread.lastMessage}</p>
                      </div>

                      {thread.unread && (
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      )}
                    </div>
                  </button>
                )
              })
            ) : (
              <div className="p-8 text-center text-zinc-400">
                <p>No conversations found</p>
              </div>
            )}
          </div>
        </div>

        {/* Chat Window (Right Column) */}
        {selectedThreadId && supplier && car ? (
          <div className={cn(
            "flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col overflow-hidden",
            "w-full lg:w-auto"
          )}>
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={() => setSelectedThreadId(null)}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xl font-bold text-black">
                {supplier.name.charAt(0)}
              </div>

              <div className="flex-1">
                <h2 className="font-bold text-white">{supplier.name}</h2>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span>{car.name}</span>
                  <span>•</span>
                  <span>{car.location}</span>
                </div>
              </div>

              <Link href={`/listing/${car.id}`}>
                <Button variant="outline" size="sm">
                  View Listing
                </Button>
              </Link>

              <Button variant="ghost" size="icon" className="text-white">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Date Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-zinc-500">Today</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.from === "customer" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl px-5 py-3",
                      message.from === "customer"
                        ? "bg-accent"
                        : "bg-white/10 backdrop-blur-xl border border-white/10 text-white"
                    )}
                  >
                    <p className={cn(
                      "text-sm whitespace-pre-wrap",
                      message.from === "customer" ? "text-black" : "text-white"
                    )}>{message.text}</p>
                    <p className="text-xs mt-1 text-black/60">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-white/10">
              <div className="flex gap-3">
                <Textarea
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  className="min-h-[48px] max-h-[120px] resize-none bg-white/5 border-white/20 text-white"
                />
                <Button
                  variant="default"
                  size="icon"
                  className="h-12 w-12 flex-shrink-0"
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl items-center justify-center text-center p-8">
            <div>
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Send className="h-12 w-12 text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No conversation selected</h3>
              <p className="text-zinc-400">
                Select a conversation from the list to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
