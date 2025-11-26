import { Yellowtail } from "next/font/google";

interface Amenities {
    icon: string;
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
        <div className={"flex flex w-full "}>
          <div className="w-1/3  bg-[var(--color1)] h-[250px] rounded-l-3xl relative">
            <img
              src={ListingCardData.image} 
              alt={ListingCardData.title} 
              className="w-full h-full object-cover opacity-75 rounded-l-3xl"
            />
            <div className="absolute bottom-4 left-4">
              <p className="rounded-3xl px-3 py-1.5 bg-[var(--color1)] text-[var(--color0)] font-medium text-sm">50%OFF</p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-between h-[250px] rounded-r-3xl p-6 text-[var(--color3)]" >
            <div className="flex flex-row justify-between mb-3">
              <div>
                <div className="">
                  <p className="text-2xl font-bold m-1">{ListingCardData.title}</p>
                </div>
                <div className="flex items-bottom gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={colors[1]} className="size-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xl font-bold">{ListingCardData.score}</p>
                  <p className="text-[var(--color3)]/50 text-xl font-medium">({ListingCardData.scorevisits}) - </p>
                  <p className="text-[var(--color3)]/80 text-xl font-medium">{ListingCardData.location}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-row m-1 items-center">
                  <p className="rounded-3xl px-2 py-1 bg-[var(--color1)]/25 text-[var(--color0)] font-medium">{ListingCardData.dealImageText}</p>
                  <p className="text-3xl font-bold ml-2">${ListingCardData.price}</p>
                </div>
                <p className="m-1 text-[var(--color3)]/80 font-medium">{ListingCardData.priceComparison}</p>
              </div>
            </div>
            <div className="flex flex-row mb-3 gap-4">
              {ListingCardData.amenities.map((amenity, index) => (
                <div key={index} className="flex flex-row items-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-[var(--color3)]/80 mr-1">
                    <path fillRule="evenodd" d={amenity.icon} clipRule="evenodd" />
                  </svg>
                  <p className="text-[var(--color3)]/80 text-xl font-medium">{amenity.title}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-2 items-center justify-end">
              <button className="group w-12 h-12 border border-[var(--color3)] rounded-full flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 m-auto stroke-[var(--color3)]/80 group-hover:size-7 group-hover:fill-[var(--color3)]/80 transition-all duration-100 ease-linear">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                </svg>
              </button>
              <button className="group w-12 h-12 border border-[var(--color3)] rounded-full flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 m-auto stroke-[var(--color3)]/80 group-hover:size-7 group-hover:fill-[var(--color3)]/80 transition-all duration-100 ease-linear">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
                </svg>
              </button>
              <button className="flex items-center gap-2 h-12 px-4 py-2 rounded-2xl text-white bg-[var(--color0)] hover:bg-[var(--color1)] transition-all duration-300 ease-linear cursor-pointer">
                <p>Book Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-7 m-auto stroke-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

