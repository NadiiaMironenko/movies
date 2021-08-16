import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Buttons.module.css"

function Buttons() {
  return (
    <div>
      <nav>
        <ul>
          <li className={s.buttons}>
            <NavLink className={s.buttons_text} exact to="/">
              HomePage
            </NavLink>
          </li>
          <li className={s.buttons}>
            <NavLink className={s.buttons_text} to="/movies">
              MoviesPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Buttons;
