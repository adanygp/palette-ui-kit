interface NewsletterData {
    icon: string;
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
    <div className={`py-24 bg-[var(--bg-color)]`}   style={{"--bg-color": colors[2]} as React.CSSProperties}>
      <div className={`container flex flex-col m-auto p-8  bg-[var(--bg-color)] shadow-lg border-3  border-[var(--border-color)] rounded-3xl`}
          style={{"--bg-color": colors[2], "--border-color": colors[0]} as React.CSSProperties}>
        <div className="flex flex-col items-center w-full max-w-[600px] m-auto">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={colors[1]} className="size-15 m-2">
            <path fillRule="evenodd" d={NewsletterData.icon} clipRule="evenodd" />
          </svg>
          <h1 className="text-3xl font-bold m-2 text-center">{NewsletterData.title}</h1>
          <p className="m-2 text-center">{NewsletterData.description}</p>
          <form className="flex m-2">
            <input className="px-4 py-2 rounded-bl-2xl rounded-tl-2xl bg-white" type="email" placeholder="Enter your email" />
            <button className="px-4 py-2 rounded-br-2xl rounded-tr-2xl text-white bg-[var(--bg-color0)] hover:bg-[var(--bg-color2)] transition-all duration-300 ease-linear"   style={{"--bg-color0": colors[0],"--bg-color2": colors[1] } as React.CSSProperties} type="submit">Subscribe</button>
          </form>
          <p className="m-2 text-center">{NewsletterData.bottomText}</p>
        </div>
      </div>
    </div>
  );
};
