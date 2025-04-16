"use client";
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('system'); // Initialize as 'system' or fallback to default theme
  const [isClient, setIsClient] = useState(false); // State to track if the component is rendered on the client

  useEffect(() => {
    setIsClient(true); // When the component mounts on the client, set isClient to true
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedTheme = localStorage.getItem(storageKey) as Theme;
      const initialTheme = storedTheme || defaultTheme;

      setTheme(initialTheme);
    }
  }, [isClient, defaultTheme, storageKey]);

  useEffect(() => {
    if (isClient) {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');

      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
        root.classList.add(systemTheme);
        return;
      }

      root.classList.add(theme);
    }
  }, [theme, isClient]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (isClient) {
        localStorage.setItem(storageKey, theme);
      }
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
