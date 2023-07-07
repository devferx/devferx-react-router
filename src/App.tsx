import { useEffect, useState } from "react";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import "./App.css";

enum events {
  PUSH_STATE = "pushState",
  POP_STATE = "popstate",
}

export function navigate(href: string) {
  window.history.pushState({}, "", href);
  // Create custom event
  const navigationEvent = new Event(events.PUSH_STATE);
  window.dispatchEvent(navigationEvent);
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(events.PUSH_STATE, onLocationChange);
    window.addEventListener(events.POP_STATE, onLocationChange);

    return () => {
      window.removeEventListener(events.PUSH_STATE, onLocationChange);
      window.removeEventListener(events.POP_STATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
