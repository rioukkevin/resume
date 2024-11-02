"use client";

import type { Content } from "@/typings/content";
import slug from "slug";
import Markdown from "react-markdown";
import { Timeline } from "./Timeline";
import { useScrollingFixed } from "./useScrollingFixed";

export const CUSTOM_COMPONENTS = {
  timeline: <Timeline />,
};

type ContentProps = Content;

export const ContentComponent: React.FC<ContentProps> = (content) => {
  const { items, title, component } = content;
  const { containerRef, titleRef, titleWrapperProps, TitleWrapper } =
    useScrollingFixed<HTMLElement, HTMLHeadingElement>();

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <section
      ref={containerRef}
      id="container"
      className="my-14 text-sm leading-relaxed relative"
    >
      {title && (
        <TitleWrapper {...titleWrapperProps}>
          <div ref={titleRef}>
            <h3
              className={`py-4 uppercase text-4xl text-primary font-bold`}
              style={{
                width: "auto",
              }}
            >
              {title}
            </h3>
            {!!component ? CUSTOM_COMPONENTS[component] : <></>}
          </div>
        </TitleWrapper>
      )}

      <div className={`flex flex-col gap-6 break-after-auto`}>
        {items.map((item, index) => {
          return (
            <div
              id={`item-${slug(title + item.title)}`}
              className="flex flex-wrap md:flex-nowrap break-inside-avoid scroll-m-24"
              key={index}
            >
              <div className="mr-8 max-w-full md:max-w-[150px] w-full text-slate-400 dark:text-slate-400">
                <p className="font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 max-md:text-lg">
                  {item.color && (
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                  {item.title}
                </p>
                <p className="text-slate-400">{item.subTitle}</p>
                <p className="text-slate-600 dark:text-slate-200">
                  {item.date}
                </p>
              </div>
              <div className="flex flex-col flex-1 max-md:mt-4">
                {item.description ? (
                  <p className="text-slate-600 dark:text-gray-400">
                    <Markdown
                      components={{
                        h2: ({ children }) => (
                          <p className="underline mt-2 first:mt-0">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-outside ml-4">
                            {children}
                          </ul>
                        ),
                        strong: ({ children }) => (
                          <span className="border border-gray-400 rounded-md px-1 py-0.5 m-0.5 inline-block w-fit">
                            {children}
                          </span>
                        ),
                      }}
                    >
                      {item.description}
                    </Markdown>
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
