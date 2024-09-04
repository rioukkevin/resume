import type { Content } from "@/typings/content";
import Markdown from "react-markdown";

type ContentProps = Content;

export const ContentComponent: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm leading-relaxed break-inside-avoid">
      <h3 className="mb-6 uppercase text-4xl text-primary font-bold">
        {title}
      </h3>
      <div className="flex flex-col gap-6 break-after-auto">
        {items.map((item, index) => {
          return (
            <div className="flex break-inside-avoid" key={index}>
              <div className="mr-8 max-w-[150px] w-full text-slate-400 dark:text-slate-400">
                <p className="font-bold text-slate-800 dark:text-slate-200">
                  {item.title}
                </p>
                <p className="text-slate-400">{item.subTitle}</p>
                <p className="text-slate-600 dark:text-slate-200">
                  {item.date}
                </p>
              </div>
              <div className="flex flex-col flex-1">
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
