import { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

export const InfosContainer = ({ children }: ChildrenProp) => {
  return (
    <div className="border-2 w-auto mt-6 flex flex-col items-center justify-center flex-wrap">
      {children}
    </div>
  );
};
