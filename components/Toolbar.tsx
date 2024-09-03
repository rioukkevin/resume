/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC, PropsWithChildren } from "react";
import ThemeSwitch from "./theme-switch";
// import { usePDF } from "react-to-pdf";
// import { generalData } from "@/data/general";

export const Toolbar: FC<PropsWithChildren> = ({ children }) => {
  //   const { toPDF, targetRef } = usePDF({
  //     filename: `${generalData.name} - ${generalData.jobTitle}.pdf`,
  //     method: "open",
  //     page: {
  //       format: "a4",
  //     },
  //   });

  return (
    <>
      <main
        className="max-w-[210mm] mx-auto p-[10mm] relative min-h-screen font-light border my-40 print:m-0 print:border-none"
        // ref={targetRef}
      >
        {children}
      </main>
      <div className="px-6 py-6 fixed w-full left-0 bottom-0 flex justify-center backdrop-blur-lg items-center gap-6 print:hidden">
        <ThemeSwitch />
        {/* <button
          onClick={() => toPDF()}
          className="border border-gray-400 rounded-md px-2 py-1"
        >
          Download PDF
        </button> */}
        <p className="text-sm text-dark font-light">
          You can export the resume by printing the page and choose "Save as
          PDF" option as printer
        </p>
      </div>
    </>
  );
};
