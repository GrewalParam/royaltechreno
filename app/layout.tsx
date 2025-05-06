import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Royal Tech Reno - Premium Renovation Services",
  description:
    "Transform your space with Royal Tech Reno's premium renovation services led by Sajan, blending innovative technology with timeless craftsmanship.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>{children}</body>
    </html>
  )
}
