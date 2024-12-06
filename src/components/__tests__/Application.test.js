import React from "react";
import { render, cleanup, fireEvent, findByText,  prettyDOM, getByAltText, getAllByTestId, getByPlaceholderText, getByText  } from "@testing-library/react";
import Application from "components/Application";

afterEach(cleanup);

it("defaults to Monday and changes the schedule when a new day is selected", async () => {
  const { queryByText, getByText,findByText } = render(<Application />);

  await findByText("Monday");

  fireEvent.click(getByText("Tuesday"));
  expect(queryByText("Leopold Silvers")).toBeInTheDocument();
});

it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
  const { container } = render(<Application />);

  await findByText(container, "Archie Cohen");

  const appointments = getAllByTestId(container, "appointment");
  const appointment = appointments[0];

  fireEvent.click(getByAltText(appointment, "Add"));

  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" },
  });
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

  fireEvent.click(getByText(appointment, "Save"));

  console.log(prettyDOM(appointment));
});

