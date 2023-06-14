"use client";
import BotonNavegacion from "./botonNavegacion";

const Header = () => {
  return (
    <div className="flex justify-end space-x-1 pr-1 pt-1">
      <BotonNavegacion texto="covers" url="/covers" />
      <BotonNavegacion texto="blog" url="/blog" />
    </div>
  );
};

export default Header;
