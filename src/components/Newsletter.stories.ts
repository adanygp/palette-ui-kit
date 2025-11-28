import type { Meta, StoryObj } from "@storybook/react";
import { Newsletter,NewsletterProps } from "./Newsletter";

const meta: Meta<typeof Newsletter> = {
  title: "Components/Newsletter",
  component: Newsletter,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Newsletter>;

const sampleData: NewsletterProps["NewsletterData"] = {
    icon: "mail",
    title: "Subscribe Newsletter", 
    description: "Stay informed with exclusive updates, tips, and special offers delivered straight to your inbox. Subscribe to our newsletter and never miss a thing!",
    bottomText: "By subscribing, you agree to our terms and conditions.",
};

export const Default: Story = {
  args: {
    NewsletterData: sampleData,
    colors:["#2F855A", "#68D391", "#F7FAF8", "#1A202C", "#E53E3E"]
  },
};
