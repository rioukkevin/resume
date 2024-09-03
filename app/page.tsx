import Image from "next/image";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import Markdown from "react-markdown";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm leading-relaxed break-inside-avoid">
      <h3 className="mb-6 uppercase text-4xl text-primary font-bold">
        {title}
      </h3>
      <div className="flex flex-col gap-6 break-after-auto">
        {items.map((item, index) => {
          return (
            <div className="flex break-inside-avoid" key={index}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
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

export default function Home() {
  return (
    <>
      <section className="flex items-center leading-relaxed break-inside-avoid">
        <Image
          alt="Author"
          src={generalData.avatar}
          width={150}
          height={150}
          className="rounded-full object-cover bg-primary"
        />
        <div className="ml-4">
          <h1 className="mb-0.5 text-7xl font-black text-primary">
            {generalData.name}
          </h1>
          <p className="text-slate-600 text-2xl dark:text-slate-300">
            {generalData.jobTitle}
          </p>
          {generalData.website ? (
            <span className="text-sm text-slate-400 dark:text-slate-400">
              <a
                href={generalData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {generalData.website
                  .replace(/(^\w+:|^)\/\//, "")
                  .replace("www.", "")}
              </a>
            </span>
          ) : null}
        </div>
      </section>
      <section className="my-9 text-sm leading-relaxed break-inside-avoid">
        <h3 className="mb-1 text-4xl text-primary font-bold uppercase">
          About
        </h3>
        <div className="text-slate-600 dark:text-slate-300">
          <p>{generalData.about}</p>
        </div>
      </section>
      <section className="my-14 text-sm leading-relaxed break-inside-avoid">
        <h3 className="mb-6 text-4xl text-primary font-bold uppercase">
          Contact
        </h3>
        <div className="flex flex-col gap-6">
          {generalData.contacts.map((contact, index) => {
            return (
              <div className="flex" key={index}>
                <div className="mr-8 max-w-[140px] w-full text-slate-400 dark:text-slate-400">
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
      {contentData.map((content, index) => {
        return <Content {...content} key={index} />;
      })}
    </>
  );
}
