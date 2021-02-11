import React from "react";
import { queryByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("renders without errors", () => {
  render(<ContactForm />);
});

test("Form can be filled out, submit adds new info", () => {
  // Render
  render(<ContactForm />);
  // Input Queries
  // const firstNameInput = screen.getByLabelText(/first name/i)
  const firstNameInput = screen.getByPlaceholderText(/edd/i)
  const lastNameInput = screen.getByLabelText(/last name/i);
  // const emailInput = screen.getByLabelText(/email/i)
  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
  const messageInput = screen.getByLabelText(/message/i);
});
