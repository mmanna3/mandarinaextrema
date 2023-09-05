import Link from "next/link";

interface Props {
  texto: string;
  url: string;
  id: string;
}

const BotonNavegacion = (props: Props) => {
  return (
    <Link
      id={props.id}
      className="px-6 py-2 border-black border"
      // onClick={() => console.log("a")}
      href={props.url}
    >
      {props.texto}
    </Link>
  );
};

export default BotonNavegacion;
