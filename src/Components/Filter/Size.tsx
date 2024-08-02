import { useSearchParams } from "react-router-dom";
import { numbers } from "../../utils/constants";
import { useEffect } from "react";

export type FilterProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Size = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  // state her değiştiğinde url'deki parametreleri güncelle:
  useEffect(() => {
    if (selected.length > 0) {
      params.set("size", selected.join(",")); // join ile diziyi stringe çevirdik
    } else {
      // seçili eleman yoksa urldeki parametreyi kaldırır.
      params.delete("size");
    }
    setParams(params);
  }, [selected]);
  // üzerine tıklanan numara state'de varsa kaldır yoksa ekle:
  const toggle = (num: string) => {
    const found = selected.includes(num);

    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((i) => i !== num));
    }
  };

  return (
    <div>
      <h2 className="mb-4 lg:mt-5">SIZE</h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, key) => {
          // numara seçilimi
          const found = selected.includes(num);
          return (
            <p
              key={key}
              onClick={() => toggle(num)}
              className={`${
                found ? "bg-gray-dark text-white" : "bg-white text-gray-dark"
              } py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:text-gray-dark hover:bg-zinc-400 select-none`}
            >
              <span>{num}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
