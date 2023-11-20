import { useCallback, useState } from "react";

import ComponentWrapper from "@components/ComponentWrapper";
import WrappedComponent from "@components/WrappedComponent";

const SimpleComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <div>
        <span>{count}</span>
        <button type="button" onClick={increaseCount}>
          Increase
        </button>
      </div>
      <ComponentWrapper conditions={count}>
        <WrappedComponent />
      </ComponentWrapper>
    </div>
  );
};

export default SimpleComponent;
