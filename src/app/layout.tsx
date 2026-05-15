import type { Metadata } from "next";
import { Syne, Space_Grotesk, Inter, Space_Mono, Bebas_Neue, Archivo_Black, Plus_Jakarta_Sans, DM_Sans, Outfit, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Neo Brutalism Playground",
  description: "Interactive theme builder for neo brutalism web design",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(syne.variable, spaceGrotesk.variable, inter.variable, spaceMono.variable, bebasNeue.variable, archivoBlack.variable, plusJakartaSans.variable, dmSans.variable, outfit.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
      style={{ scrollBehavior: "auto" }}
      suppressHydrationWarning
    >
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
