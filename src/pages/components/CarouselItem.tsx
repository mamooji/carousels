import Script from "next/script";
import React from "react";
import { TikTokDataType } from "../../types/TikTokDataType";

interface Props {
  data: TikTokDataType;
  slideNumber: number;
  nextSlide: number;
  prevSlide: number;
  id: string;
}
const CarouselItem: React.FC<Props> = ({
  data,
  slideNumber,
  nextSlide,
  prevSlide,
  id,
}) => {
  return (
    <div id={id + slideNumber} className="carousel-item relative w-full">
      <blockquote
        className=" relative block  m-auto box-border overflow-hidden  max-w-2xl min-w-325px"
        cite={data.cite}
        data-video-id={data.dataVideoID}
      >
        <iframe className="w-full h-[756px]" src={data.src}></iframe>
      </blockquote>
      <Script src="https://www.tiktok.com/embed.js"></Script>
      <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={"#" + id + prevSlide} className="btn btn-circle">
          ❮
        </a>
        <p className="text-4xl font-bold">{data.title}</p>
        <a href={"#" + id + nextSlide} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
