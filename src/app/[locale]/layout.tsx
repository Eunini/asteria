import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASTERIA - Premium Skincare",
  description: "Transform, strengthen, and boost collagen with peptide-rich actives",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}