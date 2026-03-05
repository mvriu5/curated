import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from 'next/font/local'
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Curated",
    description: "Curation of react components",
}

const matesc = localFont({
    src: [{
        path: '../public/MateSC-Regular.ttf',
        weight: '400'
    }],
    variable: '--font-matesc'
})


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${matesc.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
