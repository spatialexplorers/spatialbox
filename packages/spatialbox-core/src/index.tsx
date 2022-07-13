import * as React from "react";

export interface ButtonTestProps {
  label: string;
}

export function ButtonTest({ label }: ButtonTestProps) {
  return <div>Button: {label}</div>;
}
