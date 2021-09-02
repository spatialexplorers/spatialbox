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
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </>
);
