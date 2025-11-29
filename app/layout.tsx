import { fuente } from "./fuente";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mandarina Extrema</title>
      </head>
      <body className={fuente.className}>
        <div className="grid max-w-sm mx-auto">
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
        </div>
      </body>
    </html>
  );
}
