import { useEffect, useState } from "react";
import { match } from "path-to-regexp";

import { EVENTS } from "./consts";

// RouteParams
export type RouteParams = Record<string, string>;

type PageComponent = React.ComponentType<{
  routeParams: RouteParams;
}>;

export interface Route {
  path: string;
  Component: PageComponent;
}

interface RouterProps {
  routes: Route[];
  defaultComponent?: PageComponent;
}

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}: RouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSH_STATE, onLocationChange);
    window.addEventListener(EVENTS.POP_STATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange);
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    // use path-to-regexp to detect dynamic routes
    // /search/:query <- :query is a dynamic route
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);

    if (!matched) return false;

    // Save url parameters that are dynamic
    // and are extracted from path-to-regexp
    // Example: /search/:query
    routeParams = matched.params;
    return true;
  })?.Component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
