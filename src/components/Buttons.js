import React from "react";
import { NavLink } from "react-router-dom";

function Buttons() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">MoviesPage</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Buttons;
