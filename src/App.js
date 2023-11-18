import React, { useState } from "react";
import Router from "./router/Router";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme";

const App = () => {
  const [themeMode, setThemeMode] = useState("LightMode");
  return (
    <ThemeProvider theme={themeMode === "LightMode" ? LightTheme : DarkTheme}>
      <Router setThemeMode={setThemeMode} themeMode={themeMode} />
    </ThemeProvider>
  );
};

export default App;
