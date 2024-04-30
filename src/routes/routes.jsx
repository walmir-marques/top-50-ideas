import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Screens/Home/HomeScreen";
import AddNewIdea from "../Screens/NewIdea/AddNewIdea";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewIdea />,
  },
]);
