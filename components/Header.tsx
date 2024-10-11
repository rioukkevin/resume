import { generalData as defaultData } from "@/data/general";
import { GeneralData } from "@/typings/content";
import Image from "next/image";

export const Header = ({ generalData = defaultData }: { generalData?: GeneralData }) => {
  return (
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
  );
};
