"use client";
import AnalyticsScript from "@/components/analyticsScript";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { fuente } from "../fuente";
import "./../globals.css";

// export const metadata = {
//   title: "Mandarina Extrema",
//   description: "Creado por el mismísimo",
// };

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NZSJXD98" });
  }, []);

  return (
    <>
      <AnalyticsScript />
      {/* "absolute inset-0" ocupará toda la pantalla */}
      <div
        className={`flex flex-col absolute inset-0 bg-slate-50 text-slate-950 ${fuente.className}`}
      >
        {/* <Header /> */}

        <div className="flex-grow">
          <main className="max-w-3xl mx-auto flex flex-col items-center justify-center mt-12">
            {children}
          </main>
        </div>
        {/*
        <div>
          <FooterRedesSociales />
        </div>
        */}
      </div>
    </>
  );
}
