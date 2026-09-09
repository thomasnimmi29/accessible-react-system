import type { InputHTMLAttributes } from "react";
import "./Input.css";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
}

export function Input({
  id,
  label,
  helperText,
  error,
  required,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [
    "ars-input",
    error ? "ars-input--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ars-field">
      <label className="ars-field__label" htmlFor={inputId}>
        {label}
        {required && (
          <span aria-hidden="true" className="ars-field__required">
            *
          </span>
        )}
      </label>

      <input
        id={inputId}
        className={classes}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...props}
      />

      {helperText && (
        <p id={helperId} className="ars-field__helper">
          {helperText}
        </p>
      )}

      {error && (
        <p id={errorId} className="ars-field__error">
          {error}
        </p>
      )}
    </div>
  );
}