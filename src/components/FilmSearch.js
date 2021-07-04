import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Buttons from "./Buttons";

const HomePage = lazy(() =>
  import("../views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "../views/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage" /* webpackChunkName: "details-page" */
  )
);

export default function FilmSearch() {
  return (
    <Router>
      <Buttons/>
        <Suspense fallback={<h1>Загружаю...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
    </Router>
  );
}
