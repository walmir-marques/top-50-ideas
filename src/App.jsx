import { useContext } from "react";
import HomeScreen from "./Screens/Home/HomeScreen";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex flex-col items-cente p-4 md:p-10 h-screen"
      data-theme={theme}
    >
      <div className="max-w-2xl w-full items-center mx-auto">
        <HomeScreen />
      </div>
    </div>
  );
};
export default App;
