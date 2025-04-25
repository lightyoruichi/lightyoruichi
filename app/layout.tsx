import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter, Noto_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Harinder Singh | Growth & Marketing Strategist",
  description: "Growth & AI-Driven Marketing Strategist specializing in data-driven strategies and automation",
  openGraph: {
    title: "Harinder Singh | Growth & Marketing Strategist",
    description: "Growth & AI-Driven Marketing Strategist specializing in data-driven strategies and automation",
    type: "profile",
    profile: {
      firstName: "Harinder",
      lastName: "Singh",
      username: "lightyoruichi",
    },
  },
  alternates: {
    canonical: "https://lightyoruichi.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harinder Singh",
              jobTitle: "Growth & AI-Driven Marketing Strategist",
              url: "https://lightyoruichi.com",
              sameAs: [
                "https://linkedin.com/in/lightyoruichi",
                "https://x.com/lightyoruichi",
                "https://github.com/lightyoruichi",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${notoSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
