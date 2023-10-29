import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const HeadingText =({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-[40px] text-center font-black">
      {children}
    </h2>
  );
}