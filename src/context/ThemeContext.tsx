// ThemeContext.tsx
"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggle: () => {},
});

const getFromLocalStorage = (): Theme => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return (value as Theme) || "light";
  }
  return "light";
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("New theme:", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
