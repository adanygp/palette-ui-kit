import { Icon } from "./icons";
import { IconName } from "@/types/icon";

interface NewsletterData {
    icon: IconName;
    title: string;
    description: string;
    bottomText: string;
}

export interface NewsletterProps {
    colors:[string,string,string,string,string]
    NewsletterData:NewsletterData
}

/** Primary UI component for user interaction */
export const Newsletter = ({ colors,NewsletterData }: NewsletterProps) => {

  return  ( 
    <div className={`py-24 bg-[var(--color2)]`} style={{"--color0": colors[0],"--color1": colors[1],"--color2": colors[2],"--color3": colors[3],"--color4": colors[4],} as React.CSSProperties}>
      <div className={`container flex flex-col m-auto p-8  bg-[var(--color2)] shadow-lg border-3  border-[var(--color0)] rounded-3xl`}>
        <div className="flex flex-col items-center w-full max-w-[600px] m-auto">
          <Icon name={NewsletterData.icon} className="size-15 m-2 text-[var(--color1)]"/>
          <h1 className="text-3xl font-bold m-2 text-center">{NewsletterData.title}</h1>
          <p className="m-2 text-center">{NewsletterData.description}</p>
          <form className="flex m-2">
            <input className="px-4 py-2 rounded-bl-2xl rounded-tl-2xl bg-white" type="email" placeholder="Enter your email" />
            <button className="px-4 py-2 rounded-br-2xl rounded-tr-2xl text-white bg-[var(--color0)] hover:bg-[var(--color1)] transition-all duration-300 ease-linear" type="submit">Subscribe</button>
          </form>
          <p className="m-2 text-center">{NewsletterData.bottomText}</p>
        </div>
      </div>
    </div>
  );
};
