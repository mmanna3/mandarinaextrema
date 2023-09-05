"use client";
import BotonNavegacion from "./botonNavegacion";

const Header = () => {
  return (
    <div className="flex justify-end space-x-1 pr-1 pt-1">
      <BotonNavegacion id="header-home" texto="." url="/" />
      <BotonNavegacion id="header-covers" texto="covers" url="/covers" />
      <BotonNavegacion id="header-blog" texto="blog" url="/blog" />
    </div>
  );
};

export default Header;
