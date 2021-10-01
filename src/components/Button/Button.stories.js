// Button.stories.js | Button.stories.jsx

import React from "react";

import Button from "./Button.component";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    backgroundColor: { control: 'color' },
    primary: true,
    label: 'Button',
  },
};

export const Primary = (props) => <Button {...props}>Button Test</Button>;
