"use client"

import { useState } from "react"
import { ChevronLeft, Upload, Trash2, Eye } from "lucide-react"
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { categories, makes, mockCarListings } from "@/lib/mock-data"

export function SupplierEditListingPage({ listingId }: { listingId: string }) {
  const listing = mockCarListings.find((car) => car.id === listingId)
  const [processing, setProcessing] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(listing?.features || [])

  // Form state (pre-filled with existing data)
  const [make, setMake] = useState(listing?.make || "")
  const [model, setModel] = useState(listing?.model || "")
  const [year, setYear] = useState(listing?.year.toString() || "")
  const [category, setCategory] = useState(listing?.category || "")
  const [price, setPrice] = useState(listing?.price.toString() || "")
  const [deposit, setDeposit] = useState("5000") // Mock default
  const [offerDelivery, setOfferDelivery] = useState(false)
  const [deliveryFee, setDeliveryFee] = useState("")
  const [deliveryRadius, setDeliveryRadius] = useState("")
  const [mileage, setMileage] = useState(listing?.mileage.toString() || "")
  const [location, setLocation] = useState(listing?.location || "")
  const [description, setDescription] = useState(listing?.description || "")

  // Specs
  const [engine, setEngine] = useState(listing?.specs.engine || "")
  const [horsepower, setHorsepower] = useState(listing?.specs.horsepower.toString() || "")
  const [transmission, setTransmission] = useState(listing?.specs.transmission || "")
  const [drivetrain, setDrivetrain] = useState(listing?.specs.drivetrain || "")

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
    "Ceramic Brakes",
    "Adaptive Suspension",
    "Premium Audio",
  ]

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    )
  }

  const handleSave = async () => {
    setProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    window.location.href = "/supplier/dashboard"
  }

  const handleDelete = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    window.location.href = "/supplier/dashboard"
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Listing Not Found</h1>
          <p className="text-muted-foreground mb-4">The listing you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/supplier/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/supplier/dashboard"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/listing/${listingId}`} className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </Link>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete Listing
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Listing</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete "{listing.name}"? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-light mb-3">Edit Listing</h1>
          <p className="text-xl text-muted-foreground">Update your vehicle details</p>
        </div>

        <div className="bg-card border rounded-xl p-8">
          <div className="space-y-8">
            {/* Photos */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Photos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {listing.images.map((img, i) => (
                  <div key={i} className="aspect-square border rounded-lg overflow-hidden relative group">
                    <img
                      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400"
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center hover:border-accent transition-all cursor-pointer bg-muted/50">
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Add Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="make">Make</Label>
                  <Select value={make} onValueChange={setMake}>
                    <SelectTrigger id="make">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {makes.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" value={model} onChange={(e) => setModel(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Daily Rate ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="deposit">Security Deposit ($)</Label>
                  <Input
                    id="deposit"
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                    placeholder="5000"
                  />
                  <p className="text-sm text-muted-foreground mt-1">Optional authorization hold</p>
                </div>
                <div>
                  <Label htmlFor="mileage">Mileage</Label>
                  <Input
                    id="mileage"
                    type="number"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="engine">Engine</Label>
                  <Input
                    id="engine"
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    placeholder="e.g., 4.0L Twin-Turbo V8"
                  />
                </div>
                <div>
                  <Label htmlFor="horsepower">Horsepower</Label>
                  <Input
                    id="horsepower"
                    type="number"
                    value={horsepower}
                    onChange={(e) => setHorsepower(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="transmission">Transmission</Label>
                  <Input
                    id="transmission"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    placeholder="e.g., 7-Speed Dual-Clutch"
                  />
                </div>
                <div>
                  <Label htmlFor="drivetrain">Drivetrain</Label>
                  <Select value={drivetrain} onValueChange={setDrivetrain}>
                    <SelectTrigger id="drivetrain">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="RWD">RWD</SelectItem>
                      <SelectItem value="AWD">AWD</SelectItem>
                      <SelectItem value="FWD">FWD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Checkbox
                      id={feature}
                      checked={selectedFeatures.includes(feature)}
                      onCheckedChange={() => toggleFeature(feature)}
                    />
                    <Label htmlFor={feature} className="cursor-pointer text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Description</h3>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Describe your vehicle in detail..."
              />
            </div>

            {/* Delivery Options */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Delivery & Pickup (Optional)</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="offerDelivery"
                    checked={offerDelivery}
                    onCheckedChange={(checked) => setOfferDelivery(checked as boolean)}
                  />
                  <Label htmlFor="offerDelivery" className="cursor-pointer">
                    I offer delivery and pickup service
                  </Label>
                </div>

                {offerDelivery && (
                  <div className="pl-8 space-y-4 border-l-2 border-accent">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deliveryFee">Base Delivery Fee ($)</Label>
                        <Input
                          id="deliveryFee"
                          type="number"
                          placeholder="150"
                          value={deliveryFee}
                          onChange={(e) => setDeliveryFee(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryRadius">Max Distance (miles)</Label>
                        <Input
                          id="deliveryRadius"
                          type="number"
                          placeholder="50"
                          value={deliveryRadius}
                          onChange={(e) => setDeliveryRadius(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} disabled={processing} size="lg">
                {processing ? "Saving..." : "Save Changes"}
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/supplier/dashboard">Cancel</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
