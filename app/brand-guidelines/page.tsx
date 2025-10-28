"use client"

import { useState } from "react"
import { Copy, Download, Check, Sparkles, Palette, Type as TypeIcon, Layout, Zap, Eye, MessageCircle, ExternalLink, Heart, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BrandGuidelines() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">BRAND GUIDELINES V2.0 🔥</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
                <span className="text-white">Cartique</span>
                <br />
                <span className="bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent animate-gradient">
                  Brand System
                </span>
              </h1>

              <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-lg">
                Modern, dark, and premium design system for exotic car rentals. Glass morphism, animated gradients, and real imagery.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                >
                  <a href="/brand-assets.zip" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Assets
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <a href="https://figma.com/@cartique" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Figma
                  </a>
                </Button>
              </div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-8 flex items-center justify-center border border-white/10 shadow-2xl">
                <div className="text-7xl font-bold text-white tracking-tighter">C</div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent via-yellow-500 to-accent rounded-3xl p-8 flex items-center justify-center shadow-2xl shadow-accent/30">
                <div className="text-black text-7xl font-bold tracking-tighter">C</div>
              </div>
              <div className="aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center justify-center hover:bg-white/10 transition-all">
                <div className="text-white text-7xl font-bold tracking-tighter opacity-80">C</div>
              </div>
              <div className="aspect-square bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-zinc-600 text-7xl font-bold tracking-tighter">C</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Design Principles</h2>
          <p className="text-xl text-zinc-400 mb-12">What makes Cartique's design unique and fire</p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Eye,
                title: "Dark & Premium",
                desc: "Dark backgrounds (zinc-950/black) with glass morphism create an elevated luxury experience. White/5 opacity glass cards with backdrop blur.",
                code: "bg-white/5 backdrop-blur-xl"
              },
              {
                icon: Zap,
                title: "Animated Gradients",
                desc: "Gold-to-yellow animated gradients for headlines and CTAs add movement and premium feel. 3s infinite animation loop.",
                code: "from-accent via-yellow-500 to-accent animate-gradient"
              },
              {
                icon: Heart,
                title: "Real Imagery",
                desc: "High-quality Unsplash photos of actual luxury vehicles. McLaren, Ferrari, Lamborghini, Porsche - all real, all beautiful.",
                code: "images.unsplash.com"
              }
            ].map((principle, i) => (
              <div key={i} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-accent/50 transition-all group">
                <principle.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{principle.desc}</p>
                <code className="text-xs font-mono text-accent bg-black/50 px-3 py-2 rounded-xl inline-block">
                  {principle.code}
                </code>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Components", value: "50+", icon: Layout },
              { label: "Pages Built", value: "9", icon: Palette },
              { label: "Design Version", value: "2.0", icon: Sparkles },
              { label: "Vibe", value: "🔥", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="p-6 text-center bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-24 px-6 lg:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Color System</h2>
          <p className="text-xl text-zinc-400 mb-12">Dark theme with gold accents</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Zinc 950", hex: "#09090B", rgb: "9, 9, 11", usage: "Primary background, hero sections" },
              { name: "Black", hex: "#000000", rgb: "0, 0, 0", usage: "Deep backgrounds, overlays" },
              { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Text, card accents (low opacity)" },
              { name: "Luxe Gold", hex: "#D4AF37", rgb: "212, 175, 55", usage: "Primary accent, CTAs, highlights" },
            ].map((color, i) => (
              <div
                key={i}
                onClick={() => copyToClipboard(color.hex)}
                className="group cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-accent/50 transition-all"
              >
                <div
                  className="aspect-square relative"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                    {copiedText === color.hex ? (
                      <div className="flex items-center gap-2 text-white">
                        <Check className="w-5 h-5" />
                        <span className="font-semibold">Copied!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-white">
                        <Copy className="w-5 h-5" />
                        <span className="font-semibold">Copy</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white mb-2">{color.name}</h4>
                  <code className="text-sm font-mono text-accent block mb-3">{color.hex}</code>
                  <p className="text-xs text-zinc-500 leading-relaxed">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Glass effect colors */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Glass Morphism Palette</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Glass Light", value: "bg-white/5", desc: "Subtle glass cards" },
                { name: "Glass Medium", value: "bg-white/10", desc: "Hover states" },
                { name: "Glass Strong", value: "bg-white/20", desc: "Active elements" },
              ].map((glass, i) => (
                <div key={i} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className={`w-full h-24 ${glass.value} backdrop-blur-xl border border-white/10 rounded-xl mb-4`} />
                  <h4 className="font-bold text-white mb-2">{glass.name}</h4>
                  <code className="text-xs font-mono text-accent block mb-2">{glass.value}</code>
                  <p className="text-xs text-zinc-500">{glass.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Typography</h2>
          <p className="text-xl text-zinc-400 mb-12">Rubik - Bold and modern</p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-12">
            <div className="space-y-8">
              <div>
                <div className="text-xs font-bold text-zinc-500 mb-3 tracking-wider">DISPLAY - BOLD (700)</div>
                <div className="text-7xl font-bold text-white">Drive the Extraordinary</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 mb-3 tracking-wider">H1 - BOLD (700)</div>
                <div className="text-5xl font-bold text-white">Explore Vehicles</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 mb-3 tracking-wider">H2 - SEMIBOLD (600)</div>
                <div className="text-4xl font-semibold text-white">Featured Collection</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 mb-3 tracking-wider">BODY - REGULAR (400)</div>
                <div className="text-lg text-zinc-300">Experience Ferrari, Lamborghini, McLaren & Porsche from verified owners across 47 cities worldwide.</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500 mb-3 tracking-wider">SMALL - MEDIUM (500)</div>
                <div className="text-sm text-zinc-400">2023 • 4,200 mi • Beverly Hills, CA</div>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { size: "text-8xl (96px)", weight: "Bold (700)", use: "Hero headlines only" },
              { size: "text-7xl (72px)", weight: "Bold (700)", use: "Landing page titles" },
              { size: "text-5xl (48px)", weight: "Bold (700)", use: "Page headers" },
              { size: "text-4xl (36px)", weight: "Semibold (600)", use: "Section titles" },
              { size: "text-2xl (24px)", weight: "Semibold (600)", use: "Card titles" },
              { size: "text-lg (18px)", weight: "Regular (400)", use: "Body text, descriptions" },
            ].map((type, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex justify-between items-start mb-2">
                  <code className="text-sm font-mono text-accent">{type.size}</code>
                  <span className="text-xs text-zinc-500">{type.weight}</span>
                </div>
                <p className="text-xs text-zinc-400">{type.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-24 px-6 lg:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Component System</h2>
          <p className="text-xl text-zinc-400 mb-12">Glass cards, gradient buttons, and modern interactions</p>

          {/* Buttons */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Buttons</h3>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-bold text-zinc-500 mb-4 tracking-wider">PRIMARY - GOLD GRADIENT (DEFAULT)</div>
                  <div className="flex flex-wrap gap-4">
                    <Button>
                      Reserve Now
                    </Button>
                    <Button size="lg">
                      Search Vehicles
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 mb-4 tracking-wider">SECONDARY - GLASS (OUTLINE)</div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline">
                      View Details
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-500 mb-4 tracking-wider">TERTIARY - GHOST</div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="ghost">
                      Cancel
                    </Button>
                    <Button variant="ghost">
                      Skip
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Cards & Glass Effects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <Badge variant="accent" className="mb-4">Featured</Badge>
                <h4 className="text-2xl font-bold text-white mb-3">Glass Card</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Frosted glass effect with subtle border and backdrop blur. Elevates on hover.
                </p>
                <code className="text-xs font-mono text-accent bg-black/50 px-3 py-2 rounded-lg inline-block">
                  bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
                </code>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
                <h4 className="text-2xl font-bold text-white mb-3">Gradient Card</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Gradient background with glass overlay. Used for special sections or featured content.
                </p>
                <code className="text-xs font-mono text-accent bg-black/50 px-3 py-2 rounded-lg inline-block">
                  from-zinc-900/50 to-black/50 backdrop-blur-xl
                </code>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Badges & Pills</h3>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="flex flex-wrap gap-4">
                <Badge variant="accent" className="rounded-full px-4 py-2 flex items-center gap-2">
                  <Zap className="w-3 h-3 fill-current" />
                  Featured
                </Badge>
                <Badge variant="secondary" className="rounded-full px-4 py-2">Verified</Badge>
                <Badge variant="outline" className="rounded-full px-4 py-2 border-white/20 text-white">Available</Badge>
                <div className="px-4 py-2 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full">
                  NEW
                </div>
                <div className="px-4 py-2 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30">
                  SOLD OUT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Screens */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">Live Examples</h2>
          <p className="text-xl text-zinc-400 mb-12">See the design system in action</p>

          <div className="space-y-6">
            {[
              { page: "Landing Page", url: "/", desc: "Hero with animated gradients, glass search card, real car images" },
              { page: "Search Results", url: "/search", desc: "Dark theme, glass filters, modern car cards" },
              { page: "Listing Detail", url: "/listing/1", desc: "Image carousel, specs, sticky booking card" },
              { page: "Dashboard", url: "/dashboard", desc: "KPI tiles, saved cars, upcoming rentals" },
            ].map((example, i) => (
              <a
                key={i}
                href={example.url}
                className="block p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {example.page}
                    </h3>
                    <p className="text-sm text-zinc-400">{example.desc}</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-zinc-600 group-hover:text-accent transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6 lg:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">Cartique</div>
              <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                Brand guidelines v2.0 — Modern redesign with dark theme, glass morphism, and animated gradients.
                Updated October 23, 2025.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="/complete-screen-inventory.md" className="hover:text-accent transition-colors">
                    Screen Inventory (84 screens)
                  </a>
                </li>
                <li>
                  <a href="/BUILD_STATUS.md" className="hover:text-accent transition-colors">
                    Build Status
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-accent transition-colors">
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">
              © 2025 Cartique Inc. All rights reserved.
            </p>
            <p className="text-sm font-semibold text-white">
              Version 2.0 • Dark Theme Edition 🔥
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
