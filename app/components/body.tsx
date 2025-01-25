"use client";
import ImagenMandarina from "@/components/imagenMandarina";
import { useState } from "react";
import LinkInclinado from "./links";

const Body = () => {
  const [mandarinaHeridaEsVisible, mostrarMandarinaHerida] = useState(false);

  const [apretoLaMandarina, apretarLaMandarina] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <LinkInclinado
        className="mr-48 rotate-[-10deg]"
        href="/mazo-de-canciones"
        text="las letras"
      />
      <LinkInclinado
        className="ml-24 mt-8 rotate-[10deg]"
        href="https://www.instagram.com/mandarina.extrema/"
        text="instagram"
      />
      <LinkInclinado
        className="mr-48 mt-8 rotate-[-25deg] underline"
        href="https://youtu.be/wENBwg6rpeA?si=ytHVtZ2yMKiyzwmn"
        text="el disco"
      />
      <LinkInclinado
        className="ml-40 mt-[-10px] rotate-[-15deg]"
        href="https://open.spotify.com/artist/7lo1iNrrVW77oauQUED0tF?si=DafNeRv8TNCzI2Eqs9nyFg"
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
        className="mr-32 mt-8 rotate-[10deg] underline"
        href="https://www.youtube.com/@mandarina.extrema"
        text="youtube"
      />
      <LinkInclinado
        className="ml-40 mt-[10px] rotate-[-15deg]"
        href="https://open.spotify.com/artist/7lo1iNrrVW77oauQUED0tF?si=DafNeRv8TNCzI2Eqs9nyFg"
        text="spotify"
      />
    </div>
  );
};

export default Body;
