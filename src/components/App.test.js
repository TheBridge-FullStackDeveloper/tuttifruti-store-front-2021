import React from "react";
import { cleanup, render } from "@testing-library/react";

import { App } from "./App";

afterEach(cleanup);

it("should render App", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hello world")).toBeTruthy();
});
