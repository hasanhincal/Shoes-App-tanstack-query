import { useState } from "react";
import { numbers } from "../../utils/constants";

const Size = ({ data }: { data: string }) => {
  const [selected, setSelected] = useState<string>("");
  const stocSize = data.split(",");
  console.log(selected);
  const toggle = (num: string) => {
    // seçili elemana tekrar tıklanırsa state'den kaldır
    if (selected === num) {
      setSelected("");
    } else {
      // seçili olmayan numaraya tıklarsa state ekler.
      setSelected(num);
    }
  };
  return (
    <div>
      <h2>SIZE</h2>

      <div className="grid grid-cols-5 gap-4 mt-2">
        {numbers.map((num, i) => {
          const found = selected === num;
          return (
            <button
              key={i}
              onClick={() => toggle(num)}
              disabled={!stocSize.includes(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${
                found ? "bg-gray-dark text-white" : "bg-white"
              }`}
            >
              <span>{num}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
