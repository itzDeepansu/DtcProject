import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import SideBar from "@/components/standalone/SideBar";
import NavBar from "@/components/standalone/NavBar";


export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-black text-white">
          <NavBar />
          <SideBar />
          <div className="ml-16 w-[calc(100%-4rem)] bg-gray-600 p-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
