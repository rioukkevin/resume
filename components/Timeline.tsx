"use client";

import { contentData } from "@/data/content";
import { contentDataFR } from "@/data/fr/content";
import { useState, useCallback } from "react";
import slug from "slug";

const colors = [
  "#A7C7FF", // pastel blue
  "#98E5A7", // pastel green
  "#FFE5A3", // pastel yellow
  "#E0B8FF", // pastel purple
  "#FFBDD9", // pastel pink
  "#B8BAFF", // pastel indigo
  "#FFB3B3", // pastel red
];

const BAR_HEIGHT = 8;

export const Timeline = () => {
  const contentDataToUse = window.location.pathname.includes("/fr")
    ? contentDataFR
    : contentData;

  console.log(
    window.location.pathname.includes("/fr"),
    contentDataToUse,
    contentDataFR,
    contentData
  );

  const SideProjectsTitle = window.location.pathname.includes("/fr")
    ? "Projets personnels"
    : "Side projects";

  const Present = window.location.pathname.includes("/fr")
    ? "Présent"
    : "Present";

  const experiencesData = contentDataToUse[0].items;
  const sideProjects = experiencesData.find(
    (exp) => exp.title === SideProjectsTitle
  ); // Side projects
  const experiences = [
    sideProjects!,
    ...experiencesData.filter((exp) => exp.title !== SideProjectsTitle),
  ];

  console.log(experiences);

  const absoluteStartYear = 2016;
  const absoluteStartMonth = 9;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const totalMonth =
    (currentYear - absoluteStartYear) * 12 +
    (currentMonth - absoluteStartMonth);

  const [hoveredExp, setHoveredExp] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredExp(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredExp(null);
  }, []);

  const handleGotTo = (title: string) => {
    const slugg = `item-${slug(contentDataToUse[0].title + title)}`;
    const element = document.getElementById(slugg);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 300; // 96px gap from top

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full my-4 page-break-inside-avoid">
      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className={`flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity duration-200 ${
              hoveredExp !== null && hoveredExp !== i ? "opacity-20" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleGotTo(exp.title)}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: exp.color ?? colors[i] }}
            />
            <span>{exp.title}</span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-100 rounded-lg pb-8">
        <div
          className="relative w-full h-12 rounded"
          style={{ height: `${BAR_HEIGHT * experiences.length}px` }}
        >
          <div className="absolute w-full flex justify-between text-xs -bottom-6">
            {Array.from({ length: totalMonth }, (_, i) => 0 + i).map((month) =>
              (month + absoluteStartMonth) % 12 === 0 ? (
                <div
                  key={month}
                  className="relative dark:text-neutral"
                  style={{ width: 100 / totalMonth + "%" }}
                >
                  <div
                    className="absolute h-12 w-px border-l border-dotted border-gray-300 dark:border-gray-700 z-10"
                    style={{ bottom: "24px" }}
                  ></div>
                  {Math.floor((month + absoluteStartMonth) / 12) +
                    absoluteStartYear}
                </div>
              ) : (
                <div key={month} style={{ width: 100 / totalMonth + "%" }} />
              )
            )}
          </div>

          {experiences.map((exp, i) => {
            const dates = exp.date.split(" - ");
            const [startMonth, startYear] = dates[0].split("-").map(Number);
            const [endMonth, endYear] =
              dates[1] === Present
                ? [currentMonth, currentYear]
                : dates[1].split("-").map(Number);

            const oneMonthPercentage = 100 / totalMonth;

            const startPos =
              (startYear - absoluteStartYear) * 12 -
              absoluteStartMonth +
              startMonth * oneMonthPercentage;

            const monthDuration =
              (endYear - startYear) * 12 + (endMonth - startMonth);

            const width =
              dates[1] === Present
                ? 100 - startPos
                : monthDuration * oneMonthPercentage + oneMonthPercentage;

            return (
              <div
                key={exp.title}
                className={`timeline-bar absolute h-2 rounded transition-opacity duration-200 cursor-pointer ${
                  hoveredExp !== null && hoveredExp !== i ? "opacity-20" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleGotTo(exp.title)}
                style={{
                  backgroundColor: exp.color ?? colors[i],
                  left: `${startPos}%`,
                  width: `${width}%`,
                  top: `${i * 8}px`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
