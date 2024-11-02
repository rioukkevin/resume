"use client";

import {
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

interface TitleWrapperProps extends PropsWithChildren {
  isSticky: boolean;
  containerRef: RefObject<HTMLElement>;
  setBottomMargin: (value: number) => void;
}

const TitleWrapper: FC<TitleWrapperProps> = ({
  children,
  isSticky,
  containerRef,
  setBottomMargin,
}) => {
  const clone = useRef<HTMLElement>(null);
  const clonedElement = cloneElement(children as ReactElement, {
    className: `${(children as ReactElement).props.className} fixed top-0 z-10 bg-zinc-50 dark:bg-zinc-950 transition-all duration-300 right-0 max-md:!w-auto left-0 px-4 md:right-auto md:px-0 md:left-auto max-w-full md:max-w-[210mm] print:hidden ${
      isSticky ? "translate-y-0" : "-translate-y-full"
    }`,
    ref: clone,
    style: {
      width: containerRef.current?.offsetWidth,
    },
  });

  useEffect(() => {
    if (clone.current) {
      setBottomMargin(clone.current.offsetHeight);
    }
  }, [isSticky]);

  return (
    <>
      {children}
      {clonedElement}
    </>
  );
};

export const useScrollingFixed = <
  C extends HTMLElement,
  T extends HTMLElement,
>() => {
  const containerRef = useRef<C>(null);
  const titleRef = useRef<T>(null);
  const [isSticky, setIsSticky] = useState(false);

  const [bottomMargin, setBottomMargin] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;

      if (
        containerTop <= 0 &&
        containerBottom >= bottomMargin &&
        container.clientHeight > 300
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bottomMargin]);

  return {
    containerRef,
    titleRef,
    isSticky,
    TitleWrapper: TitleWrapper,
    titleWrapperProps: {
      isSticky,
      containerRef,
      setBottomMargin,
    },
  };
};
