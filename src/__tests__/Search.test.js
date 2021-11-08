import React from "react";

import { render, fireEvent, screen } from "test-utils";
import "@testing-library/jest-dom/extend-expect";

import { Search } from "../components";

describe("Search component's tests", () => {
  test("search button must be disabled if there's no keyword", () => {
    render(<Search />);

    expect(screen.queryByText("ara")).not.toBeInTheDocument();
  });

  test("search button must be enabled if there's a keyword", () => {
    render(<Search />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: {
        value: "qwerty",
      },
    });

    expect(screen.getByText("ara")).toBeInTheDocument();
  });
});
