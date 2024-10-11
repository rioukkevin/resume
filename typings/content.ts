export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

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