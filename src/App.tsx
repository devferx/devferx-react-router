import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/404";
import SearchPage from "./pages/Search";

import { RouteItem, Router } from "./Router";
import { Route } from "./Route";

import "./App.css";

const appRoutes: RouteItem[] = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={NotFoundPage}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  );
}

export default App;
