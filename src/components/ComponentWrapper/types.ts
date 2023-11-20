import { ReactNode } from "react";

export type ComponentWrapperProps = {
  children: ReactNode;
  conditions: number | string | boolean | (number | string | boolean)[];
};
