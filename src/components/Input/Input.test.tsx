import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Input } from "./Input";

describe("Input", () => {
  it("associates the label with the input", () => {
    render(
      <Input
        id="email"
        label="Email address"
      />
    );

    expect(
      screen.getByLabelText("Email address")
    ).toBeInTheDocument();
  });

  it("renders helper text", () => {
    render(
      <Input
        id="email"
        label="Email address"
        helperText="We will never share your email."
      />
    );

    const input = screen.getByLabelText("Email address");
    const helper = screen.getByText(
      "We will never share your email."
    );

    expect(helper).toBeInTheDocument();
    expect(input).toHaveAttribute(
      "aria-describedby",
      "email-helper"
    );
  });

  it("marks the input invalid when an error exists", () => {
    render(
      <Input
        id="email"
        label="Email address"
        error="Enter a valid email address."
      />
    );

    const input = screen.getByLabelText("Email address");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute(
      "aria-describedby",
      "email-error"
    );
  });

  it("associates both helper text and error text", () => {
    render(
      <Input
        id="email"
        label="Email address"
        helperText="Use your work email."
        error="Enter a valid email address."
      />
    );

    const input = screen.getByLabelText("Email address");

    expect(input).toHaveAttribute(
      "aria-describedby",
      "email-helper email-error"
    );
  });

  it("supports the required attribute", () => {
    render(
      <Input
        id="email"
        label="Email address"
        required
      />
    );

    expect(
      screen.getByLabelText("Email address")
    ).toBeRequired();
  });

  it("supports native input attributes", () => {
    render(
      <Input
        id="email"
        label="Email address"
        type="email"
        name="email"
        placeholder="name@example.com"
      />
    );

    const input = screen.getByLabelText("Email address");

    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("name", "email");
    expect(input).toHaveAttribute(
      "placeholder",
      "name@example.com"
    );
  });

  it("supports disabled state", () => {
    render(
      <Input
        id="email"
        label="Email address"
        disabled
      />
    );

    expect(
      screen.getByLabelText("Email address")
    ).toBeDisabled();
  });
});