import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import {NextIntlClientProvider, useMessages} from "next-intl";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ASTERIA - Premium Skincare",
  description: "Transform, strengthen, and boost collagen with peptide-rich actives",
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {
  const locale = params.locale;
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}