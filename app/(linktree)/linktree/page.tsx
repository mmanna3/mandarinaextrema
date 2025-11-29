/* eslint-disable react/no-unescaped-entities */
import FooterRedesSociales from "@/components/footerRedesSociales";
import Image from "next/image";

const Linktree = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-center">
          <Image
            // className={`border border-slate-950 rounded-full`}
            className="animate-[temblar_3s_infinite] hover:animate-[temblar_1s_infinite]"
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
            href="https://open.spotify.com/track/53UNp5BLZR8Ao5XVy0P62x?si=47582aeb65ff49c3"
            id="linktree-boton-ultima-cancion"
          >
            <div className="flex flex-row justify-center">
              <p className="tracking-wider">Himno de nosotros</p>
              <Image
                className="ml-2 mt-[2px] w-5 h-5"
                src={"/images/spotify.png"}
                alt="spotify-cancion"
                width="1"
                height="1"
              />
            </div>
            <div className="text-[0.95rem] mt-1">
              <p>Nuevo temita</p>
            </div>
          </a>
        </div>
        <div className="text-xl text-center border border-slate-950 py-4 px-6 mb-5">
          <a
            // href="https://www.youtube.com/watch?v=wAl7HHFWCIg" canción pa desayuno
            // Generá el deep link con "linktw.in" (mail dana bar)
            // O mejor, averiguá cómo hacer tu propio deep link
            href="https://www.passline.com/eventos/para-nos-rock-en-movimiento"
            id="linktree-boton-el-mejor-video"
          >
            <div className="flex flex-row justify-center">
              <p className="tracking-wider">Entradas 5/12 Palermo</p>
            </div>
            <div className="text-[0.95rem] mt-1">
              <p>Passline (junto a Para Nos)</p>
            </div>
            {/* <Image
              className="ml-2 mt-[2px] w-5 h-5"
              src={"/images/youtube.png"}
              alt="youtube-video"
              width="1"
              height="1"
            /> */}
          </a>
        </div>
        {/* <div className="flex justify-between">
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
        </div> */}
        <div className="mt-10">
          <FooterRedesSociales />
        </div>
      </div>
    </div>
  );
};

export default Linktree;
