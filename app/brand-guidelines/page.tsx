"use client";

import { useState } from "react";
import { Copy, Download, Check, ChevronRight, Sparkles, Palette, Type as TypeIcon, Layout, Zap, Eye, MessageCircle, ExternalLink, FileDown, Link2, Share2 } from "lucide-react";

export default function BrandGuidelines() {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-[#E5E5E5] dark:border-[#1A1A1A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <img src="/cartique-black.png" alt="Cartique" className="h-6 dark:hidden" />
                            <img src="/cartique-white.png" alt="Cartique" className="h-6 hidden dark:block" />
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                            <a href="#logo" className="hover:text-[#D4AF37] transition-colors">Logo</a>
                            <a href="#colors" className="hover:text-[#D4AF37] transition-colors">Colors</a>
                            <a href="#typography" className="hover:text-[#D4AF37] transition-colors">Typography</a>
                            <a href="#components" className="hover:text-[#D4AF37] transition-colors">Components</a>
                            <a href="#voice" className="hover:text-[#D4AF37] transition-colors">Voice</a>
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                            <FileDown className="w-4 h-4" />
                            Download
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6">
                                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span className="text-xs font-semibold text-[#D4AF37] tracking-wide">BRAND GUIDELINES v1.0</span>
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-[0.95]">
                                Cartique<br />
                                <span className="font-normal">Brand System</span>
                            </h1>
                            <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed mb-8 max-w-lg">
                                Complete brand identity system for Cartique—the luxury automotive marketplace connecting discerning drivers with exclusive vehicles worldwide.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="/brand-assets.zip"
                                    download
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-all"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Assets
                                </a>
                                <a
                                    href="https://figma.com/@cartique"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5E5E5] dark:border-[#1A1A1A] rounded-lg font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                                >
                                    Open Figma
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-gradient-to-br from-black to-[#1a1a1a] rounded-xl p-8 flex items-center justify-center shadow-xl">
                                <img src="/cartique-white.png" alt="Logo" className="w-full h-auto opacity-90" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-[#D4AF37] via-[#C9A632] to-[#B8941F] rounded-xl p-8 flex items-center justify-center shadow-xl">
                                <div className="text-white text-7xl font-bold tracking-tighter">C</div>
                            </div>
                            <div className="aspect-square border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-8 flex items-center justify-center bg-white dark:bg-black">
                                <img src="/cartique-black.png" alt="Logo" className="w-full h-auto dark:hidden" />
                                <img src="/cartique-white.png" alt="Logo" className="w-full h-auto hidden dark:block" />
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/10 dark:to-white/5 rounded-xl p-8 flex items-center justify-center shadow-inner">
                                <div className="text-black dark:text-white text-7xl font-bold tracking-tighter opacity-20">C</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 px-6 lg:px-12 border-y border-[#E5E5E5] dark:border-[#1A1A1A] bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Palette, label: "Primary Colors", value: "4", desc: "Black, White, Charcoal, Gold" },
                            { icon: TypeIcon, label: "Typeface", value: "Rubik", desc: "Google Fonts, 5 weights" },
                            { icon: Layout, label: "Grid System", value: "8px", desc: "Base unit spacing" },
                            { icon: Zap, label: "Components", value: "32", desc: "Ready-to-use elements" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <stat.icon className="w-6 h-6 mx-auto mb-3 text-[#D4AF37]" />
                                <div className="text-3xl font-semibold mb-1">{stat.value}</div>
                                <div className="text-sm font-medium mb-1">{stat.label}</div>
                                <div className="text-xs text-black/60 dark:text-white/60">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Logo Section */}
            <section id="logo" className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E5E5E5] dark:border-[#1A1A1A] mb-4">
                            <div className="w-1.5 h-1.5 rounded-lg bg-[#D4AF37]" />
                            <span className="text-xs font-bold tracking-wider">01 — LOGO SYSTEM</span>
                        </div>
                        <h2 className="text-5xl font-semibold mb-6">Logo Usage</h2>
                        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                            The Cartique wordmark is our primary brand identifier. Available in PNG (8192×2048px), SVG, and EPS formats for all applications.
                        </p>
                    </div>

                    {/* Logo Download Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all">
                            <div className="bg-white h-80 flex items-center justify-center p-12 border-b-2 border-black/10">
                                <img src="/cartique-black.png" alt="Cartique Logo Black" className="h-24 w-auto" />
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-white/[0.02]">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-lg">Black Wordmark</h3>
                                        <p className="text-sm text-black/60 dark:text-white/60">For light backgrounds</p>
                                    </div>
                                    <a
                                        href="/cartique-black.png"
                                        download
                                        className="p-2.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors border border-black/10"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="px-3 py-2 bg-white dark:bg-black rounded border border-black/10">
                                        <div className="font-semibold mb-0.5">Format</div>
                                        <div className="text-black/60 dark:text-white/60">PNG, SVG, EPS</div>
                                    </div>
                                    <div className="px-3 py-2 bg-white dark:bg-black rounded border border-black/10">
                                        <div className="font-semibold mb-0.5">Size</div>
                                        <div className="text-black/60 dark:text-white/60">8192 × 2048px</div>
                                    </div>
                                    <div className="px-3 py-2 bg-white dark:bg-black rounded border border-black/10">
                                        <div className="font-semibold mb-0.5">Min Width</div>
                                        <div className="text-black/60 dark:text-white/60">120px / 25mm</div>
                                    </div>
                                    <div className="px-3 py-2 bg-white dark:bg-black rounded border border-black/10">
                                        <div className="font-semibold mb-0.5">Color</div>
                                        <div className="text-black/60 dark:text-white/60">#000000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-[#404040] rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all">
                            <div className="bg-black h-80 flex items-center justify-center p-12 border-b-2 border-[#404040]">
                                <img src="/cartique-white.png" alt="Cartique Logo White" className="h-24 w-auto" />
                            </div>
                            <div className="p-6 bg-black/50">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-lg text-white">White Wordmark</h3>
                                        <p className="text-sm text-white/60">For dark backgrounds</p>
                                    </div>
                                    <a
                                        href="/cartique-white.png"
                                        download
                                        className="p-2.5 hover:bg-white/5 rounded-lg transition-colors border border-[#404040]"
                                    >
                                        <Download className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="px-3 py-2 bg-white/5 rounded border border-[#404040]">
                                        <div className="font-semibold mb-0.5 text-white">Format</div>
                                        <div className="text-white/60">PNG, SVG, EPS</div>
                                    </div>
                                    <div className="px-3 py-2 bg-white/5 rounded border border-[#404040]">
                                        <div className="font-semibold mb-0.5 text-white">Size</div>
                                        <div className="text-white/60">8192 × 2048px</div>
                                    </div>
                                    <div className="px-3 py-2 bg-white/5 rounded border border-[#404040]">
                                        <div className="font-semibold mb-0.5 text-white">Min Width</div>
                                        <div className="text-white/60">120px / 25mm</div>
                                    </div>
                                    <div className="px-3 py-2 bg-white/5 rounded border border-[#404040]">
                                        <div className="font-semibold mb-0.5 text-white">Color</div>
                                        <div className="text-white/60">#FFFFFF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo Rules */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-6">
                            <div className="mb-4">
                                <div className="relative w-full h-24 border-2 border-dashed border-[#D4AF37]/40 rounded-lg flex items-center justify-center">
                                    <div className="text-xl font-semibold tracking-tight">CARTIQUE</div>
                                    <div className="absolute -inset-3 border-4 border-[#D4AF37]/20 rounded-lg pointer-events-none" />
                                </div>
                            </div>
                            <h4 className="font-semibold mb-2 text-lg">Clearspace: X-height</h4>
                            <p className="text-sm text-black/60 dark:text-white/60">
                                Maintain clearspace equal to the x-height (lowercase letter height) on all four sides. Never place text, graphics, or edges closer than this.
                            </p>
                        </div>

                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-6">
                            <div className="mb-4">
                                <div className="w-full h-24 flex items-center justify-center gap-3">
                                    <div className="text-xs font-semibold border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded px-2 py-1">120px</div>
                                    <ChevronRight className="w-4 h-4" />
                                    <div className="text-xl font-semibold tracking-tight">CARTIQUE</div>
                                </div>
                            </div>
                            <h4 className="font-semibold mb-2 text-lg">Minimum Size</h4>
                            <p className="text-sm text-black/60 dark:text-white/60">
                                <strong>Digital:</strong> 120px minimum width<br />
                                <strong>Print:</strong> 25mm minimum width<br />
                                Smaller sizes compromise legibility.
                            </p>
                        </div>

                        <div className="border-2 border-red-500/20 bg-red-500/5 rounded-xl p-6">
                            <div className="mb-4">
                                <div className="w-full h-24 flex items-center justify-center relative">
                                    <div className="text-xl font-semibold tracking-tight scale-x-150 opacity-40 blur-[0.5px]">CARTIQUE</div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-lg bg-red-500/10 border-2 border-red-500 flex items-center justify-center">
                                            <span className="text-red-500 text-2xl font-bold">✕</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="font-semibold mb-2 text-lg text-red-700 dark:text-red-400">Never Distort</h4>
                            <p className="text-sm text-black/60 dark:text-white/60">
                                Never stretch, squash, rotate, skew, or modify the logo proportions. Always scale proportionally. No effects, outlines, or shadows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors Section */}
            <section id="colors" className="py-24 px-6 lg:px-12 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E5E5E5] dark:border-[#1A1A1A] mb-4">
                            <div className="w-1.5 h-1.5 rounded-lg bg-[#D4AF37]" />
                            <span className="text-xs font-bold tracking-wider">02 — COLOR SYSTEM</span>
                        </div>
                        <h2 className="text-5xl font-semibold mb-6">Color Palette</h2>
                        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                            Four primary brand colors with complete specifications. All colors tested for WCAG AA accessibility compliance at 4.5:1 contrast ratio minimum.
                        </p>
                    </div>

                    {/* Primary Colors */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-8">Primary Brand Colors</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                {
                                    name: "Cartique Black",
                                    hex: "#000000",
                                    rgb: "0, 0, 0",
                                    hsl: "0°, 0%, 0%",
                                    cmyk: "75, 68, 67, 90",
                                    usage: "Primary buttons, headings, body text, icons",
                                    contrast: "21:1 on white"
                                },
                                {
                                    name: "Pure White",
                                    hex: "#FFFFFF",
                                    rgb: "255, 255, 255",
                                    hsl: "0°, 0%, 100%",
                                    cmyk: "0, 0, 0, 0",
                                    usage: "Page backgrounds, card surfaces, button text",
                                    contrast: "21:1 on black"
                                },
                                {
                                    name: "Charcoal",
                                    hex: "#1A1A1A",
                                    rgb: "26, 26, 26",
                                    hsl: "0°, 0%, 10%",
                                    cmyk: "0, 0, 0, 90",
                                    usage: "Dark mode backgrounds, secondary surfaces",
                                    contrast: "18.5:1 on white"
                                },
                                {
                                    name: "Luxe Gold",
                                    hex: "#D4AF37",
                                    rgb: "212, 175, 55",
                                    hsl: "46°, 65%, 52%",
                                    cmyk: "0, 17, 74, 17",
                                    usage: "Accent color, CTAs, premium features, badges",
                                    contrast: "5.8:1 on black"
                                },
                            ].map((color, i) => (
                                <div
                                    key={i}
                                    onClick={() => copyToClipboard(color.hex)}
                                    className="group cursor-pointer border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all"
                                >
                                    <div
                                        className="aspect-square relative overflow-hidden"
                                        style={{ backgroundColor: color.hex }}
                                    >
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-2">
                                                {copiedText === color.hex ? (
                                                    <>
                                                        <Check className="w-4 h-4 text-green-600" />
                                                        <span className="text-sm font-semibold text-black dark:text-white">Copied!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        <span className="text-sm font-semibold text-black dark:text-white">Copy HEX</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 space-y-3 bg-white dark:bg-black">
                                        <h4 className="font-semibold text-lg">{color.name}</h4>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold text-black/40 dark:text-white/40 w-12">HEX</span>
                                                <code className="text-xs font-mono font-semibold bg-[#F5F5F5] dark:bg-[#1A1A1A] px-2 py-1 rounded">{color.hex}</code>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold text-black/40 dark:text-white/40 w-12">RGB</span>
                                                <code className="text-xs font-mono text-black/60 dark:text-white/60">{color.rgb}</code>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold text-black/40 dark:text-white/40 w-12">HSL</span>
                                                <code className="text-xs font-mono text-black/60 dark:text-white/60">{color.hsl}</code>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold text-black/40 dark:text-white/40 w-12">CMYK</span>
                                                <code className="text-xs font-mono text-black/60 dark:text-white/60">{color.cmyk}</code>
                                            </div>
                                        </div>
                                        <div className="pt-2 border-t border-[#E5E5E5] dark:border-[#1A1A1A]">
                                            <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed mb-2">
                                                <strong className="text-black dark:text-white">Usage:</strong> {color.usage}
                                            </p>
                                            <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                                                ✓ {color.contrast} contrast
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Neutral Grays */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-8">Neutral Gray Scale</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                { name: "Gray 50", hex: "#FAFAFA", usage: "Subtle backgrounds" },
                                { name: "Gray 100", hex: "#F5F5F5", usage: "Card backgrounds" },
                                { name: "Gray 200", hex: "#E5E5E5", usage: "Borders, dividers" },
                                { name: "Gray 500", hex: "#737373", usage: "Secondary text" },
                                { name: "Gray 700", hex: "#404040", usage: "Icons, labels" },
                            ].map((gray, i) => (
                                <div
                                    key={i}
                                    onClick={() => copyToClipboard(gray.hex)}
                                    className="group cursor-pointer border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all"
                                >
                                    <div
                                        className="aspect-square"
                                        style={{ backgroundColor: gray.hex }}
                                    />
                                    <div className="p-3 bg-white dark:bg-black">
                                        <div className="text-sm font-semibold mb-1">{gray.name}</div>
                                        <code className="text-xs font-mono text-black/60 dark:text-white/60 block mb-2">{gray.hex}</code>
                                        <p className="text-xs text-black/50 dark:text-white/50">{gray.usage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Color Application */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-8">
                            <h4 className="text-xl font-semibold mb-6">Light Mode Application</h4>
                            <div className="space-y-4">
                                {[
                                    { token: "--background", label: "Background", value: "#FFFFFF" },
                                    { token: "--foreground", label: "Text Primary", value: "#000000" },
                                    { token: "--muted-foreground", label: "Text Secondary", value: "#737373" },
                                    { token: "--border", label: "Borders", value: "#E5E5E5" },
                                    { token: "--accent", label: "Accent/Highlight", value: "#D4AF37" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0">
                                        <div>
                                            <span className="text-sm font-medium">{item.label}</span>
                                            <code className="block text-xs font-mono text-black/40 mt-0.5">{item.token}</code>
                                        </div>
                                        <code className="text-sm font-mono font-semibold">{item.value}</code>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-2 border-[#404040] rounded-xl p-8 bg-black text-white">
                            <h4 className="text-xl font-semibold mb-6">Dark Mode Application</h4>
                            <div className="space-y-4">
                                {[
                                    { token: "--background", label: "Background", value: "#000000" },
                                    { token: "--foreground", label: "Text Primary", value: "#FFFFFF" },
                                    { token: "--muted-foreground", label: "Text Secondary", value: "#A3A3A3" },
                                    { token: "--border", label: "Borders", value: "#1A1A1A" },
                                    { token: "--accent", label: "Accent/Highlight", value: "#D4AF37" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-3 border-b border-[#404040] last:border-0">
                                        <div>
                                            <span className="text-sm font-medium">{item.label}</span>
                                            <code className="block text-xs font-mono text-white/40 mt-0.5">{item.token}</code>
                                        </div>
                                        <code className="text-sm font-mono font-semibold">{item.value}</code>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section id="typography" className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E5E5E5] dark:border-[#1A1A1A] mb-4">
                            <div className="w-1.5 h-1.5 rounded-lg bg-[#D4AF37]" />
                            <span className="text-xs font-bold tracking-wider">03 — TYPOGRAPHY</span>
                        </div>
                        <h2 className="text-5xl font-semibold mb-6">Typography System</h2>
                        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                            Rubik from Google Fonts serves as our exclusive typeface. Modern, geometric, and optimized for web rendering at all sizes and weights.
                        </p>
                    </div>

                    {/* Font Info */}
                    <div className="border-2 border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-xl p-8 mb-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-semibold mb-3 text-lg">Font Family</h4>
                                <p className="text-sm text-black/70 dark:text-white/70 mb-2">Rubik (Google Fonts)</p>
                                <a
                                    href="https://fonts.google.com/specimen/Rubik"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4AF37] hover:underline"
                                >
                                    View on Google Fonts
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-lg">Available Weights</h4>
                                <div className="space-y-1 text-sm">
                                    <div>300 - Light</div>
                                    <div>400 - Regular</div>
                                    <div>500 - Medium</div>
                                    <div>600 - SemiBold</div>
                                    <div>700 - Bold</div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-lg">Implementation</h4>
                                <code className="block text-xs font-mono bg-[#F5F5F5] dark:bg-[#1A1A1A] p-3 rounded">
                                    font-family: 'Rubik',<br/>
                                    -apple-system,<br/>
                                    BlinkMacSystemFont,<br/>
                                    sans-serif;
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Type Specimen */}
                    <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-12 mb-12 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]">
                        <div className="space-y-10">
                            <div>
                                <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-3 tracking-wider">LIGHT (300)</div>
                                <div className="text-6xl font-light tracking-tight">AaBbCcDdEeFfGgHhIiJj</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-3 tracking-wider">REGULAR (400)</div>
                                <div className="text-5xl font-normal tracking-tight">AaBbCcDdEeFfGgHhIiJj</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-3 tracking-wider">MEDIUM (500)</div>
                                <div className="text-4xl font-medium tracking-tight">AaBbCcDdEeFfGgHhIiJj</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-3 tracking-wider">SEMIBOLD (600)</div>
                                <div className="text-3xl font-semibold tracking-tight">AaBbCcDdEeFfGgHhIiJj</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-3 tracking-wider">BOLD (700)</div>
                                <div className="text-2xl font-bold tracking-tight">AaBbCcDdEeFfGgHhIiJj</div>
                            </div>
                        </div>
                    </div>

                    {/* Type Scale Table */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-8">Type Scale & Usage</h3>
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl divide-y-2 divide-black/10 dark:divide-white/10 overflow-hidden">
                            {[
                                { name: "Display", class: "text-6xl", size: "60px", rem: "3.75rem", weight: "font-light (300)", use: "Hero headlines, major titles" },
                                { name: "H1", class: "text-5xl", size: "48px", rem: "3rem", weight: "font-light (300)", use: "Page titles, section headers" },
                                { name: "H2", class: "text-4xl", size: "36px", rem: "2.25rem", weight: "font-normal (400)", use: "Sub-sections, card titles" },
                                { name: "H3", class: "text-3xl", size: "30px", rem: "1.875rem", weight: "font-medium (500)", use: "Group headers" },
                                { name: "H4", class: "text-2xl", size: "24px", rem: "1.5rem", weight: "font-medium (500)", use: "Component titles" },
                                { name: "Large", class: "text-xl", size: "20px", rem: "1.25rem", weight: "font-normal (400)", use: "Lead paragraphs, intro text" },
                                { name: "Base", class: "text-base", size: "16px", rem: "1rem", weight: "font-normal (400)", use: "Body copy, paragraphs, descriptions" },
                                { name: "Small", class: "text-sm", size: "14px", rem: "0.875rem", weight: "font-medium (500)", use: "Labels, captions, meta info" },
                                { name: "XSmall", class: "text-xs", size: "12px", rem: "0.75rem", weight: "font-semibold (600)", use: "Badges, tags, tiny labels" },
                            ].map((type, i) => (
                                <div key={i} className="p-6 grid grid-cols-2 gap-6 items-center hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors">
                                    <div className={type.class + " " + type.weight.split(" ")[0]}>{type.name}</div>
                                    <div className="text-right space-y-1">
                                        <div className="text-sm font-semibold">{type.size} / {type.rem}</div>
                                        <div className="text-xs text-black/60 dark:text-white/60">{type.weight}</div>
                                        <div className="text-xs text-black/50 dark:text-white/50">{type.use}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Typography Rules */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-6">
                            <h4 className="font-semibold mb-3 text-lg">Line Height Rules</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Display/Headlines:</strong> 1.1 (110%)</div>
                                <div><strong>Headings:</strong> 1.2 (120%)</div>
                                <div><strong>Body Text:</strong> 1.6 (160%)</div>
                                <div><strong>Small Text:</strong> 1.4 (140%)</div>
                            </div>
                        </div>
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-6">
                            <h4 className="font-semibold mb-3 text-lg">Letter Spacing</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Display:</strong> -0.02em (tighter)</div>
                                <div><strong>Headlines:</strong> -0.01em (tight)</div>
                                <div><strong>Body Text:</strong> 0em (normal)</div>
                                <div><strong>All Caps:</strong> 0.05em (wider)</div>
                            </div>
                        </div>
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-6">
                            <h4 className="font-semibold mb-3 text-lg">Weight Usage</h4>
                            <div className="space-y-2 text-sm">
                                <div><strong>Light (300):</strong> Large display text only</div>
                                <div><strong>Regular (400):</strong> Body copy, default</div>
                                <div><strong>Medium (500):</strong> Headings, emphasis</div>
                                <div><strong>SemiBold/Bold:</strong> Buttons, CTAs, labels</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Section */}
            <section id="components" className="py-24 px-6 lg:px-12 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E5E5E5] dark:border-[#1A1A1A] mb-4">
                            <div className="w-1.5 h-1.5 rounded-lg bg-[#D4AF37]" />
                            <span className="text-xs font-bold tracking-wider">04 — UI COMPONENTS</span>
                        </div>
                        <h2 className="text-5xl font-semibold mb-6">Component Library</h2>
                        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                            32 production-ready components built with Tailwind CSS and Radix UI. All components include hover states, focus rings, and dark mode support.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8">Button System</h3>
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-12">
                            <div className="space-y-10">
                                <div>
                                    <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-4 tracking-wider">PRIMARY — Black background, white text</div>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                                            Small (sm)
                                        </button>
                                        <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                            Default (base)
                                        </button>
                                        <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                                            Large (lg)
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-4 tracking-wider">SECONDARY — Bordered, transparent background</div>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                            Bold Border
                                        </button>
                                        <button className="px-6 py-3 border border-black/30 dark:border-white/30 text-black dark:text-white rounded-lg font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                            Thin Border
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-4 tracking-wider">ACCENT — Gold background for premium actions</div>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-6 py-3 bg-[#D4AF37] text-black rounded-lg font-semibold hover:bg-[#B8941F] transition-colors">
                                            Solid Gold
                                        </button>
                                        <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#C9A632] to-[#B8941F] text-black rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#D4AF37]/20">
                                            Gold Gradient
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-black/40 dark:text-white/40 mb-4 tracking-wider">TEXT — No background, text-only</div>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="px-4 py-2 text-black dark:text-white hover:text-[#D4AF37] transition-colors font-semibold">
                                            Text Link
                                        </button>
                                        <button className="px-4 py-2 text-black dark:text-white hover:underline transition-all font-semibold underline-offset-4">
                                            Underline Hover
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8">Card System</h3>
                        <div className="space-y-8">
                            {/* Default Card Example */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm font-semibold">Default Card — Vehicle Listing</div>
                                    <code className="text-xs font-mono text-black/50 dark:text-white/50">border-2 rounded-xl p-6</code>
                                </div>
                                <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-6 hover:shadow-lg transition-all max-w-md">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-1">McLaren 720S</h4>
                                            <p className="text-sm text-black/60 dark:text-white/60">2023 • 4,200 miles • Beverly Hills, CA</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">$1,495</div>
                                            <div className="text-xs text-black/60 dark:text-white/60">per day</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded text-xs font-medium">710 HP</span>
                                        <span className="px-2 py-1 bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded text-xs font-medium">V8 Twin-Turbo</span>
                                        <span className="px-2 py-1 bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded text-xs font-medium">RWD</span>
                                    </div>
                                    <button className="w-full py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Accent Card Example */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm font-semibold">Accent Card — Featured Listing</div>
                                    <code className="text-xs font-mono text-black/50 dark:text-white/50">border-l-4 border-[gold] bg-gradient</code>
                                </div>
                                <div className="border-l-4 border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-xl p-6 max-w-md">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="px-2.5 py-1 bg-[#D4AF37] text-black rounded-lg text-xs font-bold">FEATURED</div>
                                        <div className="px-2.5 py-1 bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded-lg text-xs font-semibold">Top Pick</div>
                                    </div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-1">Lamborghini Huracán EVO</h4>
                                            <p className="text-sm text-black/60 dark:text-white/60">2024 • 850 miles • Miami, FL</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">$1,895</div>
                                            <div className="text-xs text-black/60 dark:text-white/60">per day</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        <span className="px-2 py-1 bg-[#D4AF37]/20 rounded text-xs font-medium">631 HP</span>
                                        <span className="px-2 py-1 bg-[#D4AF37]/20 rounded text-xs font-medium">V10</span>
                                        <span className="px-2 py-1 bg-[#D4AF37]/20 rounded text-xs font-medium">AWD</span>
                                    </div>
                                    <button className="w-full py-2.5 bg-[#D4AF37] text-black rounded-lg font-semibold hover:bg-[#B8941F] transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>

                            {/* Solid Card Example */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm font-semibold">Solid Card — Promotional CTA</div>
                                    <code className="text-xs font-mono text-black/50 dark:text-white/50">bg-black rounded-xl p-6</code>
                                </div>
                                <div className="bg-black dark:bg-white text-white dark:text-black rounded-xl p-6 relative overflow-hidden max-w-md">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-lg blur-3xl" />
                                    <div className="relative">
                                        <div className="inline-block px-2.5 py-1 bg-[#D4AF37] text-black rounded-lg text-xs font-bold mb-4">
                                            LIMITED OFFER
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2">First Rental Free Insurance</h4>
                                        <p className="text-sm text-white/80 dark:text-black/60 mb-6">
                                            Book your first exotic rental and receive complimentary premium insurance coverage worth $500. Valid through November 30, 2025.
                                        </p>
                                        <button className="px-6 py-2.5 bg-white dark:bg-black text-black dark:text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                                            Claim Offer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Elements */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8">Form Controls</h3>
                        <div className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-12">
                            <div className="max-w-2xl space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="you@cartique.com"
                                        className="w-full px-4 py-3 border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors bg-transparent font-medium"
                                    />
                                    <p className="text-xs text-black/50 dark:text-white/50 mt-1.5">We'll never share your email with anyone.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your luxury automotive needs..."
                                        className="w-full px-4 py-3 border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors bg-transparent resize-none"
                                    />
                                </div>
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="w-5 h-5 rounded border-2 border-[#E5E5E5] dark:border-[#1A1A1A] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-0 mt-0.5"
                                    />
                                    <label htmlFor="terms" className="text-sm">
                                        I agree to receive marketing communications from Cartique. You can unsubscribe at any time.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Voice & Tone */}
            <section id="voice" className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E5E5E5] dark:border-[#1A1A1A] mb-4">
                            <div className="w-1.5 h-1.5 rounded-lg bg-[#D4AF37]" />
                            <span className="text-xs font-bold tracking-wider">05 — VOICE & TONE</span>
                        </div>
                        <h2 className="text-5xl font-semibold mb-6">Brand Voice</h2>
                        <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                            Our voice is confident without arrogance, luxurious without pretension, and precise without jargon. Every word must earn its place.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: MessageCircle,
                                title: "Sophisticated",
                                principle: "Refined but accessible",
                                desc: "We demonstrate expertise through clarity, not complexity. Use elevated language without being condescending. Think Vogue, not academic paper."
                            },
                            {
                                icon: Eye,
                                title: "Approachable",
                                principle: "Warm professionalism",
                                desc: "Luxury should feel inviting, not exclusionary. Address users directly (you/your). Avoid corporate speak and industry jargon."
                            },
                            {
                                icon: Zap,
                                title: "Precise",
                                principle: "Economical with words",
                                desc: "Cut ruthlessly. Every sentence adds value or is deleted. Favor specific details over vague descriptors. Show, don't tell."
                            },
                        ].map((item, i) => (
                            <div key={i} className="border-2 border-[#E5E5E5] dark:border-[#1A1A1A] rounded-xl p-8 hover:border-[#D4AF37]/30 transition-all">
                                <item.icon className="w-8 h-8 mb-4 text-[#D4AF37]" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm font-semibold text-[#D4AF37] mb-3">{item.principle}</p>
                                <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Writing Examples */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="border-2 border-green-500/30 bg-green-500/5 rounded-xl p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <h4 className="font-semibold text-lg">Do Write Like This</h4>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold shrink-0">✓</span>
                                    <span><strong>Active voice:</strong> "Drive a McLaren 720S this weekend" not "A McLaren 720S can be driven"</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold shrink-0">✓</span>
                                    <span><strong>Specific details:</strong> "Carbon fiber monocoque, 710 HP twin-turbo V8" not "high-performance materials and engine"</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold shrink-0">✓</span>
                                    <span><strong>Benefits-first:</strong> "Skip the dealership. Drive tomorrow." not "We offer fast rental processing"</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold shrink-0">✓</span>
                                    <span><strong>Second person:</strong> "Your garage, elevated" not "Our platform elevates garages"</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-green-600 font-bold shrink-0">✓</span>
                                    <span><strong>Concrete numbers:</strong> "2,847 exotic vehicles across 47 cities" not "thousands of vehicles in many locations"</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border-2 border-red-500/30 bg-red-500/5 rounded-xl p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">✕</span>
                                </div>
                                <h4 className="font-semibold text-lg">Don't Write Like This</h4>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-3">
                                    <span className="text-red-600 font-bold shrink-0">✕</span>
                                    <span><strong>Vague adjectives:</strong> "amazing experience" "incredible selection" "unparalleled luxury"</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-600 font-bold shrink-0">✕</span>
                                    <span><strong>Industry jargon:</strong> "turnkey solution" "synergy" "paradigm shift" "ecosystem"</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-600 font-bold shrink-0">✕</span>
                                    <span><strong>Overstatement:</strong> "revolutionary" "game-changing" "world's best" without proof</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-600 font-bold shrink-0">✕</span>
                                    <span><strong>Corporate speak:</strong> "We leverage our platform to facilitate..." instead of "We connect..."</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-red-600 font-bold shrink-0">✕</span>
                                    <span><strong>Passive voice:</strong> "Your request will be processed" instead of "We'll confirm within 2 hours"</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Real Example */}
                    <div className="border-2 border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-xl p-8">
                        <h4 className="text-sm font-bold text-[#D4AF37] mb-4 tracking-wider">REAL EXAMPLE — HOMEPAGE HERO</h4>
                        <div className="space-y-6">
                            <div>
                                <div className="text-4xl font-semibold mb-3">Drive the Extraordinary</div>
                                <p className="text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
                                    Ferrari. Lamborghini. McLaren. Porsche. Book exotic supercars from verified owners in 47 cities. White-glove delivery to your door. Drive tomorrow.
                                </p>
                            </div>
                            <div className="border-t-2 border-[#D4AF37]/20 pt-6">
                                <p className="text-sm font-semibold mb-3">Why This Works:</p>
                                <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
                                    <li>✓ <strong>Specific brands</strong> (not "luxury vehicles")</li>
                                    <li>✓ <strong>Concrete number</strong> (47 cities, not "many locations")</li>
                                    <li>✓ <strong>Clear benefit</strong> (delivery to your door)</li>
                                    <li>✓ <strong>Immediate timeline</strong> (drive tomorrow, not "fast processing")</li>
                                    <li>✓ <strong>Active, direct language</strong> ("Book" / "Drive" verbs)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-2 border-[#E5E5E5] dark:border-[#1A1A1A] py-16 px-6 lg:px-12 bg-[#FAFAFA] dark:bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <img src="/cartique-black.png" alt="Cartique" className="h-8 mb-4 dark:hidden" />
                            <img src="/cartique-white.png" alt="Cartique" className="h-8 mb-4 hidden dark:block" />
                            <p className="text-sm text-black/60 dark:text-white/60 max-w-sm leading-relaxed">
                                Brand guidelines v1.0 — Living document updated quarterly.<br />
                                Questions? Email{" "}
                                <a href="mailto:brand@cartique.com" className="text-[#D4AF37] hover:underline font-semibold">
                                    brand@cartique.com
                                </a>
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Download</h4>
                            <ul className="space-y-2.5 text-sm text-black/70 dark:text-white/70">
                                <li><a href="/brand-assets.zip" download className="hover:text-[#D4AF37] transition-colors font-medium">Complete Asset Pack (.zip)</a></li>
                                <li><a href="/logos.zip" download className="hover:text-[#D4AF37] transition-colors font-medium">Logo Files (PNG, SVG, EPS)</a></li>
                                <li><a href="https://figma.com/@cartique" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors font-medium inline-flex items-center gap-1">
                                    Figma Design System <ExternalLink className="w-3 h-3" />
                                </a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Sections</h4>
                            <ul className="space-y-2.5 text-sm text-black/70 dark:text-white/70">
                                <li><a href="#logo" className="hover:text-[#D4AF37] transition-colors font-medium">Logo System</a></li>
                                <li><a href="#colors" className="hover:text-[#D4AF37] transition-colors font-medium">Color Palette</a></li>
                                <li><a href="#typography" className="hover:text-[#D4AF37] transition-colors font-medium">Typography</a></li>
                                <li><a href="#components" className="hover:text-[#D4AF37] transition-colors font-medium">Components</a></li>
                                <li><a href="#voice" className="hover:text-[#D4AF37] transition-colors font-medium">Voice & Tone</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t-2 border-[#E5E5E5] dark:border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-black/50 dark:text-white/50">
                            © 2025 Cartique Inc. All rights reserved.
                        </p>
                        <p className="text-sm font-semibold">
                            Version 1.0 • Updated October 23, 2025
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
