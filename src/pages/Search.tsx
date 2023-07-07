import { useEffect } from "react";

import { RouteParams } from "../Router";

interface SearchPage {
  routeParams: RouteParams;
}

export default function SearchPage({ routeParams }: SearchPage) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`;
  }, [routeParams.query]);

  return <h1>Has buscado {routeParams.query}</h1>;
}
