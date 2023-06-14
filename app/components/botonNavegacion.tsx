interface Props {
  texto: string;
  url: string;
}

const BotonNavegacion = (props: Props) => {
  return (
    <button
      className="px-6 py-2 border-black border"
      onClick={() => console.log("a")}
    >
      {props.texto}
    </button>
  );
};

export default BotonNavegacion;
