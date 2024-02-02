import FooterRedesSociales from "@/components/footerRedesSociales";
import Image from "next/image";

const Linktree = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-center">
          <Image
            // className={`border border-slate-950 rounded-full`}
            src={"/images/mandarina.png"}
            alt="mandarina"
            width="180"
            height="120"
          />
        </div>
        <div className="text-2xl text-center">@mandarina.extrema</div>
      </div>

      <div className="mt-10">
        <div className="text-xl text-center border border-slate-950 py-4 px-6 mb-5">
          <a
            href="https://open.spotify.com/album/65Oy2PHwUzD1SxcI7D9ode?si=7ZBUOtObRVWQavcDHMTNwg"
            id="linktree-boton-ultima-cancion"
          >
            <div className="flex flex-row justify-center">
              <p>Disco</p>
              <Image
                className="ml-3"
                src={"/images/spotify.png"}
                alt="spotify-cancion"
                width="24"
                height="1"
              />
            </div>
            <div className="text-[0.95rem] mt-1">
              <p>"Un departamento con paredes verdes"</p>
            </div>
          </a>
        </div>
        <a
          // href="https://www.youtube.com/watch?v=wAl7HHFWCIg" canción pa desayuno
          // Generá el deep link con "linktw.in" (mail dana bar)
          // O mejor, averiguá cómo hacer tu propio deep link
          href="https://linktw.in/oLoQNj"
          className="flex text-xl text-center justify-center border border-slate-950 py-4 px-6 mb-5"
          id="linktree-boton-el-mejor-video"
        >
          <p className="">Video con letras</p>
          <Image
            className="ml-3"
            src={"/images/youtube.png"}
            alt="youtube-video"
            width="24"
            height="1"
          />
        </a>
        <div className="flex justify-between">
          <a
            href="/covers"
            className="flex text-xl text-center border border-slate-950 py-4 px-8 mb-5"
            id="linktree-boton-covers"
          >
            Covers
          </a>
          <a
            href="/blog"
            className="flex text-xl text-center border border-slate-950 py-4 px-8 mb-5"
            id="linktree-boton-cuentos"
          >
            Cuentos
          </a>
        </div>
        <div className="mt-10">
          <FooterRedesSociales />
        </div>
      </div>
    </div>
  );
};

export default Linktree;
