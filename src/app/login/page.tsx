"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Globe, ShoppingBag, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Brands
                  </Link>
                  <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Catalog
                  </Link>
                  <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    SofiaMedical
                  </Link>
                  <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    About
                  </Link>
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-2 mb-6">
                      <Globe className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">UK</span>
                    </div>
                    <Link
                      href="#"
                      className="block text-lg font-medium text-gray-900 hover:text-gray-700 mb-6 transition-colors"
                    >
                      Partners
                    </Link>
                    <Link
                      href="/signin"
                      className="block text-lg font-medium text-gray-900 hover:text-gray-700 mb-6 transition-colors"
                    >
                      Account
                    </Link>
                    <Link
                      href="#"
                      className="block text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                Brands
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                Catalog
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                SofiaMedical
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                About
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:flex-none">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-light tracking-[0.2em] text-gray-900 hover:text-gray-700 transition-colors"
              >
                ASTERIA
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="hidden md:flex items-center space-x-1">
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">UK</span>
              </div>
              <Link
                href="#"
                className="hidden lg:block text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Partners
              </Link>
              <Link
                href="/signin"
                className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Account
              </Link>
              <Link
                href="#"
                className="hidden lg:block text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Contact
              </Link>
              <div className="relative">
                <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                </Link>
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sign In Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-md px-4">
          <div className="bg-[#EEECE0] rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6">SIGN IN</h1>

              {/* Tabs */}
              <div className="flex border-b border-gray-300">
                <Link
                  href="/signup"
                  className="flex-1 pb-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sign In
                </Link>
                <button className="flex-1 pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                  Login
                </button>
              </div>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Number phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone"
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-gray-900">
                  I agree to the Terms of Service
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium transition-colors"
              >
                Login
              </Button>

              <div className="text-center pt-2">
                <Link
                  href="/password-recovery/phone"
                  className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      <div className="text-center pt-4">
        <p className="text-sm text-gray-700">
          Dont have an account?{" "}
          <Link href="/signup" className="text-gray-900 hover:underline font-medium transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
