"use client"

import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CarCard } from "@/components/cartique/car-card"
import { mockCarListings, categories, makes } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function HomePage() {
  const featuredCars = mockCarListings.filter((car) => car.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-charcoal text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-32 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight">
            Drive the Extraordinary
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Ferrari. Lamborghini. McLaren. Porsche. Book exotic supercars from verified owners in 47 cities.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Location */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Where?"
                    className="pl-10 text-foreground"
                  />
                </div>

                {/* Dates */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="date"
                    placeholder="Start Date"
                    className="pl-10 text-foreground"
                  />
                </div>

                {/* Brand */}
                <Select>
                  <SelectTrigger className="text-foreground">
                    <SelectValue placeholder="Any Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    {makes.map((make) => (
                      <SelectItem key={make} value={make.toLowerCase()}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full mt-4 sm:mt-6"
                asChild
              >
                <Link href="/search">
                  <span>Search</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Chips */}
      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-lg border-2 border-border bg-background text-sm font-medium transition-all",
                  "hover:border-accent hover:shadow-sm"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl sm:text-5xl font-light">Featured Vehicles</h2>
            <Link
              href="/search"
              className="text-accent font-semibold hover:underline hidden sm:block"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Button variant="outline" size="lg" asChild>
              <Link href="/search">View All Cars</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-4xl sm:text-5xl font-light text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse & Book</h3>
              <p className="text-muted-foreground">
                Search for your dream car, select your dates, and reserve instantly with verified suppliers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meet & Drive</h3>
              <p className="text-muted-foreground">
                Pick up the keys from the owner, inspect the vehicle, and hit the road in style.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Return & Review</h3>
              <p className="text-muted-foreground">
                Return the car on time, leave a review, and share your unforgettable experience.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-y border-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">287</div>
              <div className="text-sm text-muted-foreground">Exotic Cars</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">47</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">12K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
