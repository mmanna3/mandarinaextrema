"use client";

import { registrarClic } from "@/actions";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center space-x-2 mt-4 mb-6">
      <a
        id="footer-instagram"
        href="https://instagram.com/mandarina.extrema"
        onMouseDown={() => {
          void registrarClic("/", "footer-instagram");
        }}
      >
        <Image
          className="icono-red"
          src="/images/instagram.png"
          alt="instagram"
          width="35"
          height="100"
        />
      </a>
      <a
        id="footer-spotify"
        href="https://open.spotify.com/artist/7lo1iNrrVW77oauQUED0tF"
        onMouseDown={() => {
          void registrarClic("/", "footer-spotify");
        }}
      >
        <Image
          className="icono-red spotify"
          src="/images/spotify.png"
          alt="spotify"
          width="35"
          height="100"
        />
      </a>
      <a
        id="footer-youtube"
        href="https://www.youtube.com/channel/UC1YAsQ6YbvE4lXEKux-U3Yg/featured"
        onMouseDown={() => {
          void registrarClic("/", "footer-youtube");
        }}
      >
        <Image
          className="icono-red"
          src="/images/youtube.png"
          alt="youtube"
          width="35"
          height="100"
        />
      </a>
    </div>
  );
};

export default Footer;
