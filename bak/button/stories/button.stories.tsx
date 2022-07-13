import * as React from "react";
import { Button } from "../src";

export default {
  title: "Button",
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    )
  ]
};

export const basic = () => (
  <>
    <Button variant="cta">Button CTA</Button>
    <Button variant="primary">Button Primary</Button>
    <Button variant="secondary">Button Secondary</Button>
    <Button variant="outline">Button outline</Button>
  </>
);

export const withSizes = () => (
  <>
    <Button size="xs">Button xs</Button>
    <Button size="sm">Button sm</Button>
    <Button size="md">Button md</Button>
    <Button size="lg">Button lg</Button>
  </>
);
