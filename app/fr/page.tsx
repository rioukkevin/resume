"use client";

import { ContentComponent } from "@/components/Content";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { generalDataFR } from "@/data/fr/general";
import { contentDataFR } from "@/data/fr/content";

export default function Home() {
  return (
    <>
      <Header generalData={generalDataFR} />
      <About generalData={generalDataFR} />
      <Contact generalData={generalDataFR} />
      {contentDataFR.map((content, index) => {
        return <ContentComponent {...content} key={index} />;
      })}
    </>
  );
}
