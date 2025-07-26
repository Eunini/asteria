"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation } from "@/components/navigation"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Sign In Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-4 sm:py-8">
        <div className="w-full max-w-sm sm:max-w-3xl px-8">
          <div className="bg-[#EEECE0] p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-6 sm:mb-8">
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
                LOG IN
              </h1>

              {/* Tabs */}
              <div className="flex border-b border-gray-300">
                
                <button className="flex-1 pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                  Login
                </button>
                <Link
                  href="/signin"
                  className="flex-1 pb-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>

            <form className="space-y-3">
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

              <div className="flex items-center space-x-2 py-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-gray-900">
                  I agree to the Terms of Service
                </Label>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-75 bg-black text-white py-4 font-medium transition-colors disabled:cursor-not-allowed"
                >
                  Sign In
                </Button>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/password-recovery/phone"
                  className="text-sm text-black hover:text-gray-900 transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
