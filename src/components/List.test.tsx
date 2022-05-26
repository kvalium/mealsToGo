import { render } from "@testing-library/react-native";
import React from "react";
import { List } from "./List";

describe("<List />", () => {
  it("Returns expect content", () => {
    const { getByText } = render(<List />);
    expect(getByText("list")).toBeTruthy();
  });
});
