import { render } from "@testing-library/react-native";
import React from "react";
import { RestaurantList } from "./RestaurantList";

describe("<List />", () => {
  it("Returns expect content", () => {
    const { getByText } = render(<RestaurantList />);
    expect(getByText("list")).toBeTruthy();
  });
});
