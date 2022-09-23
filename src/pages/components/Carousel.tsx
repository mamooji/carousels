import React from "react";
import { TikTokDataType } from "../../types/TikTokDataType";
import CarouselItem from "./CarouselItem";

interface Props {
  id: string;
  dataArray: Array<TikTokDataType>;
}
const Carousel: React.FC<Props> = ({ id, dataArray }) => {
  return (
    <div className="carousel w-full">
      {/* ////////////////////////////// */}
      {dataArray?.map((data, index) => {
        const slideNumber = index + 1;
        let nextSlide = slideNumber + 1;
        let prevSlide = slideNumber - 1;

        //check if nextSlide is > than data length provided
        if (nextSlide > dataArray.length) {
          nextSlide = 1;
        }
        //check if prevSlide is < 1 to go back to last data element
        if (prevSlide < 1) {
          prevSlide = dataArray.length;
        }
        return (
          <CarouselItem
            id={id}
            data={data}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            slideNumber={slideNumber}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
