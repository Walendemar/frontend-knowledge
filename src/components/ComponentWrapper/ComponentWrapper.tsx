import { FC } from "react";

import { ComponentWrapperProps } from "./types";

const ComponentWrapper: FC<ComponentWrapperProps> = ({
  children,
  conditions,
}) => {
  if (Array.isArray(conditions)) {
    const calculatedConditions = !conditions.some((condition) => condition);

    if (!calculatedConditions) {
      return null;
    }
  }

  if (!conditions) {
    return null;
  }

  return <div>{children}</div>;
};

export default ComponentWrapper;
