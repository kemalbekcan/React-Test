import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("three objects given by default should be rendered", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("input and button must be present in the component", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("When a string is entered and the button is pressed, it should be added to the list", () => {
    const name = "Mehmet";
    userEvent.type(input, name);
    userEvent.click(button);

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
