import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white-fa p-4 2xg:p-8 rounded-xl lg:rounded-3xl flex items-center justify-between max-w-[1320px] mx-auto text-gray-dark">
      <div className="flex gap-10 max-lg:hidden whitespace-nowrap">
        <Link to={"/"}>New Drops 🔥</Link>
        <Link to={"/"}>
          <img src="/Frame 4.svg" alt="vector-men" />
        </Link>
        <Link to={"/"}>
          <img src="/Frame 5.svg" alt="women-vector" />
        </Link>
      </div>

      <button className="lg:hidden" type="button">
        <img src="/menu.svg" alt="menu-svg" />
      </button>

      <Link to={"/"}>
        <img src="/Group.svg" alt="logo-kicks" />
      </Link>

      <div className="flex gap-[9px] lg:gap-4">
        <button>
          <img className="max-lg:hidden" src="/search.svg" alt="search-svg" />
        </button>
        <button>
          <img src="/user.svg" alt="user-svg" />
        </button>
        <button className="w-[25px] h-[25px] bg-yellow rounded-full font-semibold font-open grid place-items-center">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
