import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import { Dialog } from "./Dialog";
import { Button } from "../Button";

describe("Dialog", () => {
  it("does not render when closed", () => {
    render(
      <Dialog open={false} onClose={() => {}} title="Delete project">
        <p>This action cannot be undone.</p>
      </Dialog>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders with an accessible name when open", () => {
    render(
      <Dialog open onClose={() => {}} title="Delete project">
        <p>This action cannot be undone.</p>
      </Dialog>,
    );

    expect(
      screen.getByRole("dialog", {
        name: "Delete project",
      }),
    ).toBeInTheDocument();
  });

  it("marks the dialog as modal", () => {
    render(
      <Dialog open onClose={() => {}} title="Delete project">
        Content
      </Dialog>,
    );

    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });

  it("moves focus inside the dialog", () => {
    render(
      <Dialog open onClose={() => {}} title="Delete project">
        <Button>Delete project</Button>
      </Dialog>,
    );

    expect(
      screen.getByRole("button", {
        name: "Close dialog",
      }),
    ).toHaveFocus();
  });

  it("closes when Escape is pressed", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <Dialog open onClose={handleClose} title="Delete project">
        Content
      </Dialog>,
    );

    await user.keyboard("{Escape}");

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("closes using the close button", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <Dialog open onClose={handleClose} title="Delete project">
        Content
      </Dialog>,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Close dialog",
      }),
    );

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it("keeps keyboard focus inside the dialog", async () => {
    const user = userEvent.setup();

    render(
      <Dialog open onClose={() => {}} title="Delete project">
        <Button variant="danger">Delete project</Button>
      </Dialog>,
    );

    const closeButton = screen.getByRole("button", {
      name: "Close dialog",
    });

    const deleteButton = screen.getByRole("button", {
      name: "Delete project",
    });

    expect(closeButton).toHaveFocus();

    await user.tab();

    expect(deleteButton).toHaveFocus();

    await user.tab();

    expect(closeButton).toHaveFocus();

    await user.tab({ shift: true });

    expect(deleteButton).toHaveFocus();
  });
  it("returns focus to the previously focused element", async () => {
    const user = userEvent.setup();

    function TestDialog() {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open dialog</Button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            title="Delete project"
          >
            Content
          </Dialog>
        </>
      );
    }

    render(<TestDialog />);

    const trigger = screen.getByRole("button", {
      name: "Open dialog",
    });

    await user.click(trigger);

    expect(
      screen.getByRole("button", {
        name: "Close dialog",
      }),
    ).toHaveFocus();

    await user.keyboard("{Escape}");

    expect(trigger).toHaveFocus();
  });
});
