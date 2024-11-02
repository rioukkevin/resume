"use client";

import { ContentComponent } from "@/components/Content";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { contentDataTech } from "@/data/tech/content";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      {contentDataTech.map((content, index) => {
        return <ContentComponent {...content} key={index} />;
      })}
    </>
  );
}
