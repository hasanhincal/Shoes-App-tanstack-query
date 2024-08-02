import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShoe } from "../../api";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";
import { Shoe } from "../../types";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id as string),
  });
  return (
    <div className="mx-auto max-w-[1320px] mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        data && (
          <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit">
              {data.picture.slice(1, 5).map((url, key) => (
                <img key={key} src={url} />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <Head data={data} />

              <Color data={data.color} />

              <Size data={data.size} />

              <div>
                <h2 className="font-semibold text-[16px] uppercase mb-4">
                  About the product
                </h2>

                <p
                  className="text-[16px] font-open font-regular text-gray-dark"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Detail;
