import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContextProvider } from "./contexts/themeContext";

export default function App() {
  const [themeMode, setThemeMode] = useState();

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("Dark");
  };

  // Theme switching
    useEffect(() => {
        const html = document.querySelector("html");
        html.classList.remove('light', 'dark');
        html.classList.add(themeMode)
  }, [themeMode])

  function clickHandler() {}

  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="bg-blue-500 flex w-full text-4xl flex-wrap min-h-screen items-center">Hello
        {/* <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn clickHandler={clickHandler} />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div> */}
      </div>
    </ThemeContextProvider>
  );
}
