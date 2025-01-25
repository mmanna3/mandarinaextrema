"use client";
import AnalyticsScript from "@/components/analyticsScript";
import { fuente } from "@/fuente";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "./../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NZSJXD98" });
  }, []);

  return (
    <html lang="en">
      <head>
        <AnalyticsScript />
        <title>Mandarina Extrema</title>
      </head>
      <body className={fuente.className}>
        {/* <!-- "absolute inset-0" will use the whole viewport even in mobile --> */}
        <div className="flex flex-col absolute inset-0">
          {/* <Header /> */}

          <div className="flex-grow">
            <main className="max-w-3xl mx-auto">{children}</main>
          </div>

          {/* <div className="w-screen">
            <FooterRedesSociales />
          </div> */}
        </div>
      </body>
    </html>
  );
}
