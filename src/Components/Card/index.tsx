import { Link } from "react-router-dom";
import { Shoe } from "../../types";
import Badge from "./Badge";
import calcDiscount from "../../utils/calcDiscount";

const Card = ({ item }: { item: Shoe }) => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white rounded-2xl lg:rounded-[28px] p-2 relative">
          <Badge discount={item.discount} />
          <img src={item.picture[0]} alt="shoe-picture" />
        </div>
        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
          {item.name}
        </h2>
      </div>
      <Link
        to={`/detail/${item.id}`}
        className="whitespace-nowrap text-center uppercase bg-gray-dark  text-white text-[12px] md:text-[14px] font-medium px-1  py-2 rounded-[8px] transition hover:bg-black"
      >
        View Product -{" "}
        <span className={item.discount ? "text-yellow" : "text-white"}>
          ${calcDiscount(item.price, item.discount)}
        </span>
        {item.discount && (
          <span className="line-through text-yellow ps-2 max-xl:hidden">
            ({item.price})
          </span>
        )}
      </Link>
    </div>
  );
};

export default Card;
