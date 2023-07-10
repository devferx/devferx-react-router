/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import { Router } from "./Router";
import { Route } from "./Route";
import { Link } from "./Link";

import { getCurrentPath } from "./utils/getCurrentPath";

vi.mock("./utils/getCurrentPath", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  test("should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  test("should render 404 if no routes match", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText("404")).toBeTruthy();
  });

  test("should render the component of the route that matches", () => {
    getCurrentPath.mockReturnValue("/about");

    const routes = [
      {
        path: "/",
        Component: () => <h1>Home</h1>,
      },
      {
        path: "/about",
        Component: () => <h1>About</h1>,
      },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText("About")).toBeTruthy();
  });

  test("should navigate using Links", async () => {
    getCurrentPath.mockReturnValueOnce("/");

    render(
      <Router
        defaultComponent={() => {
          return <h1>About</h1>;
        }}
      >
        <Route
          path="/"
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">Go to About</Link>
              </>
            );
          }}
        />
        <Route path="/about" Component={() => <h1>About</h1>} />
      </Router>
    );

    // Click on the link
    const button = screen.getByText(/Go to About/);
    fireEvent.click(button);

    screen.debug();

    const aboutTitle = await screen.findByText("About");

    // // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy();
  });
});
