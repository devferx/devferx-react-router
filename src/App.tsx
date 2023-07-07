import { Suspense, lazy } from "react";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";
import SearchPage from "./pages/Search";

import { RouteItem, Router } from "./Router";
import { Route } from "./Route";

import "./App.css";

const LazyAboutPage = lazy(() => import("./pages/About"));

const appRoutes: RouteItem[] = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <Suspense fallback={null}>
      <main>
        <Router routes={appRoutes} defaultComponent={NotFoundPage}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </main>
    </Suspense>
  );
}

export default App;
