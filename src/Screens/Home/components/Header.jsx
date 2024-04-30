import { useNavigate } from "react-router-dom";
function Header() {
  const navigation = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg">
      <button
        className="btn btn-primary btn-sm md:btn-md"
        onClick={() => navigation("/new")}
      >
        + Nova Frase
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 50 Frases</h2>
      <div className="flex gap-2 items-center">
        <h1 className="text-4xl">💡</h1>
        <h2 className="font-bold text-sm hidden md:block">
          Feito por <br /> Walmir Marques
        </h2>
      </div>
    </div>
  );
}
export default Header;
