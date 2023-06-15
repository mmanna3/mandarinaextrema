"use client";

import { fuente } from "@/fuente";
import { useEffect, useState } from "react";
import { IEscrito, escucharEscritos } from "./firebase";

const Blog = () => {
  const [escritos, setEscritos] = useState<IEscrito[]>([]);

  useEffect(() => {
    const callback = (_escritos: IEscrito[]) => {
      console.table(_escritos);
      setEscritos(_escritos);
    };

    escucharEscritos(callback);
  }, []);

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  if (escritos.length === 0)
    return <div className="text-2xl mt-8 px-10">Cargando...</div>;

  return (
    <div>
      <div className="px-10 py-4 overflow-y-auto">
        {escritos.map((escrito: IEscrito) => {
          const fecha = new Date(escrito.fechaHora);

          return (
            <div key={escrito.id} className="">
              <h1 className="text-xl font-semibold mt-8 mb-4">
                {escrito.titulo}
              </h1>
              {/* <h1 className="mb-3 text-[9px]">{`${fecha.getDate()}/${
                fecha.getMonth() + 1
              }/${fecha.getFullYear().toString().slice(-2)}`}</h1> */}
              <pre
                className={`${fuente.className} text-lg whitespace-pre-wrap`}
              >
                {escrito.cuerpo}
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
