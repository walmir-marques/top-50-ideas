import { useContext } from "react";
import { themesList } from "../../../constants/index";
import ThemeContext from "../../../context/ThemeContext";

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="my-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center">
        Top 50 idéias inovadoras para a sua próxima startup
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">
          Deixe um like nas suas idéias favoritas.
        </strong>
        Escreva a sua melhor idéia.
      </h2>
      <div>
        <select
          className="select select-bordered border-primary w-full max-w-xs"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option disabled selected>
            Selecione o tema.
          </option>
          {themesList.map((item, index) => (
            <option key={index} default={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Hero;
