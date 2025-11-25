import { useState, useCallback, memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";

interface Slider {
    title: string;
    description: string[];
    image: string;
    icon: string;
}

export interface FeatureSliderProps {
    FeatureSlider: Slider[]
    colors:[string,string,string,string,string]
}

interface SliderFeatureProps {
  slider: Slider;
  isActive: boolean;
  slideTo: () => void;
  colors:[string,string,string,string,string]
}

const SliderFeature = memo(({ slider, isActive, slideTo, colors }: SliderFeatureProps) => (
  <div 
    onClick={slideTo}
    className={`${!isActive && 'sm:opacity-50'} cursor-pointer flex flex-col`}
  >
    <div className="flex flex-row items-center py-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={colors[1]} className="size-6 mr-3">
        <path fillRule="evenodd" d={slider.icon} clipRule="evenodd" />
      </svg>
      <h2 className={`text-[var(--bg-color3)] text-2xl font-bold`} style={{"--bg-color3": colors[3] } as React.CSSProperties}>  
        {slider.title}
      </h2>
    </div>
    <ul className="list-disc">
    {slider.description.map((item, index) => (
        <li key={index} className={`text-[var(--bg-color3)] text-lg ml-8`} style={{"--bg-color3": colors[3] } as React.CSSProperties}>{item}</li>
      ))}
    </ul>
  </div>
));

SliderFeature.displayName = 'SliderItem';

const useSliderHook = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const slideTo = useCallback((index: number) => {
    if (swiper) {
      swiper.slideToLoop(index);
    }
  }, [swiper]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min((elapsed / 3000) * 100, 100);
      setProgress(percentage);
    }, 100);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return {
    swiper,
    activeIndex,
    progress,
    setSwiper,
    handleSlideChange,
    slideTo
  };
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
/** Primary UI component for user interaction */
export const FeatureSlider = ({ FeatureSlider, colors }: FeatureSliderProps) => {
  const { 
    swiper, 
    activeIndex,
    progress,
    setSwiper, 
    handleSlideChange, 
    slideTo
  } = useSliderHook();

  const isMobile = useIsMobile();

  return isMobile ? (
    <div className={`py-24 bg-[var(--bg-color)]`}  style={{"--bg-color": colors[2] } as React.CSSProperties}>
      <div className={`container m-auto flex flex-row items-stretch p-8 shadow-lg border-3 rounded-3xl border-transparent 
        [background:linear-gradient(var(--bg-color2),var(--bg-color2))_padding-box,linear-gradient(135deg,var(--bg-color0),var(--bg-color2),var(--bg-color2))_border-box]`}
        style={{"--bg-color0": colors[0],"--bg-color2": colors[2] } as React.CSSProperties}>
        <div className="flex flex-col w-full h-full justify-evenly">
          {FeatureSlider.map((slider, index) => (
            <>
              <SliderFeature
                key={slider.title}
                slider={slider}
                isActive={activeIndex === index}
                slideTo={() => slideTo(index)}
                colors={colors}
              />
              <div className={`w-full h-full bg-[var(--bg-color0)] relative rounded-xl my-5`} 
                      style={{"--bg-color0": colors[0] } as React.CSSProperties}>
                <img
                  src={slider.image} 
                  alt={slider.title} 
                  className="w-full h-56 object-cover opacity-75 rounded-xl"
                />
                </div>
            </>   
          ))}
        </div>
      </div>
    </div>
    ) : ( 
    <div className={`py-24 bg-[var(--bg-color)]`}  style={{"--bg-color": colors[2] } as React.CSSProperties}>
      <div className={`container m-auto flex flex-row items-stretch h-[500px] p-8 shadow-lg border-3 rounded-3xl border-transparent 
         [background:linear-gradient(var(--bg-color2),var(--bg-color2))_padding-box,linear-gradient(135deg,var(--bg-color0),var(--bg-color2),var(--bg-color2))_border-box]`}
         style={{"--bg-color0": colors[0],"--bg-color2": colors[2] } as React.CSSProperties}>
        <div className="flex flex-col w-1/2 h-full justify-evenly">
          {FeatureSlider.map((slider, index) => (
            <SliderFeature
              key={slider.title}
              slider={slider}
              isActive={activeIndex === index}
              slideTo={() => slideTo(index)}
              colors={colors}
            />
          ))}
        </div>
        <div className="hidden sm:flex w-1/2 h-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
          >
            {FeatureSlider.map((slider) => (
              <SwiperSlide key={slider.title} className="relative">
                <div className={`w-full h-full bg-[var(--bg-color0)] relative rounded-xl`} 
                      style={{"--bg-color0": colors[0] } as React.CSSProperties}>
                <img
                  src={slider.image} 
                  alt={slider.title} 
                  className="w-full h-full object-cover opacity-75 rounded-xl"
                />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-4">
                {FeatureSlider.map((_,index) => (
                  <div key={index} onClick={() => slideTo(index)} className="h-1.5 bg-gray-200 rounded-full overflow-hidden flex-1 cursor-pointer">
                    <div
                      className={`h-full bg-[var(--bg-color0)] transition-all duration-300 ease-linear`}
                      style={{width: index === activeIndex ? `${progress}%` :'0%', "--bg-color0": colors[0] } as React.CSSProperties}
                    />
                  </div>
                ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
