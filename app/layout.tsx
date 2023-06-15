import { Neucha } from "next/font/google";
import FooterRedesSociales from "./components/footerRedesSociales";
import Header from "./components/headerMenu";
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
      <body className={inter.className}>
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
          <Header />

          <div className="">
            <main className="max-w-3xl mx-auto">{children}</main>
          </div>

          <FooterRedesSociales />
        </div>
      </body>
    </html>
  );
}
