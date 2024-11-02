"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";

export const Toolbar: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const body = document.querySelector("body");
    if (body?.classList.contains("dark")) {
      body.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      body?.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (theme === "dark") {
        document.body.classList.add("dark");
      }
      setTheme(theme);
    }
  }, []);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      <main className="max-w-[210mm] mx-auto p-4 md:p-[10mm] print:p-[10mm] relative min-h-screen w-full  font-light md:border border-zinc-400 dark:border-zinc-800 md:my-40 max-md:mb-32 print:m-0 print:border-none transition-all duration-300">
        {children}
      </main>
      <div className="px-6 py-6 fixed w-full left-0 bottom-0 flex justify-center backdrop-blur-lg items-center gap-6 print:hidden">
        <button
          onClick={toggleTheme}
          className="text-sm text-dark font-light dark:text-white hover:scale-110 transition-all duration-200 border border-zinc-400 dark:border-zinc-800 rounded-md px-4 py-2"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
        <p className="text-sm text-dark font-light dark:text-white">
          You can export the resume by printing the page and choose &quot;Save
          as PDF&quot; option as printer
        </p>
      </div>
    </>
  );
};
