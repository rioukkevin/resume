"use client";

import { contentData } from "@/data/content";
import { ContentComponent } from "@/components/Content";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      {contentData.map((content, index) => {
        return <ContentComponent {...content} key={index} />;
      })}
    </>
  );
}
