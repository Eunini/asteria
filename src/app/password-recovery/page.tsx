"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, ShoppingBag, ChevronLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function PasswordRecoveryPage() {
  const [step, setStep] = useState<"code" | "password">("code")
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [password, setPassword] = useState("")
  const [passwordRepeat, setPasswordRepeat] = useState("")

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
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

  const passwordsMatch = password && passwordRepeat && password === passwordRepeat

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Password Recovery Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 sm:py-12">
        <div className="w-full max-w-xl sm:max-w-2xl px-4">
          <div className="bg-[#EEECE0] rounded-lg p-8 sm:p-12 shadow-sm">
            {/* Header with back button */}
            <div className="flex items-center mb-8 sm:mb-12">
              <button
                onClick={() => (step === "password" ? setStep("code") : window.history.back())}
                className="mr-3 sm:mr-4 p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h1
                className="flex-1 text-center mr-8 sm:mr-9 uppercase"
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

            {step === "code" ? (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center">
                  <p className="text-sm text-gray-700 mb-8 sm:mb-12 leading-relaxed px-2">
                    An SMS code to reset your password will be your phone number.
                  </p>

                  {/* SMS Code Input */}
                  <div className="flex justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-12">
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
                        className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-medium bg-white border border-gray-300 rounded focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none transition-colors"
                        placeholder="0"
                      />
                    ))}
                  </div>

                  <Button
                    onClick={() => setStep("password")}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium mb-6 sm:mb-8 transition-colors"
                  >
                    Confirm password
                  </Button>

                  <button className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors">
                    Resend code?
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center mb-6 sm:mb-8">
                  <p className="text-sm text-gray-700 leading-relaxed px-2">Create a new password and repeat it.</p>
                </div>

                <form className="space-y-4 sm:space-y-6">
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
                      className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                    />
                    {passwordRepeat && !passwordsMatch && (
                      <p className="text-sm text-gray-600 mt-2">The password must match</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={!passwordsMatch}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-6 sm:mt-8"
                  >
                    Confirm password
                  </Button>

                  <div className="text-center pt-2 sm:pt-4">
                    <button
                      type="button"
                      onClick={() => setStep("code")}
                      className="text-sm text-gray-700 hover:text-gray-900 underline transition-colors"
                    >
                      Resend code?
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}