import { Yellowtail } from "next/font/google";
import { Icon } from "./icons";
import { IconName } from "@/types/icon";

interface Amenities {
    icon: IconName;
    title: string;
}
interface ListingCardData {
    title: string;
    score: number;
    scorevisits: number;
    location: string;
    price: number;
    priceComparison: string;
    deal: boolean;
    dealImageText: string;
    image: string;
    amenities: Amenities[];
}

export interface ListingCardProps {
    colors:[string,string,string,string,string]
    ListingCardData:ListingCardData
}

/** Primary UI component for user interaction */
export const ListingCard = ({ colors,ListingCardData }: ListingCardProps) => {

  return  ( 
    <div className={"py-24 bg-[var(--color2)] cursor-default"} style={{"--color0": colors[0],"--color1": colors[1],"--color2": colors[2],"--color3": colors[3],"--color4": colors[4],} as React.CSSProperties}>
      <div className={`container flex flex-col mt-4 m-auto bg-[var(--color2)] shadow-lg border-1 border-gray-200 hover:border-[var(--color0)]  transition-all duration-300 ease-linear rounded-3xl`}>
        <div className={"flex flex-col lg:flex-row w-full "}>
          <div className="w-full lg:w-1/3  bg-[var(--color1)] h-[250px] rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none relative">
            <img
              src={ListingCardData.image} 
              alt={ListingCardData.title} 
              className="w-full h-full object-cover opacity-75 lg:rounded-l-3xl lg:rounded-t-none rounded-t-3xl"
            />
            <div className="absolute bottom-4 left-4">
              <p className="rounded-3xl px-3 py-1.5 bg-[var(--color1)] text-[var(--color0)] font-medium text-sm">{ListingCardData.dealImageText}</p>
            </div>
            <button className="group w-10 h-10 border border-[var(--color0)] rounded-full absolute top-4 right-2 cursor-pointer sm:hidden flex items-center justify-center">
              <Icon name="heart" className="size-5 text-[var(--color0)] group-hover:size-6 transition-all duration-100 ease-linear transform origin-center" />
            </button>
            <button className="group w-10 h-10 border border-[var(--color0)] rounded-full absolute top-16 right-2 cursor-pointer sm:hidden flex items-center justify-center">
              <Icon name="share" className="size-5 text-[var(--color0)] group-hover:size-6 transition-all duration-100 ease-linear transform origin-center" />
            </button>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-between h-auto lg:h-[250px] rounded-r-3xl p-6 text-[var(--color3)]" >
            <div className="flex flex-row sm:mb-3 mb-4 justify-center sm:justify-between">
              <div>
                <p className="text-2xl font-bold m-1 text-center">{ListingCardData.title}</p>
                <div className="flex items-bottom gap-1 sm:justify-start justify-center">
                  <Icon name="star" className="size-6 text-[var(--color1)]" />
                  <p className="sm:text-xl text-lg font-bold">{ListingCardData.score}</p>
                  <p className="text-[var(--color3)]/50 sm:text-xl text-lg font-medium">({ListingCardData.scorevisits}) - </p>
                  <p className="text-[var(--color3)]/80 sm:text-xl text-lg font-medium">{ListingCardData.location}</p>
                </div>
              </div>
              <div className="flex flex-col items-end hidden sm:flex">
                <div className="flex flex-row m-1 items-center">
                  <p className="rounded-3xl px-2 py-1 bg-[var(--color1)]/25 text-[var(--color0)] font-medium">Deal</p>
                  <p className="text-3xl font-bold ml-2">${ListingCardData.price}</p>
                </div>
                <p className="m-1 text-[var(--color3)]/80 font-medium">{ListingCardData.priceComparison}</p>
              </div>
            </div>
            <div className="flex flex-row sm:mb-3 mb-4 gap-4 sm:justify-start justify-center">
              {ListingCardData.amenities.map((amenity, index) => (
                <div key={index} className="flex sm:flex-row flex-col items-center">
                  <Icon 
                    name={amenity.icon} 
                    className="size-6 text-[var(--color3)]/80 mr-1"
                  />
                  <p className="text-[var(--color3)]/80 sm:text-xl text-md font-medium text-center">{amenity.title}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-2 items-center justify-center sm:justify-end">
              <button className="group w-12 h-12 border border-[var(--color3)] rounded-full flex items-center justify-center cursor-pointer hidden sm:flex">
                <Icon name="heart" className="size-6 stroke-[var(--color3)]/80 group-hover:size-7 transition-all duration-100 ease-linear transform origin-center" />
              </button>
              <button className="group w-12 h-12 border border-[var(--color3)] rounded-full flex items-center justify-center cursor-pointer hidden sm:flex">
                <Icon name="share" className="size-6 stroke-[var(--color3)]/80 group-hover:size-7 transition-all duration-100 ease-linear transform origin-center" />
              </button>
              <div className="flex flex-col items-end sm:hidden">
                <div className="flex flex-row m-1 items-center">
                  <p className="text-4xl font-bold ml-2">${ListingCardData.price}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 h-12 px-4 py-2 rounded-2xl text-white bg-[var(--color0)] hover:bg-[var(--color1)] transition-all duration-300 ease-linear cursor-pointer">
                <p>Book Now</p>
                <Icon name="calendar" className="size-7 m-auto stroke-white" />
              </button>
            </div>
            <p className="m-1 text-[var(--color3)]/80 font-medium text-center sm:hidden text-sm">{ListingCardData.priceComparison}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

