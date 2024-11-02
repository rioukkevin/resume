import { CUSTOM_COMPONENTS } from "@/components/Content";

export type DefaultContent = {
  title?: string;
  component?: keyof typeof CUSTOM_COMPONENTS;
  items: {
    color?: string;
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type Content = DefaultContent;

export type ContentData = Content[];

export type Contact = {
  label: string;
  value: string;
  href: string;
};

export type GeneralData = {
  name: string;
  avatar: string;
  jobTitle: string;
  website: string;
  about: string;
  contacts: Contact[];
};
