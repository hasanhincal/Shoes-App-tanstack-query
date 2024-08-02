import { useQueryClient } from "@tanstack/react-query";

const Error = ({ message, name }: { message: string; name: string }) => {
  // kurulum
  const queryClient = useQueryClient();

  // Shoes sorgusunu tekrar çalıştırır.
  // invalidateQueries daha önce useQuery ile tanımladığımız
  //bir sorguyu tekrardan tetiklemek için kullandığımız fonksiyondur.
  const retry = () => {
    queryClient.invalidateQueries({ queryKey: [name] });
  };
  return (
    <>
      <div className="bg-red-500 rounded-lg text-center py-4 text-white">
        <div className="mb-4">Oups Sorry!! It Was Failed</div>
        <p>{message}</p>
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={retry}
          className="border px-3 py-2 rounded-md transition hover:bg-zinc-200 hover:shadow-md "
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
