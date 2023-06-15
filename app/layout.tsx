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
        {/* <!-- "absolute inset-0" will use the whole viewport even in mobile --> */}
        <div className="flex flex-col absolute inset-0">
          <Header />

          <div className="flex-grow">
            <main className="max-w-3xl mx-auto">{children}</main>
          </div>

          <div className="mb-6">
            <FooterRedesSociales />
          </div>
        </div>
      </body>
    </html>
  );
}
