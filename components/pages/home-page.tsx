"use client"

import { ArrowRight, Calendar, MapPin, Sparkles, Shield, Star, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CarCard } from "@/components/cartique/car-card"
import { mockCarListings, categories } from "@/lib/mock-data"

export function HomePage() {
  const featuredCars = mockCarListings.filter((car) => car.featured)

  return (
    <div className="min-h-screen -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background - Racing Car */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2400&auto=format"
            alt="Luxury Sports Cars"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-40">
          {/* Top badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-2xl">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Premium Exotic Car Rentals</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-white mb-2">
                Drive the
              </span>
              <span className="block text-accent">
                Extraordinary
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Experience <span className="text-white font-medium">Ferrari</span>, <span className="text-white font-medium">Lamborghini</span>, <span className="text-white font-medium">McLaren</span> & <span className="text-white font-medium">Porsche</span> from verified owners
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 sm:gap-4">
                {/* Location */}
                <div className="lg:col-span-2 space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-zinc-400 ml-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-accent z-10" />
                    <Input
                      placeholder="Los Angeles, CA"
                      className="h-12 sm:h-14 pl-10 sm:pl-12 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 rounded-2xl focus:bg-white/10 focus:border-accent/50 transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Start Date */}
                <div className="lg:col-span-2 space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-zinc-400 ml-1">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-accent z-10" />
                    <Input
                      type="date"
                      className="h-12 sm:h-14 pl-10 sm:pl-12 bg-white/5 border-white/10 text-white rounded-2xl focus:bg-white/10 focus:border-accent/50 transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* End Date */}
                <div className="lg:col-span-2 space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-zinc-400 ml-1">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-accent z-10" />
                    <Input
                      type="date"
                      className="h-12 sm:h-14 pl-10 sm:pl-12 bg-white/5 border-white/10 text-white rounded-2xl focus:bg-white/10 focus:border-accent/50 transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="lg:col-span-1 flex items-end">
                  <Button
                    size="lg"
                    className="h-12 sm:h-14 w-full text-sm sm:text-base"
                    asChild
                  >
                    <Link href="/search">
                      <span>Search</span>
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm px-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
                <span>Verified Owners</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
              <div className="flex items-center gap-2 text-zinc-400">
                <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
              <div className="flex items-center gap-2 text-zinc-400">
                <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-accent" />
                <span>12K+ Rentals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 bg-zinc-950 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-full text-xs sm:text-sm font-medium text-white transition-all hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Featured Collection</h2>
              <p className="text-sm sm:text-base text-zinc-400">Hand-picked luxury vehicles</p>
            </div>
            <Link
              href="/search"
              className="hidden md:flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center md:hidden">
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/search">
                View All Vehicles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-zinc-950 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: "287+", label: "Exotic Cars" },
              { value: "47", label: "Cities" },
              { value: "4.9/5", label: "Rating" },
              { value: "12K+", label: "Happy Renters" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
