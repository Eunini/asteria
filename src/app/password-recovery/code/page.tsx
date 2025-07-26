"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* SMS Code Verification Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-3xl px-8">
          <div className="bg-[#EEECE0] p-8 sm:p-12 shadow-sm">
            {/* Header with back button */}
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <Link href="/signin" className="hover:bg-gray-200 transition-colors rounded p-1">
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
              <div className="text-center">
                <p className="text-md text-black mb-3 sm:mb-6 leading-relaxed px-2 text-center">
                  An SMS code to reset your password will be your phone number.
                </p>

                {/* SMS Code Input */}
                <form className="space-y-6">
                  <div className="flex justify-center space-x-3 mb-6">
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
                    className="w-full bg-black text-white py-4 font-medium transition-colors disabled:cursor-not-allowed"
                  >
                    Confirm password
                  </Button>
                </form>

                <button className="text-sm text-gray-700 hover:text-gray-900 transition-colors mt-4">
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
