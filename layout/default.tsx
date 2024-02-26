import React from "react";
import BaseWrapper from "@/components/BaseWrapper";

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen flex flex-col relative">
      <BaseWrapper>{children}</BaseWrapper>
    </div>
  );
}
