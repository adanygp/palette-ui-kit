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
    icon: "M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z",
  },
  {
    title: "Secure by Design", 
    description: ["We prioritize your security with built-in protections.", "lorem ipsum dolor sit amet"],
    image: "https://placehold.co/800x200",
    icon: "M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z",
  },
  {
    title: "Customizable", 
    description: ["Easily adapt features to suit your workflow."],
    image: "https://placehold.co/200x400",
    icon: "M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z",
  },
];

export const Default: Story = {
  args: {
    FeatureSlider: sampleData,
    colors:["#2F855A", "#68D391", "#F7FAF8", "#1A202C", "#E53E3E"]
  },
};