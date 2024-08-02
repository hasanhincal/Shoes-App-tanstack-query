import { useSearchParams } from "react-router-dom";
import { FilterProps } from "./Size";
import { useEffect } from "react";

const Gender = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  // state her değiştiğinde url'deki parameteleri güncelle
  useEffect(() => {
    if (selected.length > 0) {
      // seçili eleman varsa aralarına  , koyup url'e ekle
      params.set("gender", selected.join(","));
    } else {
      // seçili eleman yoksa url'deki parametreyi kaldır.
      params.delete("gender");
    }
    setParams(params);
  }, [selected]);
  // üzerine tıklanan gender stae'de varsa ekle yoksa kaldır.
  const toggle = (gender: string) => {
    const found = selected.includes(gender);

    if (!found) {
      setSelected([...selected, gender]);
    } else {
      setSelected(selected.filter((i) => i !== gender));
    }
  };

  return (
    <div>
      <h2 className="mb-4">GENDER</h2>

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="men"
          onChange={() => toggle("men")}
          checked={selected.includes("men")}
        />
        <label className="select-none" htmlFor="men">
          Men
        </label>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="women"
          onChange={() => toggle("women")}
          checked={selected.includes("women")}
        />
        <label className="select-none" htmlFor="women">
          Women
        </label>
      </div>
    </div>
  );
};

export default Gender;
