import { fuente } from "@/fuente";
import Link from "next/link";
import React from "react";

interface LinkInclinadoProps {
  className?: string;
  href: string;
  text: string;
}

const LinkInclinado: React.FC<LinkInclinadoProps> = ({
  className = "",
  href,
  text,
}) => {
  return (
    <Link
      href={href}
      className={`${fuente.className} whitespace-nowrap items-start text-4xl ml-20 font-bold transform ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkInclinado;
