"use client";
import { useState } from "react";
// import MazoDeCanciones from "../mazoDeCanciones/MazoDeCanciones";
// import BotonNavegacion from "./BotonBlog/BotonBlog";
import ImagenMandarina from "@/components/imagenMandarina";
import InputSecreto from "@/components/inputSecreto";

const Body = () => {
  const [mandarinaHeridaEsVisible, mostrarMandarinaHerida] = useState(false);
  const [mazoEsVisible, mostrarMazo] = useState(false);
  const [apretoLaMandarina, apretarLaMandarina] = useState(false);

  const hayError = (hay: boolean) => mostrarMandarinaHerida(hay);

  const escribioLaCorrecta = () => {
    mostrarMazo(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      {!mazoEsVisible ? (
        <>
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
        </>
      ) : (
        // <MazoDeCanciones />
        <></>
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
