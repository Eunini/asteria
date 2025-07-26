"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Password Recovery Phone Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-3xl px-8">
          <div className="bg-[#EEECE0] p-8 sm:p-12 shadow-sm">
            {/* Header with back button */}
            <div className="relative flex items-center mb-8 sm:mb-12 min-h-[48px]">
              <Link href="/signin" className="absolute left-0 hover:bg-gray-200 transition-colors rounded p-1">
                <ChevronLeft className="h-5 w-5 text-black" />
              </Link>
              <h1
                className="uppercase w-full text-center"
                style={{
                  fontFamily: 'PF Regal Text Pro',
                  fontSize: 36,
                  fontStyle: 'normal',
                  fontWeight: 300,
                  lineHeight: '120%'
                }}
              >
                PASSWORD RECOVERY
              </h1>
            </div>
            <div className="h-6 sm:h-10" />

            <div className="space-y-2">
              <div className="text-center">
                <p className="text-md text-black mb-3 sm:mb-6 leading-relaxed px-2 text-center">
                  An SMS code to reset your password will be your phone number.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-left">
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Number phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isPhoneValid}
                    className="w-75 bg-black text-white py-4 font-medium transition-colors disabled:cursor-not-allowed"
                  >
                    Confirm password
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
