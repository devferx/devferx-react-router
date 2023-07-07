import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import { Route, Router } from "./Router";

import "./App.css";

const appRoutes: Route[] = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/twitch",
    Component: () => <h1>Nuevo Twitch</h1>,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  );
}

export default App;
