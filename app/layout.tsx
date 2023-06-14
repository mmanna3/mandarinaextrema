import { Neucha } from "next/font/google";
import "./globals.css";

const inter = Neucha({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Mandarina Extrema",
  description: "Creado por el mismísimo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
