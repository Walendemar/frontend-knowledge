import { FC } from "react";

import { ComponentWrapperProps } from "./types";

const ComponentWrapper: FC<ComponentWrapperProps> = ({
  children,
  conditions,
}) => {
  if (!conditions) {
    return null;
  }

  if (Array.isArray(conditions)) {
    const calculatedConditions = !conditions.some((condition) => !condition);

    if (!calculatedConditions) {
      return null;
    }
  }

  return children;
};

export default ComponentWrapper;
