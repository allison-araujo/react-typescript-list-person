import { render } from "@testing-library/react";
import React from "react";
import Loading from "./index";

describe("Loading", () => {
  it("should be able render loading when spinning true", () => {
    render(
      <Loading spinning>
        <span>children</span>
      </Loading>
    );
  });

  it("should be able render children when spinning false", () => {
    render(
      <Loading spinning={false}>
        <span>children</span>
      </Loading>
    );
  });
});
