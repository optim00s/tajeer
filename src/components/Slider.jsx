"use client";
import { useState, useEffect } from "react";
import { Circle, CircleDot, ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideSet = [
    {
      id: 0,
      imagePath: "/images/slide-1.png",
      alt: "Tajeer main product display",
      title: "Tajeer",
      subtitle: "Perfect tailored expreince for you",
      buttonText: "Shop Now"
    },
    {
      id: 1,  
      imagePath: "/images/slide-2.png",
      alt: "New Tajeer collection showcase",
      title: "New Tajeer Collection",
      subtitle: "Our latest collection, defined by master craftsment",
      buttonText: "View Collection"
    },
    {
      id: 2,
      imagePath: "/images/slide-3.png",
      alt: "Camel - Tajeer Delivery app announcement",
      title: "Camel - Tajeer Delivery",
      subtitle: "All new delivery app for our couirer",
      buttonText: "Learn More"
    },
  ];

  const handleSlideChoose = (arg) => {
    setCurrentSlide(arg);  
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideSet.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, slideSet.length]);

  return (
    <div className="relative overflow-hidden min-h-screen mx-3 mt-20 rounded-3xl">
      <button className="hidden md:block absolute top-1/2 left-6 z-30" onClick={() => {
        const newIndex = currentSlide === 0 ? slideSet.length - 1 : currentSlide - 1;
        handleSlideChoose(newIndex);
      }}>
        <ChevronLeft size={32}/>
      </button>
      <button className="hidden md:block absolute top-1/2 right-6 z-30" onClick={() => {
        const newIndex = currentSlide === slideSet.length - 1 ? 0 : currentSlide + 1;
        handleSlideChoose(newIndex);
      }}>
        <ChevronRight size={32}/>
      </button>

      {slideSet.map((slide) => (
        <div key={slide.id} className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 min-h-screen bg-center bg-cover transition-all duration-300 ease-in-out ${currentSlide === slide.id ? 'opacity-100 translate-x-0' : currentSlide < slide.id ? 'opacity-0' : 'opacity-0'} `} style={{ backgroundImage: `url(${slide.imagePath})` }}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-7 backdrop-blur-sm backdrop-brightness-75">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                  <div className="tracking-wider text-4xl md:text-5xl lg:text-6xl">{slide.title}</div>
                  <div className="text-xl md:text-2xl">{slide.subtitle}</div>
              </div>
              <button className="px-8 py-3 bg-slate-100 text-black rounded-lg transition-all duration-300">
                {slide.buttonText}
              </button>
              <div className="absolute flex gap-10 items-center justify-center bottom-10">
                {slideSet.map((slide) => (
                  <ol key={slide.id} className="cursor-pointer">
                    <li onClick={() => handleSlideChoose(slide.id)}>
                      {currentSlide === slide.id ? <CircleDot /> : <Circle />}
                    </li>
                  </ol>
                ))}
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}
