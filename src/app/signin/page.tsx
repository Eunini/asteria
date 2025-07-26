/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const [showPasswordMismatch, setShowPasswordMismatch] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleConfirmPasswordBlur = () => {
    if (formData.confirmPassword) {
      setShowPasswordMismatch(formData.password !== formData.confirmPassword)
    }
  }

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Sign Up Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-3xl px-8">
          <div className="bg-[#EEECE0] p-8 sm:px-12 sm:py-4">
            <div className="text-center mb-2 sm:mb-4">
              <h1
                className="mb-4 sm:mb-6 uppercase"
                style={{
                  fontFamily: 'PF Regal Text Pro',
                  fontSize: 36,
                  fontStyle: 'normal',
                  fontWeight: 300,
                  lineHeight: '120%'
                }}
              >
                SIGN IN
              </h1>

              {/* Tabs */}
              <div className="flex border-b border-gray-300">
                <Link
                  href="/login"
                  className="flex-1 pb-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Log in
                </Link>
                <button className="flex-1 pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                  Sign In
                </button>
              </div>
            </div>

            <form className="px-3 sm:px-6 space-y-3">
              <div>
                <Label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
                  Username <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                  required
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
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                  required
                />
              </div>


              <div className="flex items-center space-x-2 py-4">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-gray-900">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={!passwordsMatch || !formData.agreeToTerms}
                  className="w-75 bg-black text-white py-4 font-medium transition-colors disabled:cursor-not-allowed"
                >
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
