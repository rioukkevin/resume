import { GeneralData } from "@/typings/content";
import { generalData as defaultData } from "@/data/general";
import { useScrollingFixed } from "./useScrollingFixed";

export const About = ({
  generalData = defaultData,
}: {
  generalData?: GeneralData;
}) => {
  const { containerRef, titleRef, titleWrapperProps, TitleWrapper } =
    useScrollingFixed<HTMLElement, HTMLHeadingElement>();

  return (
    <section
      ref={containerRef}
      className="my-9 text-sm leading-relaxed break-inside-avoid"
    >
      <TitleWrapper {...titleWrapperProps}>
        <h3
          ref={titleRef}
          className="py-4 text-4xl text-primary font-bold uppercase"
        >
          About
        </h3>
      </TitleWrapper>
      <div className="text-slate-600 dark:text-slate-300">
        <p>{generalData.about}</p>
      </div>
    </section>
  );
};
