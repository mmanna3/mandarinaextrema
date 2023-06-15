import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center w-screen space-x-2">
      <a href="https://instagram.com/mandarina.extrema">
        <Image
          className="icono-red"
          src="/images/instagram.png"
          alt="instagram"
          width="35"
          height="100"
        />
      </a>
      <a href="https://open.spotify.com/artist/7lo1iNrrVW77oauQUED0tF">
        <Image
          className="icono-red spotify"
          src="/images/spotify.png"
          alt="spotify"
          width="35"
          height="100"
        />
      </a>
      <a href="https://www.youtube.com/channel/UC1YAsQ6YbvE4lXEKux-U3Yg/featured">
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
