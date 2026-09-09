import type { HTMLAttributes, ReactNode } from "react";
import "./Alert.css";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  children: ReactNode;
  announce?: boolean;
}

export function Alert({
  variant = "info",
  announce = false,
  children,
  className = "",
  ...props
}: AlertProps) {
  const classes = [
    "ars-alert",
    `ars-alert--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      role={announce ? "alert" : undefined}
      {...props}
    >
      {children}
    </div>
  );
}