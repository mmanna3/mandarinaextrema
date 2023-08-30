import { fuente } from "../fuente";
// import "./globals.css";

export const metadata = {
  title: "Mandarina Extrema",
  description: "Creado por el mismísimo",
};

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fuente.className}>
        {/* <!-- "absolute inset-0" will use the whole viewport even in mobile --> */}
        <div className="flex flex-col absolute inset-0">
          {/* <Header /> */}

          <div className="flex-grow bg-gray-950 text-slate-50">
            <main className="max-w-3xl mx-auto">{children}</main>
          </div>
          {/* 
          <div>
            <FooterRedesSociales />
          </div> */}
        </div>
      </body>
    </html>
  );
}
