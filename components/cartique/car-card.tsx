"use client"

import { Heart, MapPin, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { CarListing } from "@/lib/mock-data"

interface CarCardProps {
  car: CarListing
  className?: string
}

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format", // McLaren
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format", // Ferrari
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format", // Lamborghini
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format", // Porsche
}

export function CarCard({ car, className }: CarCardProps) {
  const [saved, setSaved] = useState(false)
  const imageUrl = carImages[car.id] || carImages["1"]

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-zinc-900/50 backdrop-blur border border-white/10 transition-all duration-300",
        className
      )}
    >
      <Link href={`/listing/${car.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={car.name}
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

          {/* Featured Badge */}

          {car.featured && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-accent/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Zap className="w-3.5 h-3.5 text-black fill-black" />
              <span className="text-xs font-bold text-black">FEATURED</span>
            </div>
          )}

          {/* Save Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setSaved(!saved)
            }}
            className={cn(
              "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all",
              "hover:bg-white/10 active:scale-95",
              saved && "bg-red-500/90 border-red-500/50"
            )}
            aria-label={saved ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("w-5 h-5 transition-all text-white", saved && "fill-current")} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/listing/${car.id}`}>
          <h3 className="text-xl font-bold text-white mb-2">
            {car.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
          <span>{car.year}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <span>{car.mileage.toLocaleString()} mi</span>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{car.city}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-white">${car.price}</div>
            <div className="text-xs text-zinc-500 font-medium">per day</div>
          </div>
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link href={`/listing/${car.id}`}>
              View
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
