import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex flex-col items-cente p-4 md:p-10 h-screen"
      data-theme={theme}
    >
      <div className="max-w-2xl w-full items-center mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
export default App;
