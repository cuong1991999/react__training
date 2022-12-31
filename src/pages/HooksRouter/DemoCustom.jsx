import React from "react";
import useToggle from "../hooks/useToggle";

const DemoCustom = () => {
  const [status, setStatus] = useToggle(false);
  return (
    <div>
      <button onClick={setStatus}>
        {status ? "Toggled" : "Click to Toggled"}
      </button>
    </div>
  );
};

export default DemoCustom;
