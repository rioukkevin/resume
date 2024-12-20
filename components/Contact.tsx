"use client";

import { generalData as defaultData } from "@/data/general";
import { GeneralData } from "@/typings/content";
import { useScrollingFixed } from "./useScrollingFixed";

export const Contact = ({
  generalData = defaultData,
}: {
  generalData?: GeneralData;
}) => {
  const { containerRef, titleRef, titleWrapperProps, TitleWrapper } =
    useScrollingFixed<HTMLElement, HTMLHeadingElement>();

  return (
    <section
      ref={containerRef}
      id="container"
      className="my-14 text-sm leading-relaxed break-inside-avoid"
    >
      <TitleWrapper {...titleWrapperProps}>
        <h3
          ref={titleRef}
          className="py-4 text-4xl text-primary font-bold uppercase"
        >
          Contact
        </h3>
      </TitleWrapper>
      <div className="flex flex-col gap-2">
        {generalData.contacts.map((contact, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-8 max-w-[160px] w-full text-slate-400 dark:text-slate-400">
                {contact.label}
              </div>
              <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex"
                >
                  {contact.value}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                      className="fill-current text-slate-900 dark:text-slate-100"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
