"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingBag, ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function PasswordRecoveryCodePage() {
  const [code, setCode] = useState(["", "", "", "", "", ""])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      prevInput?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    const newCode = [...code]

    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i]
    }
    setCode(newCode)
  }

  const isCodeComplete = code.every((digit) => digit !== "")

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

      {/* SMS Code Verification Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#e8e4df] rounded-lg p-8 shadow-sm">
            {/* Header with back button */}
            <div className="flex items-center mb-12">
              <Link href="/signin" className="mr-4 p-1 hover:bg-gray-200 rounded transition-colors">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <h1 className="text-xl font-light text-gray-900 flex-1 text-center mr-9">PASSWORD RECOVERY</h1>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-12 leading-relaxed">
                  An SMS code to reset your password will be your phone number.
                </p>

                {/* SMS Code Input */}
                <div className="flex justify-center space-x-3 mb-12">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className="w-12 h-12 text-center text-lg font-medium bg-white border border-gray-300 rounded focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-colors"
                      placeholder="0"
                    />
                  ))}
                </div>

                <Button
                  disabled={!isCodeComplete}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium mb-8 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Confirm password
                </Button>

                <button className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors">
                  Resend code?
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
