import type { Meta, StoryObj } from "@storybook/react";
import { ListingCard, ListingCardProps } from "./ListingCard";

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
    amenities: [
      {
        icon: "star",
        title: "3 Star Hotel",
      },
      {
        icon: "wifi",
        title: "Free Wifi",
      },
      {
        icon: "car",
        title: "Parking",
      },
      {
        icon: "users",
        title: "Bar",
      },
    ]  
};

export const Default: Story = {
  args: {
    ListingCardData: sampleData,
    colors: ["#2F855A", "#68D391", "#F7FAF8", "#1A202C", "#E53E3E"]
  },
};