import { GeneralData } from "@/typings/content";
import { generalData as defaultData } from "@/data/general";

export const About = ({ generalData = defaultData }: { generalData?: GeneralData }) => {
  return (
    <section className="my-9 text-sm leading-relaxed break-inside-avoid">
      <h3 className="mb-1 text-4xl text-primary font-bold uppercase">About</h3>
      <div className="text-slate-600 dark:text-slate-300">
        <p>{generalData.about}</p>
      </div>
    </section>
  );
};
