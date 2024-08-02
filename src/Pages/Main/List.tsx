import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";
import Card from "../../Components/Card";
import { Shoe } from "../../types";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatParams";

const List = () => {
  const [params] = useSearchParams();

  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });
  return (
    <div className="lg:col-span-3 col-span-4">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} name="shoes" />
      ) : data?.length === 0 ? (
        <p>Üzgünüz Aradığınız Kriterlere Uygun Ürün Bulunamadı... </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 ">
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;

// url'den gelen params objesi
// const obje = {
//   size: "38,40",
//   color: "blue,yellow",
//   price: "304",
//   gender: "men,women",
// };

// olması gereken url isteği
// const url =
//   "?size_like=38&size_like=40&color_like=blue&color_like=yellow&gender=men&gender=women&price_lte=304";
