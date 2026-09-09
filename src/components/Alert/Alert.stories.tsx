import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    announce: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: "A new version of this application is available.",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    children: "Your changes were saved successfully.",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Your session will expire soon.",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "We could not save your changes.",
    variant: "error",
  },
};

export const AnnouncedError: Story = {
  args: {
    children: "Your submission could not be completed.",
    variant: "error",
    announce: true,
  },
};