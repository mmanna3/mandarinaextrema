"use client";
import ImagenMandarina from "@/components/imagenMandarina";
import { useState } from "react";
import LinkInclinado from "./links";

const Body = () => {
  const [mandarinaHeridaEsVisible, mostrarMandarinaHerida] = useState(false);

  const [apretoLaMandarina, apretarLaMandarina] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <LinkInclinado
        className="mr-48 rotate-[-10deg]"
        href="/mazo-de-canciones"
        text="las letras"
      />
      <LinkInclinado
        className="ml-24 mt-8 rotate-[10deg]"
        href="https://example.com"
        text="instagram"
      />
      <LinkInclinado
        className="mr-48 mt-8 rotate-[-25deg]"
        href="https://example.com"
        text="el disco"
      />
      <LinkInclinado
        className="ml-40 mt-[-10px] rotate-[-15deg]"
        href="https://example.com"
        text="canciones"
      />
      <div className="my-8">
        <ImagenMandarina
          mandarinaHeridaEsVisible={mandarinaHeridaEsVisible}
          cuandoLaApreten={() => {}}
        />
      </div>
      <LinkInclinado
        className="mr-48 rotate-[15deg]"
        href="/blog"
        text="escritos"
      />
      <LinkInclinado
        className="ml-40 rotate-[-10deg]"
        href="/covers"
        text="covers"
      />
      <LinkInclinado
        className="mr-32 mt-8 rotate-[10deg]"
        href="https://example.com"
        text="youtube"
      />
      <LinkInclinado
        className="ml-40 mt-[10px] rotate-[-15deg]"
        href="https://example.com"
        text="spotify"
      />
    </div>
  );
};

export default Body;
