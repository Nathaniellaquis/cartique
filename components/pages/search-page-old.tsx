"use client"

import { useState } from "react"
import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { CarCard } from "@/components/cartique/car-card"
import { mockCarListings, makes, categories } from "@/lib/mock-data"

export function SearchPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Mock filter - in real app this would filter the data
  const filteredCars = mockCarListings

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

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={50}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-semibold mb-4">Brand</h3>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {makes.map((make) => (
            <div key={make} className="flex items-center gap-2">
              <Checkbox
                id={`brand-${make}`}
                checked={selectedBrands.includes(make)}
                onCheckedChange={() => toggleBrand(make)}
              />
              <Label htmlFor={`brand-${make}`} className="cursor-pointer font-normal">
                {make}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`category-${category}`} className="cursor-pointer font-normal">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="ghost"
        onClick={clearFilters}
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="border-b border-border bg-background sticky top-16 z-40">
        <div className="mx-auto max-w-[1920px] px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium">
              {filteredCars.length} cars found in Los Angeles, CA
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
                <div className="sticky bottom-0 bg-background pt-4 pb-4 border-t border-border mt-6">
                  <Button
                    variant="gold"
                    className="w-full"
                    onClick={() => setMobileFilterOpen(false)}
                  >
                    Apply Filters ({filteredCars.length})
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <Select defaultValue="recommended">
              <SelectTrigger className="w-48 hidden sm:flex">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-[1920px] px-6 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-36 border-r border-border pr-8">
              <FilterContent />
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronDown className="h-4 w-4 rotate-90" />
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="icon">
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
