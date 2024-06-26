import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { DrawerProvider } from "@/components/drawer";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/QueryProvider";
import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.variable, "font-poppins")}>
        <QueryProvider>
          {children}
          <DrawerProvider />
        </QueryProvider>
      </body>
    </html>
  );
}
