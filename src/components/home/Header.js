import { Link } from "react-router-dom";
import { useCryptoState } from "../../context/context";

const Header = () => {
  const { currency, setCurrency } = useCryptoState();

  return (
    <>
      <div className="text-white h-14 bg-gray-80 px-[5%] flex items-center justify-between">
        <Link to= '/' >
        <p className="text-[18px] tracking-wide text-blue font-semibold">
          CRYPTO SPY
        </p>
        </Link>
        <select
          className="
      appearance-none
      w-[70px]
      text-center
      py-[5px]
      text-[16px]
      font-normal
      bg-gray-100
      rounded
      transition
      ease-in-out
      outline-none
      cursor-pointer
      "
      value={currency}
      onChange={(e) => {setCurrency(e.target.value)}}
        >
          <option value={"USD"}>$ USD</option>
          <option value={"INR"}>₹ INR</option>
        </select>
      </div>
    </>
  );
};

export default Header;
