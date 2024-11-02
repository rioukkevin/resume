"use client";

import { ContentComponent } from "@/components/Content";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { contentDataKeywords } from "@/data/keywords/content";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      {contentDataKeywords.map((content, index) => {
        return <ContentComponent {...content} key={index} />;
      })}
    </>
  );
}
