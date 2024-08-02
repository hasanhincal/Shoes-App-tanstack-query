import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Price = ({ value, setValue }: Props) => {
  const [params, setParams] = useSearchParams();
  const debaunceValue = useDebounce(value, 300);

  useEffect(() => {
    if (+debaunceValue > 0) {
      params.set("price", debaunceValue);
    } else {
      params.delete("price");
    }
    setParams(params);
  }, [debaunceValue]);
  console.log(value);
  return (
    <div>
      <h2 className="mb-4">PRICE</h2>

      <input
        className="w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="range"
        name="price"
        id="price"
        min={0}
        max={1000}
      />
      <div className="flex justify-between text-sm font-semibold font-open">
        <span>${value}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
