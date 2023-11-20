import { FC, useEffect } from "react";

import { WrappedComponentProps } from "./types";

const WrappedComponent: FC<WrappedComponentProps> = ({ val }) => {
  useEffect(() => {
    console.log("Rerender Wrapped Components");
  }, []);

  return <div>Wrapped Component {val}</div>;
};

export default WrappedComponent;
