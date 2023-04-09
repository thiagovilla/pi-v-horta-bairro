import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div>
      <Link to="/">Horta do Bairro</Link>
      <ul>
        <li>
          <Link to="/hortas">Hortas próximas</Link>
        </li>
        <li>
          <Link to="/cesta">Cesta</Link>
        </li>
        <li>
          <Link to="/pedidos">Pedidos</Link>
        </li>
      </ul>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default TopBar;
