import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";
function Header() {
  const navigation = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg">
      <button
        className="btn btn-primary btn-sm md:btn-md"
        onClick={() => navigation("/new")}
      >
        + Nova Idéia
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 50 idéias</h2>
      <div className="flex gap-2 items-center">
        <img
          src={Logo}
          className="h-10 w-10 rounded-full border border-black shadow-md"
        />
        <h2 className="font-bold text-sm hidden md:block">
          Feito por <br /> Walmir Marques
        </h2>
      </div>
    </div>
  );
}
export default Header;
