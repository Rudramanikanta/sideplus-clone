import localFont from "next/font/local";
import "./globals.css";
import Providers from "./components/providers"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const roc=localFont({
  src:"./fonts/fonnts.com-Roc_Grotesk_Medium.woff",
  variable:"--font-roc-grotesk",
  weight:"100 900"
})
export const metadata = {
  title: "Sideplus clone",
  description: "create by rudra manikanta dedicated to maxy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roc.className} ${geistMono.variable} ${roc.variable} antialiased `}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
