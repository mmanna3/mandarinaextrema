import Image from "next/image";
import { MouseEvent, useState } from "react";

export interface TCancion {
  titulo: string;
  letra: string;
  linkSpotify: string;
  linkYoutube: string;
}

interface Props {
  cancion: TCancion;
}

function Cancion({ cancion }: Props) {
  const [enBreveEsVisible, mostrarEnBreve] = useState(false);

  const mostrarMensajeEnBreve = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cancion.linkSpotify) {
      e.preventDefault();
      mostrarEnBreve(true);
    }
  };

  return (
    <div className="m-6">
      <div className="text-2xl flex">
        <div className="mb-5">{cancion.titulo}</div>
        <div className="ml-auto flex space-x-2">
          <a
            href={cancion.linkSpotify}
            onClick={(e) => mostrarMensajeEnBreve(e)}
          >
            <Image
              className="icono"
              src="/images/spotify.png"
              alt="spotify"
              width="25"
              height="25"
            />
          </a>
          <a
            href={cancion.linkYoutube}
            onClick={(e) => mostrarMensajeEnBreve(e)}
          >
            <Image
              className="icono"
              src="/images/youtube.png"
              alt="youtube"
              width="25"
              height="25"
            />
          </a>
        </div>
      </div>
      <div className="whitespace-pre-wrap h-[450px] overflow-y-auto">
        {cancion.letra}
      </div>
    </div>
  );
}

export default Cancion;
