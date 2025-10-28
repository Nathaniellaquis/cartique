"use client"

import { useState } from "react"
import { ChevronLeft, Upload, Plus, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories, makes } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function SupplierCreateListingPage() {
  const [processing, setProcessing] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  // Form state
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [deposit, setDeposit] = useState("")
  const [offerDelivery, setOfferDelivery] = useState(false)
  const [deliveryFee, setDeliveryFee] = useState("")
  const [deliveryRadius, setDeliveryRadius] = useState("")
  const [mileage, setMileage] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  // Specs
  const [engine, setEngine] = useState("")
  const [horsepower, setHorsepower] = useState("")
  const [transmission, setTransmission] = useState("")
  const [drivetrain, setDrivetrain] = useState("")

  const availableFeatures = [
    "GPS Navigation",
    "Bluetooth Audio",
    "Premium Sound System",
    "Backup Camera",
    "Parking Sensors",
    "Heated Seats",
    "Ventilated Seats",
    "Sunroof/Moonroof",
    "Leather Interior",
    "Carbon Fiber Trim",
    "Sport Exhaust",
    "Track Mode",
  ]

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    )
  }

  const handleSubmit = async () => {
    setProcessing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    window.location.href = "/supplier/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      {/* Header */}
      <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            href="/supplier/dashboard"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-3">Create New Listing</h1>
          <p className="text-xl text-zinc-400">Add a new vehicle to your inventory</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="space-y-8">
            {/* Photos */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Photos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center hover:border-accent/50 transition-all cursor-pointer bg-white/5">
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
                      <p className="text-xs text-zinc-500">Upload</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-500 mt-2">Add at least 5 high-quality photos. First photo will be the main image.</p>
            </div>

            <div className="h-px bg-white/10" />

            {/* Basic Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Vehicle Information</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="make" className="text-white">Make *</Label>
                    <Select value={make} onValueChange={setMake}>
                      <SelectTrigger className="mt-2 bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10">
                        {makes.map((m) => (
                          <SelectItem key={m} value={m}>{m}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="model" className="text-white">Model *</Label>
                    <Input
                      id="model"
                      type="text"
                      placeholder="720S Performance"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="year" className="text-white">Year *</Label>
                    <Input
                      id="year"
                      type="number"
                      placeholder="2024"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="category" className="text-white">Category *</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="mt-2 bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10">
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mileage" className="text-white">Mileage *</Label>
                    <Input
                      id="mileage"
                      type="number"
                      placeholder="4200"
                      value={mileage}
                      onChange={(e) => setMileage(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-white">Location *</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Beverly Hills, CA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-white">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your vehicle, its condition, and what makes it special..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-2 min-h-[120px] bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Specs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="engine" className="text-white">Engine</Label>
                  <Input
                    id="engine"
                    type="text"
                    placeholder="4.0L Twin-Turbo V8"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="horsepower" className="text-white">Horsepower</Label>
                  <Input
                    id="horsepower"
                    type="number"
                    placeholder="710"
                    value={horsepower}
                    onChange={(e) => setHorsepower(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="transmission" className="text-white">Transmission</Label>
                  <Input
                    id="transmission"
                    type="text"
                    placeholder="7-Speed Dual-Clutch"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="drivetrain" className="text-white">Drivetrain</Label>
                  <Input
                    id="drivetrain"
                    type="text"
                    placeholder="RWD"
                    value={drivetrain}
                    onChange={(e) => setDrivetrain(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableFeatures.map((feature) => (
                  <div
                    key={feature}
                    onClick={() => toggleFeature(feature)}
                    className={cn(
                      "p-4 rounded-2xl border-2 cursor-pointer transition-all",
                      selectedFeatures.includes(feature)
                        ? "border-accent bg-accent/10"
                        : "border-white/10 hover:border-white/20 bg-white/5"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedFeatures.includes(feature)}
                        onCheckedChange={() => toggleFeature(feature)}
                      />
                      <span className="text-sm font-medium text-white">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Pricing & Deposit</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="price" className="text-white">Daily Rate (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="1495"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                  <p className="text-xs text-zinc-500 mt-1">
                    Cartique takes 15% commission. You'll receive ${price ? Math.round(Number(price) * 0.85) : '—'} per day.
                  </p>
                </div>

                <div>
                  <Label htmlFor="deposit" className="text-white">Security Deposit (USD)</Label>
                  <Input
                    id="deposit"
                    type="number"
                    placeholder="5000"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                  <p className="text-xs text-zinc-500 mt-1">
                    Optional. Held as authorization on renter's card, refunded after successful return. Recommended: $3,000-$10,000.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Delivery Options */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Delivery & Pickup (Optional)</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="offerDelivery"
                    checked={offerDelivery}
                    onCheckedChange={(checked) => setOfferDelivery(checked as boolean)}
                    className="border-white/20"
                  />
                  <Label htmlFor="offerDelivery" className="text-white cursor-pointer">
                    I offer delivery and pickup service
                  </Label>
                </div>

                {offerDelivery && (
                  <div className="pl-8 space-y-4 border-l-2 border-accent/30">
                    <div>
                      <Label htmlFor="deliveryFee" className="text-white">Base Delivery Fee (USD)</Label>
                      <Input
                        id="deliveryFee"
                        type="number"
                        placeholder="150"
                        value={deliveryFee}
                        onChange={(e) => setDeliveryFee(e.target.value)}
                        className="mt-2 bg-white/5 border-white/20 text-white"
                      />
                      <p className="text-xs text-zinc-500 mt-1">
                        Starting price for delivery within your service area
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="deliveryRadius" className="text-white">Maximum Delivery Distance (miles)</Label>
                      <Input
                        id="deliveryRadius"
                        type="number"
                        placeholder="50"
                        value={deliveryRadius}
                        onChange={(e) => setDeliveryRadius(e.target.value)}
                        className="mt-2 bg-white/5 border-white/20 text-white"
                      />
                      <p className="text-xs text-zinc-500 mt-1">
                        How far from your location will you deliver? Price may increase with distance.
                      </p>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                      <p className="text-sm text-zinc-300">
                        <strong className="text-accent">Tip:</strong> Many renters prefer delivery to hotels, airports, or their location. Offering this service can increase your bookings by up to 40%.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
            <Button variant="outline" asChild>
              <Link href="/supplier/dashboard">
                Cancel
              </Link>
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={handleSubmit}
            >
              {processing ? "Creating Listing..." : "Create Listing"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
