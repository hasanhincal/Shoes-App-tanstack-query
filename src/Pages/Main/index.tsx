import { useState } from "react";
import Filter from "../../Components/Filter";
import Hero from "./Hero";
import List from "./List";
import Buttons from "./Buttons";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto max-w-[1320px]">
      <Hero />

      <Buttons open={() => setIsOpen(true)} />

      <h1 className="text-[20px] md:text-[36px] font-semibold my-8">
        Life Style Shoes
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <Filter isOpen={isOpen} close={() => setIsOpen(false)} />
        <List />
      </div>
    </div>
  );
};

export default Main;
