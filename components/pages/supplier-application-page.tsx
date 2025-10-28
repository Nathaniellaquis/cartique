"use client"

import { useState } from "react"
import { ChevronLeft, Check, Upload, AlertCircle, Shield, FileText, Building } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export function SupplierApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [processing, setProcessing] = useState(false)

  // Form state
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [taxId, setTaxId] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [aboutBusiness, setAboutBusiness] = useState("")
  const [yearsInBusiness, setYearsInBusiness] = useState("")
  const [numberOfVehicles, setNumberOfVehicles] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [routingNumber, setRoutingNumber] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const steps = [
    { number: 1, title: "Business Info", description: "Company details" },
    { number: 2, title: "Verification", description: "Documents" },
    { number: 3, title: "Payment", description: "Bank info" },
  ]

  const handleNext = () => {
    if (currentStep === 3) {
      handleSubmit()
    } else {
      setCurrentStep(currentStep + 1)
    }
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
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/10 bg-zinc-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">Become a Supplier</h1>
            <p className="text-xl text-zinc-400">
              Join Cartique's exclusive marketplace and rent your luxury vehicles to vetted customers worldwide.
            </p>
          </div>

          {/* Progress Stepper */}
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

      {/* Form */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          {/* Step 1: Business Info */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Business Information</h2>
                <p className="text-zinc-400">Tell us about your luxury car rental business.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="business-name" className="text-white">Business Name *</Label>
                    <Input
                      id="business-name"
                      type="text"
                      placeholder="Elite Auto Rentals LLC"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="business-type" className="text-white">Business Type *</Label>
                    <Input
                      id="business-type"
                      type="text"
                      placeholder="LLC, Corporation, etc."
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="tax-id" className="text-white">Tax ID / EIN *</Label>
                    <Input
                      id="tax-id"
                      type="text"
                      placeholder="XX-XXXXXXX"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Business Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-white">Business Address *</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="123 Main Street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-white">City *</Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Los Angeles"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-white">State *</Label>
                    <Input
                      id="state"
                      type="text"
                      placeholder="CA"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip" className="text-white">ZIP *</Label>
                    <Input
                      id="zip"
                      type="text"
                      placeholder="90210"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="about" className="text-white">About Your Business *</Label>
                  <Textarea
                    id="about"
                    placeholder="Tell us about your luxury car rental business, your experience, and what makes your fleet special..."
                    value={aboutBusiness}
                    onChange={(e) => setAboutBusiness(e.target.value)}
                    className="mt-2 min-h-[120px] bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="years" className="text-white">Years in Business *</Label>
                    <Input
                      id="years"
                      type="number"
                      placeholder="5"
                      value={yearsInBusiness}
                      onChange={(e) => setYearsInBusiness(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehicles" className="text-white">Number of Vehicles *</Label>
                    <Input
                      id="vehicles"
                      type="number"
                      placeholder="10"
                      value={numberOfVehicles}
                      onChange={(e) => setNumberOfVehicles(e.target.value)}
                      className="mt-2 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Verification */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Verification Documents</h2>
                <p className="text-zinc-400">Upload required documents to verify your business.</p>
              </div>

              <div className="space-y-6">
                {/* Business License */}
                <div>
                  <Label className="text-white">Business License *</Label>
                  <div className="mt-2 border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-accent/50 transition-all cursor-pointer bg-white/5">
                    <Upload className="h-10 w-10 text-zinc-500 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-white mb-1">Upload Business License</p>
                    <p className="text-xs text-zinc-500">PDF, JPG, or PNG (Max 5MB)</p>
                  </div>
                </div>

                {/* Insurance Certificate */}
                <div>
                  <Label className="text-white">Insurance Certificate *</Label>
                  <div className="mt-2 border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-accent/50 transition-all cursor-pointer bg-white/5">
                    <Upload className="h-10 w-10 text-zinc-500 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-white mb-1">Upload Insurance Certificate</p>
                    <p className="text-xs text-zinc-500">Must include liability coverage</p>
                  </div>
                </div>

                {/* ID Verification */}
                <div>
                  <Label className="text-white">Owner ID *</Label>
                  <div className="mt-2 border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-accent/50 transition-all cursor-pointer bg-white/5">
                    <Upload className="h-10 w-10 text-zinc-500 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-white mb-1">Upload Driver's License or Passport</p>
                    <p className="text-xs text-zinc-500">For identity verification</p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {/* Info Box */}
                <div className="p-5 bg-accent/10 border border-accent/30 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Secure Verification</p>
                      <p className="text-sm text-zinc-300">
                        All documents are encrypted and reviewed by our verification team within 24-48 hours. Your information is never shared with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Payment Information</h2>
                <p className="text-zinc-400">Where should we send your rental payments?</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="bank-account" className="text-white">Bank Account Number *</Label>
                  <Input
                    id="bank-account"
                    type="text"
                    placeholder="XXXXXXXXXX"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="routing" className="text-white">Routing Number *</Label>
                  <Input
                    id="routing"
                    type="text"
                    placeholder="XXXXXXXXX"
                    value={routingNumber}
                    onChange={(e) => setRoutingNumber(e.target.value)}
                    className="mt-2 bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div className="h-px bg-white/10" />

                {/* Info Box */}
                <div className="p-5 bg-white/10 border border-white/20 rounded-2xl">
                  <h4 className="font-bold text-white mb-2">Payment Schedule</h4>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Payments processed within 24 hours of rental completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Cartique takes 15% commission on each booking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Free insurance coverage for all rentals</span>
                    </li>
                  </ul>
                </div>

                <div className="h-px bg-white/10" />

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="supplier-terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  />
                  <Label htmlFor="supplier-terms" className="text-sm cursor-pointer leading-relaxed text-zinc-300">
                    I agree to the{" "}
                    <Link href="/supplier/terms" className="text-accent hover:underline">Supplier Terms & Conditions</Link>
                    {" "}and acknowledge the 15% platform commission on all bookings.
                  </Label>
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
              disabled={currentStep === 3 && !agreedToTerms}
              className={currentStep === 1 ? "ml-auto" : ""}
            >
              {processing ? "Processing..." : currentStep === 3 ? "Submit Application" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
