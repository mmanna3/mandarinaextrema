import Image from "next/image";
import { useEffect, useState } from "react";

interface IProps {
  mandarinaHeridaEsVisible: boolean;
  cuandoLaApreten: () => void;
}

const urlImagenMandarinaSana = "/images/mandarina.png";
const urlImagenMandarinaHerida = "/images/mandarina_herida.png";

function ImagenMandarina({
  mandarinaHeridaEsVisible,
  cuandoLaApreten,
}: IProps) {
  const [imagen, setImagen] = useState(urlImagenMandarinaSana);

  useEffect(() => {
    if (mandarinaHeridaEsVisible) setImagen(urlImagenMandarinaHerida);
    else setImagen(urlImagenMandarinaSana);
  }, [mandarinaHeridaEsVisible]);

  return (
    <Image
      className={`w-300 ${
        mandarinaHeridaEsVisible
          ? "animate-[bounce_0.8s_linear_0s_2]"
          : "animate-[temblar_2.5s_infinite] hover:animate-[temblar_1s_infinite]"
      }`}
      onClick={() => cuandoLaApreten()}
      src={imagen}
      alt="mandarina"
      width="300"
      height="500"
    />
  );
}

export default ImagenMandarina;
