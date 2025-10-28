"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CarCard } from "@/components/cartique/car-card"
import { mockCarListings, makes, categories } from "@/lib/mock-data"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

interface CategorySection {
  id: string
  title: string
  subtitle: string
  cars: typeof mockCarListings
}

export function SearchPage() {
  const [viewMode, setViewMode] = useState<'browse' | 'filtered'>('browse')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Airbnb-style category sections
  const categorySections: CategorySection[] = [
    {
      id: "featured",
      title: "Featured Exotics",
      subtitle: `${mockCarListings.filter(c => c.featured).length} vehicles available`,
      cars: mockCarListings.filter(c => c.featured)
    },
    {
      id: "supercars",
      title: "Supercars",
      subtitle: `${mockCarListings.length} vehicles available`,
      cars: mockCarListings
    },
    {
      id: "luxury-sedans",
      title: "Luxury Sedans",
      subtitle: `${mockCarListings.length} vehicles available`,
      cars: mockCarListings
    },
    {
      id: "convertibles",
      title: "Convertibles",
      subtitle: `${mockCarListings.length} vehicles available`,
      cars: mockCarListings
    },
  ]

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 5000])
    setSelectedBrands([])
    setSelectedCategories([])
  }

  const viewCategory = (categoryId: string) => {
    setActiveCategory(categoryId)
    setViewMode('filtered')
  }

  const filteredCars = mockCarListings

  const scrollContainer = (direction: 'left' | 'right', containerId: string) => {
    const container = document.getElementById(containerId)
    if (container) {
      const scrollAmount = 400
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={50}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Brand</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {makes.map((make) => (
            <div key={make} className="flex items-center gap-3">
              <Checkbox
                id={`brand-${make}`}
                checked={selectedBrands.includes(make)}
                onCheckedChange={() => toggleBrand(make)}
                className="border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
              />
              <Label
                htmlFor={`brand-${make}`}
                className="cursor-pointer font-normal text-zinc-300 hover:text-white transition-colors"
              >
                {make}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-3">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
                className="border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
              />
              <Label
                htmlFor={`category-${category}`}
                className="cursor-pointer font-normal text-zinc-300 hover:text-white transition-colors"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        onClick={clearFilters}
        variant="ghost"
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  )

  // If in filtered view, show the classic search layout
  if (viewMode === 'filtered') {
    const currentSection = categorySections.find(s => s.id === activeCategory)

    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        {/* Header */}
        <div className="border-b border-white/10 bg-zinc-950/50 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <button
                  onClick={() => setViewMode('browse')}
                  className="text-sm text-accent hover:text-yellow-400 mb-2 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Browse
                </button>
                <h1 className="text-3xl font-bold text-white mb-2">{currentSection?.title}</h1>
                <p className="text-sm text-zinc-400">{filteredCars.length} vehicles available</p>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md bg-zinc-950 border-l border-white/10">
                    <SheetHeader>
                      <SheetTitle className="text-white">Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                      <FilterContent />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent border-t border-white/10">
                      <Button size="lg" className="w-full" onClick={() => setMobileFilterOpen(false)}>
                        Show {filteredCars.length} Results
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-48 bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 rounded-2xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Filters
                    </h2>
                    {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-accent hover:text-yellow-400 transition-colors"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  <FilterContent />
                </div>
              </div>
            </aside>

            {/* Results Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Load More Vehicles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-8">
      <div className="mx-auto max-w-[1600px] px-6 space-y-16">
        {/* Airbnb-style Category Sections */}
        {categorySections.map((section) => (
          <div key={section.id} className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => viewCategory(section.id)}
                className="group flex items-center gap-3 cursor-pointer"
              >
                <h2 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                  {section.title}
                </h2>
                <ChevronRight className="w-6 h-6 text-white group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </button>

              {/* Navigation Arrows */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => scrollContainer('left', `scroll-${section.id}`)}
                  className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => scrollContainer('right', `scroll-${section.id}`)}
                  className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrolling Cards */}
            <div
              id={`scroll-${section.id}`}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {section.cars.map((car) => (
                <div key={car.id} className="flex-shrink-0 w-[300px]">
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
