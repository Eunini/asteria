"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, ShoppingBag, ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function PasswordResetPage() {
  const [password, setPassword] = useState("")
  const [passwordRepeat, setPasswordRepeat] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  const passwordsMatch = password && passwordRepeat && password === passwordRepeat
  const showMismatchError = showValidation && passwordRepeat && !passwordsMatch

  const handlePasswordRepeatBlur = () => {
    setShowValidation(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordsMatch) {
      // Handle password reset
      console.log("Password reset successful")
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0]">
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
              <div className="relative">
                <Link href="#" className="text-gray-900 hover:text-gray-700">
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

      {/* Password Reset Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#e8e4df] rounded-lg p-8 shadow-sm">
            {/* Header with back button */}
            <div className="flex items-center mb-10">
              <Link href="/password-recovery/code" className="mr-4 p-1 hover:bg-gray-200 rounded transition-colors">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <h1 className="text-xl font-light text-gray-900 flex-1 text-center mr-9">PASSWORD RECOVERY</h1>
            </div>

            <div className="space-y-6">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-700 leading-relaxed">Create a new password and repeat it.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="new-password" className="block text-sm font-medium text-gray-900 mb-2">
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password-repeat" className="block text-sm font-medium text-gray-900 mb-2">
                    Password repeat <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="password-repeat"
                    type="password"
                    placeholder="Enter password"
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                    onBlur={handlePasswordRepeatBlur}
                    className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                    required
                  />
                  {showMismatchError && <p className="text-sm text-gray-600 mt-2">The password must match</p>}
                </div>

                <Button
                  type="submit"
                  disabled={!passwordsMatch}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-8"
                >
                  Confirm password
                </Button>

                <div className="text-center pt-4">
                  <Link
                    href="/password-recovery/code"
                    className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors"
                  >
                    Resend code?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
