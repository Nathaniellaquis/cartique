import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const footerLinks = {
    product: [
      { label: "Browse Cars", href: "/search" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Insurance", href: "/insurance" },
      { label: "List Your Car", href: "/supplier/apply" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" },
    ],
    legal: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Supplier Agreement", href: "/supplier-agreement" },
    ],
  }

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/cartique-white.png"
                alt="Cartique"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-base text-zinc-400 mb-6 leading-relaxed max-w-sm">
              Drive the extraordinary. Rent exotic supercars from verified owners in 47 cities worldwide.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Get Updates</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 h-11"
                />
                <Button variant="outline" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-bold text-white text-sm mb-5">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-white text-sm mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-white text-sm mb-5">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Access Sections */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* For Suppliers */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-bold text-white mb-3">For Suppliers</h3>
              <p className="text-sm text-zinc-400 mb-4">
                List your exotic vehicles and earn money
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/supplier/apply"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/supplier/dashboard"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/supplier/listings/create"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Add Listing
                </Link>
                <Link
                  href="/supplier/bookings"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Bookings
                </Link>
                <Link
                  href="/supplier/earnings"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Earnings
                </Link>
                <Link
                  href="/supplier/calendar"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Calendar
                </Link>
              </div>
            </div>

            {/* For Admins */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-bold text-white mb-3">For Admins</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Platform management and oversight
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/admin/dashboard"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/suppliers/pending"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Suppliers
                </Link>
                <Link
                  href="/admin/listings/pending"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Listings
                </Link>
                <Link
                  href="/admin/users"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Users
                </Link>
                <Link
                  href="/admin/analytics"
                  className="text-sm text-zinc-400 hover:text-accent transition-colors"
                >
                  Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500">
            © 2025 Cartique Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
