"use client"

import { Link } from "@/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Navigation } from "@/components/navigation"
import { ChevronLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export default function SignInPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Sign In Form */}
      <main className="flex items-center justify-center h-full sm:min-h-[calc(100vh-4rem)] sm:py-12">
        <div className="w-full sm:max-w-3xl sm:px-8">
          <div className="bg-[#EEECE0] sm:p-12 sm:pb-8 pb-6 p-3">
            {/* header with bck button */}
            <div className="flex items-center mb-8 sm:mb-12">
                <button
                  onClick={() => window.history.back()}
                  className="mr-3 sm:mr-4 p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <h1
                  className="uppercase flex-1 text-center text-[24px] sm:text-[36px]"
                  style={{
                    fontFamily: 'PF Regal Text Pro',
                    fontSize: 36,
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: '120%'
                  }}
                >
                  {t('logIn')}
                </h1>
            </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-300">
                
                <button className="flex-1 pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                  {t('logIn')}
                </button>
                <Link
                  href="/"
                  className="flex-1 pb-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t('signIn')}
                </Link>
              </div>

            <form className="sm:space-y-6 space-y-3">
              <div className="text-left">
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  {t('numberPhone')} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t('enterPhone')}
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  {t('password')} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('passwordPlaceholder')}
                  className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 transition-colors"
                />
              </div>

              <div className="flex items-center space-x-2 py-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-gray-900">
                  {t('termsAgreement')}
                </Label>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full sm:w-75 bg-black text-white py-4 font-medium transition-colors disabled:cursor-not-allowed mt-8"
                >
                  {t('signIn')}
                </Button>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/password-recovery/phone"
                  className="text-sm text-black text-center mt-4"
                >
                  {t('forgotPassword')}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
