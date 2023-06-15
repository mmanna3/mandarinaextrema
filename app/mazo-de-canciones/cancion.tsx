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
    <div className="contenedor">
      <div className="titulo">
        <span>
          {cancion.titulo}
          <span className="contenedorIconos">
            <a
              href={cancion.linkSpotify}
              onClick={(e) => mostrarMensajeEnBreve(e)}
            >
              <Image
                className="icono"
                src="/images/spotify.png"
                alt="spotify"
                width="40"
                height="40"
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
                width="40"
                height="40"
              />
            </a>
          </span>
        </span>
      </div>
      <div className="letra">{cancion.letra}</div>
    </div>
  );
}

export default Cancion;
