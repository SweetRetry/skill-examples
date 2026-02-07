import type { Metadata } from "next"
import { Providers } from "@/components/providers"
import { Nav } from "@/components/nav"
import "@workspace/ui/studio-phantom.global.css"

export const metadata: Metadata = {
  title: "Studio Phantom",
  description: "Indie game studio — crafting digital phantoms",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <body>
        <Providers>
          <Nav />
          <main className="min-h-screen pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
