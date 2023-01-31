import { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

export const InfosContainer = ({ children }: ChildrenProp) => {
  return (
    <div className="appBg min- md:max-h-[30rem] w-full h-auto mt-6 md:mt-0 flex flex-col md:flex-row items-center justify-center md:justify-evenly flex-wrap">
      {children}
    </div>
  );
};
