import type { Meta, StoryObj } from "@storybook/react";
import { ListingCard,ListingCardProps } from "./ListingCard";

const meta: Meta<typeof ListingCard> = {
  title: "Components/ListingCard",
  component: ListingCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ListingCard>;

const sampleData: ListingCardProps["ListingCardData"] = {
    title: "Kanazawa Grand Hotel",
    score: 5.0,
    scorevisits: 100,
    location: "Exelent Location",
    price: 100,
    priceComparison: "10% less than usual",
    deal: true,
    dealImageText: "50% OFF",
    image: "https://placehold.co/200x400",
    amenities:[
      {
        icon: "M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z",
        title: "3 Star Hotel",
      },
      {
        icon: "M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z",
        title: "Free Wifi",
      },
      {
        icon: "M3 11h1.2l1.6-4.3A2 2 0 0 1 7.7 5h8.6a2 2 0 0 1 1.9 1.7L19.8 11H21a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1.1a2.5 2.5 0 1 1-5 0H9.1a2.5 2.5 0 1 1-5 0H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm3.4 0h11.2l-1.1-3.6a1 1 0 0 0-.97-.7H7.4a1 1 0 0 0-.97.7L5.4 11z",
        title: "Parking",
      },
      {
        icon: "M5 4h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm12 3h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2V7zM8 2h4a2 2 0 1 1 0 4H8a2 2 0 1 1 0-4z",
        title: "Bar",
      },
    ]  
};

export const Default: Story = {
  args: {
    ListingCardData: sampleData,
    colors:["#2F855A", "#68D391", "#F7FAF8", "#1A202C", "#E53E3E"]
  },
};
