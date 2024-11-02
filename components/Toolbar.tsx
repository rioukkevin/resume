/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC, PropsWithChildren } from "react";
import ThemeSwitch from "./theme-switch";

export const Toolbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className="max-w-[210mm] mx-auto p-[10mm] relative min-h-screen font-light border my-40 print:m-0 print:border-none">
        {children}
      </main>
      <div className="px-6 py-6 fixed w-full left-0 bottom-0 flex justify-center backdrop-blur-lg items-center gap-6 print:hidden">
        <ThemeSwitch />
        <p className="text-sm text-dark font-light dark:text-white">
          You can export the resume by printing the page and choose "Save as
          PDF" option as printer
        </p>
      </div>
    </>
  );
};
