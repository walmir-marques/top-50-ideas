import { useState } from "react";
import ThemeContext from "./ThemeContext";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("nord");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
