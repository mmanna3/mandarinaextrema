import { fuente } from "../fuente";
import "./../globals.css";

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

          <div className="flex-grow bg-slate-50 text-slate-950">
            <main className="max-w-3xl mx-auto flex flex-col items-center justify-center mt-12">
              {children}
            </main>
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
