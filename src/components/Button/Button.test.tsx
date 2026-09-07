import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders with an accessible name", () => {
    render(<Button>Save changes</Button>);

    expect(
      screen.getByRole("button", { name: "Save changes" })
    ).toBeInTheDocument();
  });

  it("uses primary variant by default", () => {
    render(<Button>Save changes</Button>);

    expect(
      screen.getByRole("button", { name: "Save changes" })
    ).toHaveClass("ars-button--primary");
  });

  it("applies the selected variant", () => {
    render(
      <Button variant="danger">
        Delete
      </Button>
    );

    expect(
      screen.getByRole("button", { name: "Delete" })
    ).toHaveClass("ars-button--danger");
  });

  it("handles click interaction", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick}>
        Save changes
      </Button>
    );

    await user.click(
      screen.getByRole("button", {
        name: "Save changes",
      })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not activate when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Save changes
      </Button>
    );

    await user.click(
      screen.getByRole("button", {
        name: "Save changes",
      })
    );

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("forwards native button attributes", () => {
    render(
      <Button
        type="submit"
        name="save"
        aria-describedby="save-description"
      >
        Save
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "Save",
    });

    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("name", "save");
    expect(button).toHaveAttribute(
      "aria-describedby",
      "save-description"
    );
  });

  it("keeps a consumer-provided className", () => {
    render(
      <Button className="custom-button">
        Continue
      </Button>
    );

    expect(
      screen.getByRole("button", { name: "Continue" })
    ).toHaveClass("custom-button");
  });

  it("supports keyboard activation", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick}>
        Continue
      </Button>
    );

    await user.tab();

    const button = screen.getByRole("button", {
      name: "Continue",
    });

    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});