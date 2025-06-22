import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 min-h-[70vh]">{children}</main>
  );
}
