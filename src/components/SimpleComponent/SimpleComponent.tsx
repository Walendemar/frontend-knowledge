import { useCallback, useState } from "react";

import ComponentWrapper from "@components/ComponentWrapper";
import WrappedComponent from "@components/WrappedComponent";

const SimpleComponent = () => {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(0);
  const [status, setStatus] = useState(true);

  const habdleIncreaseCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleIncreaseAnotherValue = useCallback(() => {
    setAnotherValue((prevValue) => prevValue + 1);
  }, []);

  const handleToggleStatus = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  return (
    <div>
      <div>
        <span>{count}</span>
        <button type="button" onClick={habdleIncreaseCount}>
          Increase
        </button>
        <button type="button" onClick={handleIncreaseAnotherValue}>
          Increase Another
        </button>
        <button type="button" onClick={handleToggleStatus}>
          Toggle Status
        </button>
      </div>
      <ComponentWrapper conditions={[count, status]}>
        <WrappedComponent val={anotherValue} />
      </ComponentWrapper>
    </div>
  );
};

export default SimpleComponent;
