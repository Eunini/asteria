import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#EEECE0] border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-light tracking-[0.2em] text-gray-900 mb-6 block">
              ASTERIA
            </Link>
            <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-xs">
              The wise man therefore always holds in these matters to this principle
            </p>
            <p className="text-xs text-gray-600">© 2023. All Rights Reserved.</p>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-6">USEFUL LINK</h3>
            <nav className="space-y-4">
              <Link href="#" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                PORTFOLIO
              </Link>
              <Link href="#" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                SERVICES
              </Link>
              <Link href="#" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                LATEST NEWS
              </Link>
              <Link href="/" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                HOME
              </Link>
              <Link href="#" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-6">CONTACT US</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p>20 Cooper Square,</p>
                <p>New York, NY 1003, USA</p>
              </div>
              <p>(+251)155 69669 365</p>
              <p>support@bimo.com</p>
              <p>www.bimosupport.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium text-gray-900 mb-6">NEWSLETTER</h3>
            <p className="text-sm text-gray-700 mb-6">Be up to date with new products.</p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter email..."
                className="w-full bg-white border-gray-300 focus:border-gray-900 focus:ring-gray-900 text-sm"
              />
              <Button
                type="submit"
                className="w-full bg-transparent border-b-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-none px-0 py-2 font-medium tracking-wide transition-colors"
                variant="ghost"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-gray-900 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
