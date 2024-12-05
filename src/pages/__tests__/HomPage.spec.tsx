import { describe, expect, test } from "vitest";
import HomePage from "../HomePage";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  test("check if everything ok", () => {
    render(<HomePage />);
    const demo = screen.getByText("display");
    expect(demo).toBeInTheDocument();
  });
});
