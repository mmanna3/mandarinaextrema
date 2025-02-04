const Covers = () => {
  return (
    <div className="mx-10 mt-12">
      <h1 className="text-xl mb-4 font-semibold">Covers</h1>
      <div className="mb-4">
        <p>un celu grabando</p>
      </div>
      <iframe
        width="100%"
        height="600"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1606073416&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/mandarina-extrema"
          title="Mandarina Extrema"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
          rel="noreferrer"
        >
          Mandarina Extrema
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/mandarina-extrema/sets/covers-practicamente-no-practicados"
          title="Covers grabados con el celu"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
          rel="noreferrer"
        >
          Covers grabados con el celu
        </a>
      </div>
    </div>
  );
};

export default Covers;
