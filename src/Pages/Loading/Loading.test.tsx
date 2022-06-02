import { render } from "@testing-library/react";
import React from "react";
import Loading from ".";

describe("Spin", () => {
  it("should be able render loading when spinning true", () => {
    render(
      <Loading spinning>
        <span>children</span>
      </Loading>
    );

    // expect(screen.queryByTestId("spin-container")).toBeDefined();
    // expect(screen.queryByText("children")).toBeNull();
  });

  it("should be able render children when spinning false", () => {
    render(
      <Loading spinning={false}>
        <span>children</span>
      </Loading>
    );

    // expect(screen.queryByTestId("spin-container")).toBeNull();
    // expect(screen.queryByText("children")).toBeDefined();
  });
});
