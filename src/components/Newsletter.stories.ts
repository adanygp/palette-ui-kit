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
    icon: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z",
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
