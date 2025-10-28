"use client"

import { Menu, Search, User, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Browse", href: "/search" },
    { label: "List Your Car", href: "/supplier/apply" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur-2xl">
      <div className="mx-auto h-full max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/cartique-white.png"
            alt="Cartique"
            className="h-8 w-auto group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
            asChild
          >
            <Link href="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <Link href="/dashboard">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-zinc-950 border-l border-white/10">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 rounded-2xl transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <Link
                  href="/dashboard"
                  className="px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 rounded-2xl transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="h-5 w-5 inline mr-3" />
                  Profile
                </Link>
                <Button
                  size="lg"
                  className="mt-4"
                  onClick={() => setMobileOpen(false)}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
