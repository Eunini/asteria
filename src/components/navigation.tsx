import Link from "next/link"
import { Globe, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700">
                  Brands
                </Link>
                <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700">
                  Catalog
                </Link>
                <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700">
                  SofiaMedical
                </Link>
                <Link href="#" className="text-lg font-medium text-gray-900 hover:text-gray-700">
                  About
                </Link>
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 mb-4">
                    <Globe className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">UK</span>
                  </div>
                  <Link href="#" className="block text-lg font-medium text-gray-900 hover:text-gray-700 mb-4">
                    Partners
                  </Link>
                  <Link href="/signin" className="block text-lg font-medium text-gray-900 hover:text-gray-700 mb-4">
                    Account
                  </Link>
                  <Link href="#" className="block text-lg font-medium text-gray-900 hover:text-gray-700">
                    Contact
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="flex-1 flex justify-center md:flex-none">
            <Link
              href="/"
              className="text-xl md:text-2xl font-light tracking-[0.2em] text-gray-900 hover:text-gray-700 transition-colors"
            >
              ASTERIA
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <Globe className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">UK</span>
            </div>
            <Link
              href="#"
              className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
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
              className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Contact
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-700 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
