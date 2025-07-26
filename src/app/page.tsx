import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingBag } from "lucide-react"
import { Footer } from "@/components/footer"

import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                Brands
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                Catalog
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                SofiaMedical
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                About
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <Link href="/" className="text-2xl font-light tracking-[0.2em] text-gray-900">
                ASTERIA
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-1">
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">UK</span>
              </div>
              <Link href="#" className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-700">
                Partners
              </Link>
              <Link href="#" className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-700">
                Account
              </Link>
              <Link href="#" className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-700">
                Contact
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <div className="mx-auto max-w-7xl relative min-h-[calc(100vh-4rem)]">
          {/* Hero background image */}
          <Image
            src="/bg-image.jpg"
            alt="Renewal Serum with jade roller and skincare products"
            fill
            className="absolute inset-0 w-full h-full object-cover -z-10"
            priority
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] relative z-10">
            {/* First column empty */}
            <div className="hidden lg:block"></div>
            {/* Second column - Content aligned left */}
            <div className="flex flex-col items-start w-full space-y-8 py-12 lg:py-24 h-full">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  Renewal Serum
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Transform, strengthen, and boost collagen with peptide-rich actives to reveal renewed skin
                </p>
              </div>
              <div className="pt-4">
                <Button
                  className="bg-transparent border-b-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-none px-0 py-2 font-medium tracking-wide"
                  variant="ghost"
                >
                  JOIN NOW
                </Button>
              </div>
            </div>
    
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}