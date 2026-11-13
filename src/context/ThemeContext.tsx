import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const THEME_CHOICE_KEY = "portfolio-theme-choice";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Light is the default. Only a theme the visitor explicitly picked with the
  // toggle is remembered. The old "portfolio-theme" key is ignored on purpose:
  // earlier versions auto-saved "dark" for every visitor, which kept returning
  // visitors stuck in dark mode even though they never chose it.
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const chosen = localStorage.getItem(THEME_CHOICE_KEY);
      if (chosen === "light" || chosen === "dark") return chosen;
    } catch {
      // Storage blocked (private mode etc.): fall through to the default.
    }
    return "light";
  });

  // Apply / remove the data-theme attribute on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_CHOICE_KEY, next);
        localStorage.removeItem("portfolio-theme");
      } catch {
        // Ignore storage failures; the toggle still works for this visit.
      }
      return next;
    });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
