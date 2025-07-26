"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Password Reset Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-3xl px-8">
          <div className="bg-[#EEECE0] p-8 sm:p-12 shadow-sm">
            {/* Header with back button */}
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <Link href="/password-recovery/code" className="hover:bg-gray-200 transition-colors rounded p-1">
                <ChevronLeft className="h-5 w-5 text-black" />
              </Link>
              <h1
                className="uppercase flex-1 text-center"
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
              <div className="text-center mb-8">
                <p className="text-md text-black mb-3 sm:mb-6 leading-relaxed px-2 text-center">Create a new password and repeat it.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left">
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

                <div className="text-left">
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
                  <p className="text-sm text-gray-600 mt-2">The password must match</p>
                </div>

                <Button
                  type="submit"
                  disabled={!passwordsMatch}
                  className="w-full bg-black text-white py-4 font-medium transition-colors disabled:cursor-not-allowed mt-8"
                >
                  Confirm password
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
