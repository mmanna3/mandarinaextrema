"use client";
import ImagenMandarina from "@/components/imagenMandarina";
import { useState } from "react";

const Body = () => {
  const [mandarinaHeridaEsVisible, mostrarMandarinaHerida] = useState(false);

  const [apretoLaMandarina, apretarLaMandarina] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-36">
      <ImagenMandarina
        mandarinaHeridaEsVisible={mandarinaHeridaEsVisible}
        cuandoLaApreten={() => {}}
      />
    </div>
  );
};

export default Body;
