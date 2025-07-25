"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, ShoppingBag, ChevronLeft, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function PasswordRecoveryPhonePage() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const isPhoneValid = phoneNumber.length >= 10

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isPhoneValid) {
      // Redirect to code verification page
      window.location.href = "/password-recovery"
    }
  }

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

      {/* Password Recovery Phone Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-md px-4">
          <div className="bg-[#e8e4df] rounded-lg p-6 sm:p-8 shadow-sm">
            {/* Header with back button */}
            <div className="flex items-center mb-8 sm:mb-12">
              <Link href="/signin" className="mr-3 sm:mr-4 p-1 hover:bg-gray-200 rounded transition-colors">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <h1 className="text-lg sm:text-xl font-light text-gray-900 flex-1 text-center mr-8 sm:mr-9">
                PASSWORD RECOVERY
              </h1>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-8 sm:mb-12 leading-relaxed px-2">
                  Enter your phone number to receive a verification code for password recovery.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isPhoneValid}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium mb-6 sm:mb-8 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Send verification code
                  </Button>
                </form>

                <div className="text-center space-y-3">
                  <p className="text-sm text-gray-700">
                    Remember your password?{" "}
                    <Link href="/signin" className="text-gray-900 hover:underline font-medium transition-colors">
                      Sign in
                    </Link>
                  </p>
                  <p className="text-sm text-gray-700">
                    Dont have an account?{" "}
                    <Link href="/signup" className="text-gray-900 hover:underline font-medium transition-colors">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
