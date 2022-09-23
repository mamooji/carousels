import { NextPage } from "next";
import React from "react";
import Carousel from "./components/Carousel";
import { TikTokData1, TikTokData2, TikTokData3 } from "../data/data";

const Home: NextPage = () => {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold ">
        Carousels
      </h1>
      <div className="flex flex-col lg:flex-row  max-w-4xl lg:max-w-5xl gap-4">
        <Carousel id="cell1" dataArray={TikTokData1} />
        <Carousel id="cell2" dataArray={TikTokData2} />
        <Carousel id="cell3" dataArray={TikTokData3} />
      </div>
    </main>
  );
};

export default Home;
