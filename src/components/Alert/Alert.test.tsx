import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders its content", () => {
    render(
      <Alert>
        A new application update is available.
      </Alert>
    );

    expect(
      screen.getByText(
        "A new application update is available."
      )
    ).toBeInTheDocument();
  });

  it("uses the info variant by default", () => {
    render(
      <Alert>
        Information
      </Alert>
    );

    expect(
      screen.getByText("Information")
    ).toHaveClass("ars-alert--info");
  });

  it("applies the selected variant", () => {
    render(
      <Alert variant="error">
        Something went wrong.
      </Alert>
    );

    expect(
      screen.getByText("Something went wrong.")
    ).toHaveClass("ars-alert--error");
  });

  it("does not use role alert by default", () => {
    render(
      <Alert>
        Information
      </Alert>
    );

    expect(
      screen.queryByRole("alert")
    ).not.toBeInTheDocument();
  });

  it("uses role alert when announce is enabled", () => {
    render(
      <Alert announce>
        Something went wrong.
      </Alert>
    );

    expect(
      screen.getByRole("alert")
    ).toHaveTextContent("Something went wrong.");
  });

  it("forwards native div attributes", () => {
    render(
      <Alert
        id="system-message"
        data-testid="alert"
      >
        Information
      </Alert>
    );

    const alert = screen.getByTestId("alert");

    expect(alert).toHaveAttribute(
      "id",
      "system-message"
    );
  });

  it("preserves a custom className", () => {
    render(
      <Alert className="custom-alert">
        Information
      </Alert>
    );

    expect(
      screen.getByText("Information")
    ).toHaveClass("custom-alert");
  });
});