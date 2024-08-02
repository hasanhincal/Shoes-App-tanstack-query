const Buttons = ({ open }: { open: () => void }) => {
  return (
    <div className="mt-5 flex gap-5 lg:hidden">
      <button
        onClick={open}
        className="flex-1 flex items-center justify-between gap-4 bg-white rounded-md py-2 px-4"
      >
        Filters <img src="lines.svg" alt="line" />
      </button>
      <button className="flex-1 flex items-center justify-between gap-4 bg-white rounded-md py-2 px-4">
        Trending <img src="down.svg" alt="cevron-down" />
      </button>
    </div>
  );
};

export default Buttons;
