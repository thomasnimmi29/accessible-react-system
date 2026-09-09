import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Dialog } from "./Dialog";
import { Button } from "../Button";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    title: "Dialog",
    children: null,
  },

  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete project"
        >
          <p>This action cannot be undone.</p>

          <Button variant="danger" onClick={() => setOpen(false)}>
            Delete project
          </Button>
        </Dialog>
      </>
    );
  },
};

export const Confirmation: Story = {
  args: {
    open: false,
    onClose: () => {},
    title: "Dialog",
    children: null,
  },

  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit profile</Button>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Save profile changes?"
        >
          <p>Your profile information will be updated.</p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
            }}
          >
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>

            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </div>
        </Dialog>
      </>
    );
  },
};
