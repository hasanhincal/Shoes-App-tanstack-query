import { colors } from "../../utils/constants";

const Color = ({ data }: { data: string }) => {
  const arr = data.split(",");
  return (
    <div>
      <h2>COLOR</h2>
      <div className="flex items-center gap-3 mt-2">
        {arr.map((item, i) => {
          // id'sinden yola çıkarak renk kodunu bul:
          const color = colors.find((i) => i.id === item);

          return (
            <div
              key={i}
              style={{ background: color?.code || "gray" }}
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Color;
