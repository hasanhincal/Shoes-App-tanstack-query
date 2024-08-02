import Badge from "../../Components/Card/Badge";
import { Shoe } from "../../types";
import calcDiscount from "../../utils/calcDiscount";

const Head = ({ data }: { data: Shoe }) => {
  const lastPrice = calcDiscount(data.price, data.discount);
  return (
    <div>
      <Badge discount={data.discount} />

      <h2 className="text-3xl mt-[60px]">{data.name}</h2>

      <p className="text-2xl mt-4 flex items-center gap-2">
        <span className="text-blue">${lastPrice}</span>
        {data.discount && <span className="line-through">${data.price}</span>}
      </p>
    </div>
  );
};

export default Head;
