import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import ToogleSelector from "./index";

test("checkboxA handleChange is called when clicked", () => {
  const handleChange = jest.fn();
  render(
    <ToogleSelector
      label={"Listar"}
      checked={false}
      handleChange={handleChange}
    />
  );

  const checkboxA = screen.getByRole("Listar");
  fireEvent.click(checkboxA);
  expect(handleChange).toHaveBeenCalledTimes(1);

  const checkbox = screen.getByLabelText("pessoas");
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("checkbox is checked when true", () => {
  const handleChangeA = jest.fn();
  render(
    <ToogleSelector
      label={"Listar"}
      checked={false}
      handleChange={handleChangeA}
    />
  );

  const checkboxA = screen.getByLabelText("Listar");
  expect(checkboxA).toEqual(false);
});

test("checkbox is unchecked when false value false", () => {
  const handleChangeA = jest.fn();
  render(
    <ToogleSelector
      label={"Listar"}
      checked={false}
      handleChange={handleChangeA}
    />
  );

  const checkboxA = screen.getByLabelText("Listar") as HTMLInputElement;
  expect(checkboxA.checked).toEqual(false);
});
