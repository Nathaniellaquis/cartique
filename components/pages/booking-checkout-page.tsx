"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ChevronLeft, Check, CreditCard, Lock, Shield, AlertCircle, Upload } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { mockCarListings } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

// Map car IDs to real Unsplash images
const carImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200&auto=format",
  "2": "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format",
  "3": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format",
  "4": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format",
}

export function BookingCheckoutPage() {
  const searchParams = useSearchParams()
  const carId = searchParams.get("car")
  const startDate = searchParams.get("start")
  const endDate = searchParams.get("end")

  const [currentStep, setCurrentStep] = useState(1)
  const [processing, setProcessing] = useState(false)

  // Form state
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [insurance, setInsurance] = useState("standard")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvv, setCardCvv] = useState("")

  const car = carId ? mockCarListings.find(c => c.id === carId) : null
  const imageUrl = car ? carImages[car.id] || carImages["1"] : ""

  if (!car || !startDate || !endDate) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Invalid booking</h1>
          <Button asChild>
            <Link href="/search">Back to Search</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Calculate booking details
  const days = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))
  const subtotal = car.price * days
  const serviceFee = Math.round(subtotal * 0.1)

  const insurancePrices = {
    basic: 0,
    standard: 89,
    premium: 149
  }
  const insuranceCost = insurancePrices[insurance as keyof typeof insurancePrices]
  const total = subtotal + serviceFee + insuranceCost

  const steps = [
    { number: 1, title: "Details", description: "Trip info" },
    { number: 2, title: "Payment", description: "Billing info" },
    { number: 3, title: "Confirm", description: "Review" },
  ]

  const handleNext = () => {
    if (currentStep === 3) {
      handleConfirm()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleConfirm = async () => {
    setProcessing(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    // Redirect to confirmation
    window.location.href = `/booking/confirmation/BK-${Date.now()}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      {/* Header */}
      <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            href={`/listing/${car.id}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Listing
          </Link>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="border-b border-white/10 bg-zinc-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all",
                      step.number < currentStep && "bg-accent border-accent text-black",
                      step.number === currentStep && "bg-accent border-accent text-black",
                      step.number > currentStep && "border-white/20 text-zinc-600"
                    )}
                  >
                    {step.number < currentStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <div className={cn(
                      "text-sm font-semibold",
                      step.number <= currentStep ? "text-white" : "text-zinc-600"
                    )}>{step.title}</div>
                    <div className="text-xs text-zinc-500 hidden sm:block">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "h-0.5 flex-1 mx-4 transition-all rounded",
                    step.number < currentStep ? "bg-accent" : "bg-white/10"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              {/* Step 1: Details */}
              {currentStep === 1 && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Trip Details</h2>
                    <p className="text-sm sm:text-base text-zinc-400">Provide your contact information and any special requests.</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 bg-white/5 border-white/20 text-white"
                      />
                      <p className="text-xs text-zinc-500 mt-1">
                        We'll send your booking confirmation here
                      </p>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Driver Verification */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Driver Verification Required</h3>
                      <div className="space-y-4">
                        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                          <p className="text-sm text-zinc-300">
                            <strong className="text-accent">Important:</strong> All renters must provide a valid driver's license and proof of insurance in your name. These will be verified before pickup.
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="licenseNumber" className="text-white">Driver's License Number *</Label>
                          <Input
                            id="licenseNumber"
                            type="text"
                            placeholder="D1234567"
                            className="mt-2 bg-white/5 border-white/20 text-white"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="licenseState" className="text-white">Issuing State *</Label>
                            <Input
                              id="licenseState"
                              type="text"
                              placeholder="California"
                              className="mt-2 bg-white/5 border-white/20 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="licenseExpiry" className="text-white">Expiration Date *</Label>
                            <Input
                              id="licenseExpiry"
                              type="date"
                              className="mt-2 bg-white/5 border-white/20 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-white">Upload Driver's License *</Label>
                          <div className="mt-2 border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-accent/50 transition-all cursor-pointer">
                            <Upload className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
                            <p className="text-sm text-zinc-400">Click to upload (front & back)</p>
                            <p className="text-xs text-zinc-600 mt-1">JPG, PNG or PDF - Max 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Personal Insurance */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Your Personal Auto Insurance</h3>
                      <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <p className="text-sm text-zinc-300 mb-3">
                            You must have valid personal auto insurance under your name. Please provide your insurance information.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="insuranceProvider" className="text-white">Insurance Provider *</Label>
                            <Input
                              id="insuranceProvider"
                              type="text"
                              placeholder="e.g., State Farm, Geico"
                              className="mt-2 bg-white/5 border-white/20 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="policyNumber" className="text-white">Policy Number *</Label>
                            <Input
                              id="policyNumber"
                              type="text"
                              placeholder="POL-123456789"
                              className="mt-2 bg-white/5 border-white/20 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-white">Upload Insurance Card *</Label>
                          <div className="mt-2 border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-accent/50 transition-all cursor-pointer">
                            <Upload className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
                            <p className="text-sm text-zinc-400">Click to upload proof of insurance</p>
                            <p className="text-xs text-zinc-600 mt-1">JPG, PNG or PDF - Max 5MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <Label htmlFor="requests" className="text-white">Special Requests (Optional)</Label>
                      <Textarea
                        id="requests"
                        placeholder="Any special requirements or questions for the supplier..."
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="mt-2 min-h-[100px] bg-white/5 border-white/20 text-white"
                      />
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Insurance Selection */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Select Insurance Coverage</h3>
                      <RadioGroup value={insurance} onValueChange={setInsurance}>
                        <div className="space-y-3">
                          {[
                            { value: "basic", name: "Basic (Free)", description: "Covers major damage and theft", price: 0 },
                            { value: "standard", name: "Standard", description: "Covers all damage, reduced deductible", price: 89 },
                            { value: "premium", name: "Premium", description: "Zero deductible, roadside assistance", price: 149 },
                          ].map((option) => (
                            <div key={option.value} className={cn(
                              "p-5 cursor-pointer transition-all border-2 rounded-2xl",
                              insurance === option.value
                                ? "border-accent bg-accent/10"
                                : "border-white/10 hover:border-white/20 bg-white/5"
                            )}>
                              <div className="flex items-start gap-4">
                                <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                                <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-white">{option.name}</span>
                                    {option.price > 0 && (
                                      <span className="font-bold text-accent">${option.price}</span>
                                    )}
                                  </div>
                                  <p className="text-sm text-zinc-400">{option.description}</p>
                                </Label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                      />
                      <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed text-zinc-300">
                        I agree to the{" "}
                        <Link href="/terms" className="text-accent hover:underline">Terms & Conditions</Link>
                        {" "}and{" "}
                        <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Payment Information</h2>
                    <p className="text-zinc-400">Your card will not be charged until the booking is confirmed.</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="card-number" className="text-white">Card Number *</Label>
                      <div className="relative mt-2">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                        <Input
                          id="card-number"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="pl-10 bg-white/5 border-white/20 text-white"
                          maxLength={19}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="card-name" className="text-white">Cardholder Name *</Label>
                      <Input
                        id="card-name"
                        type="text"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="mt-2 bg-white/5 border-white/20 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="card-expiry" className="text-white">Expiry Date *</Label>
                        <Input
                          id="card-expiry"
                          type="text"
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="mt-2 bg-white/5 border-white/20 text-white"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="card-cvv" className="text-white">CVV *</Label>
                        <Input
                          id="card-cvv"
                          type="text"
                          placeholder="123"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="mt-2 bg-white/5 border-white/20 text-white"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Security Badges */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        <span>SSL Encrypted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>Verified by Visa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>Mastercard SecureCode</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Review & Confirm</h2>
                    <p className="text-zinc-400">Please review your booking details before confirming.</p>
                  </div>

                  <div className="space-y-6">
                    {/* Trip Summary */}
                    <div>
                      <h3 className="font-bold text-white mb-4">Trip Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Dates</span>
                          <span className="font-medium text-white">{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Duration</span>
                          <span className="font-medium text-white">{days} days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Insurance</span>
                          <span className="font-medium text-white capitalize">{insurance}</span>
                        </div>
                        {phone && (
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Phone</span>
                            <span className="font-medium text-white">{phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-bold text-white mb-4">Payment Method</h3>
                      <div className="flex items-center gap-3 text-sm text-white">
                        <CreditCard className="h-5 w-5" />
                        <span>•••• •••• •••• {cardNumber.slice(-4)}</span>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    {/* Important Note */}
                    <div className="p-5 bg-accent/10 border border-accent/30 rounded-2xl">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-white mb-1">Important</p>
                          <p className="text-sm text-zinc-300">
                            You will not be charged until the supplier confirms your booking. You can cancel for free up to 24 hours before pickup.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                )}
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleNext}
                  disabled={currentStep === 1 && !agreedToTerms}
                  className={`w-full sm:w-auto ${currentStep === 1 ? "sm:ml-auto" : ""}`}
                >
                  {processing ? "Processing..." : currentStep === 3 ? "Confirm & Pay" : "Continue"}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h3 className="font-bold text-white mb-6">Booking Summary</h3>

              {/* Car Info */}
              <div className="mb-6">
                <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imageUrl}
                    alt={car.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-white mb-1">{car.name}</h4>
                <p className="text-sm text-zinc-400">{car.location}</p>
              </div>

              <div className="h-px bg-white/10 my-6" />

              {/* Dates */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">START</div>
                  <div className="text-sm font-semibold text-white">{new Date(startDate).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-1">END</div>
                  <div className="text-sm font-semibold text-white">{new Date(endDate).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</div>
                </div>
              </div>

              <div className="h-px bg-white/10 my-6" />

              {/* Price Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">${car.price} × {days} days</span>
                  <span className="font-medium text-white">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Service fee</span>
                  <span className="font-medium text-white">${serviceFee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Insurance ({insurance})</span>
                  <span className="font-medium text-white">${insuranceCost}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between">
                  <span className="font-bold text-lg text-white">Total</span>
                  <span className="font-bold text-xl text-accent">${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
