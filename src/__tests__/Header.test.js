import React from "react";
import "@testing-library/jest-dom";

import { render, waitFor, screen } from "test-utils";

import { Header } from "../components";

describe("Testing the Header compoenent", () => {
  it("exists on the page", () => {
    render(<Header />);

    expect(screen.getByText(/özgürcinefil/i)).toBeInTheDocument();
  });

  it("has the the link with correct href in it", () => {
    render(<Header />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://gartun.netlify.app/ozgur-cinefil/dist/home/index.html"
    );
  });
});
