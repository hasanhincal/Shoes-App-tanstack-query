import { useSearchParams } from "react-router-dom";
import { FilterProps } from "./Size";
import { useEffect } from "react";
import { colors } from "../../utils/constants";

const Color = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  // state her değiştiğinde url'deki parametreleri güncelle:
  useEffect(() => {
    if (selected.length > 0) {
      params.set("color", selected.join(",")); // join ile diziyi stringe çevirdik
    } else {
      params.delete("color");
    }
    setParams(params);
  }, [selected]);
  // üzerine tıklanan color'ı state'de varsa kaldır yoksa ekle:
  const toggle = (color: string) => {
    const found = selected.includes(color);

    if (!found) {
      setSelected([...selected, color]);
    } else {
      setSelected(selected.filter((i) => i !== color));
    }
  };

  return (
    <div>
      <h2 className="mb-4">COLOR</h2>

      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {
          // renk seçilimi
          const found = selected.includes(color.id);
          return (
            <p
              key={color.id}
              onClick={() => toggle(color.id)}
              style={{ background: color.code }}
              className={`${
                found ? "ring-[4px]" : ""
              } py-2 text-transparent px-4 lg:px-0 text-center rounded-md cursor-pointer transition select-none hover:bg-zinc-400`}
            >
              <span>.</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
