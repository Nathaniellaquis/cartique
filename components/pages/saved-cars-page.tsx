"use client"

import { useState } from "react"
import { Heart, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CarCard } from "@/components/cartique/car-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockCarListings } from "@/lib/mock-data"

export function SavedCarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  // Mock saved cars (in reality, this would come from user's saved list)
  const savedCars = mockCarListings.filter((car) => car.featured)

  const filteredCars = savedCars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-8 w-8 text-accent fill-accent" />
            <h1 className="text-4xl font-light">Saved Cars</h1>
          </div>
          <p className="text-muted-foreground">Your favorited vehicles ({savedCars.length})</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search saved cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently Saved</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cars Grid */}
        {sortedCars.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Heart className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">
                {searchQuery ? "No cars match your search" : "No saved cars yet"}
              </h2>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                {searchQuery
                  ? "Try adjusting your search to find what you're looking for"
                  : "Start saving your favorite cars by clicking the heart icon on any listing"}
              </p>
              {!searchQuery && (
                <Button asChild>
                  <Link href="/search">Browse Cars</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
