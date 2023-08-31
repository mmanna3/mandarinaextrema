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
        <a
          href="https://open.spotify.com/track/5o5nrNtWkMdhDKxAmGJtp5?si=d69f29c52318493f"
          className="flex text-xl text-center border border-slate-950 py-4 px-6 mb-5"
        >
          <p>Última canción: Epílogo</p>
          <Image
            className="ml-3"
            src={"/images/spotify.png"}
            alt="spotify-cancion"
            width="24"
            height="1"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=wAl7HHFWCIg"
          className="flex text-xl text-center border border-slate-950 py-4 px-6 mb-5"
        >
          <p className="ml-10">El mejor video</p>
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
          >
            Covers
          </a>
          <a
            href="/blog"
            className="flex text-xl text-center border border-slate-950 py-4 px-8 mb-5"
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
