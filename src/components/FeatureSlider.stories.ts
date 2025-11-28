import type { Meta, StoryObj } from "@storybook/react";
import { FeatureSlider, FeatureSliderProps } from "./FeatureSlider";

const meta: Meta<typeof FeatureSlider> = {
  title: "Components/FeatureSlider",
  component: FeatureSlider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureSlider>;

const sampleData: FeatureSliderProps["FeatureSlider"] = [
  {
    title: "Fast Performance",
    description: ["Experience lightning-fast load times and seamless navigation.", "lorem ipsum dolor sit amet", "lorem ipsum dolor sit amet"],
    image: "https://placehold.co/600x400",
    icon: "fire",
  },
  {
    title: "Secure by Design", 
    description: ["We prioritize your security with built-in protections.", "lorem ipsum dolor sit amet"],
    image: "https://placehold.co/800x200",
    icon: "chemistry",
  },
  {
    title: "Customizable", 
    description: ["Easily adapt features to suit your workflow."],
    image: "https://placehold.co/200x400",
    icon: "lightning",
  },
];

export const Default: Story = {
  args: {
    FeatureSlider: sampleData,
    colors:["#2F855A", "#68D391", "#F7FAF8", "#1A202C", "#E53E3E"]
  },
};