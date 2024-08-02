const Error = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-500 rounded-lg text-center py-4 text-white">
      <div className="mb-4">Oups Sorry!! It Was Failed</div>
      <p>{message}</p>
    </div>
  );
};

export default Error;
