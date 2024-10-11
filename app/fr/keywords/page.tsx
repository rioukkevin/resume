import { ContentComponent } from "@/components/Content";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { generalDataFR } from "@/data/fr/general";
import { contentDataKeywordsFR } from "@/data/fr/keywords/content";

export default function Home() {
  return (
    <>
      <Header generalData={generalDataFR} />
      <About generalData={generalDataFR} />
      <Contact generalData={generalDataFR} />
      {contentDataKeywordsFR.map((content, index) => {
        return <ContentComponent {...content} key={index} />;
      })}
    </>
  );
}
