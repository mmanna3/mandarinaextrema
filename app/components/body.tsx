"use client";
import ImagenMandarina from "@/components/imagenMandarina";
import InputSecreto from "@/components/inputSecreto";
import { RedirectType } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { useMemo, useState } from "react";

const Body = () => {
  const [mandarinaHeridaEsVisible, mostrarMandarinaHerida] = useState(false);
  const [mazoEsVisible, mostrarMazo] = useState(false);
  const [apretoLaMandarina, apretarLaMandarina] = useState(false);

  const hayError = (hay: boolean) => mostrarMandarinaHerida(hay);

  const escribioLaCorrecta = () => {
    mostrarMazo(true);
  };

  useMemo(() => {
    if (mazoEsVisible) redirect("/mazo-de-canciones", RedirectType.push);
  }, [mazoEsVisible]);

  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <ImagenMandarina
        mandarinaHeridaEsVisible={mandarinaHeridaEsVisible}
        cuandoLaApreten={() => apretarLaMandarina((prev) => !prev)}
      />
      {apretoLaMandarina && (
        <InputSecreto
          hayError={hayError}
          escribioLaCorrecta={escribioLaCorrecta}
        />
      )}
      {/* <div className="youtube-video-contenedor">
      <iframe height="250" width="320" title="cancion-para-desayunar" 
        src="https://www.youtube.com/embed/wAl7HHFWCIg">
      </iframe>  
    </div> */}
    </div>
  );
};

export default Body;
