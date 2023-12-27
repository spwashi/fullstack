import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo as LogoComp } from "../Logo";

export default {
  title: "Demo/Layout/Regions/Logo",
  component: LogoComp,
} as ComponentMeta<typeof LogoComp>;

const Template: ComponentStory<typeof LogoComp> = () => <LogoComp />;

export const Logo = Template.bind({});
