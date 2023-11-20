import { useEffect } from "react";

const WrappedComponent = () => {
  useEffect(() => {
    console.log("Rerender Wrapped Components");
  }, []);

  return <div>Wrapped Component</div>;
};

export default WrappedComponent;
