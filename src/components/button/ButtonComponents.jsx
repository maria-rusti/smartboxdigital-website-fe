import React, { useState } from "react";
import Button from "@mui/material/Button";

const ButtonComponents = () => {
  const [counter, setCounter] = useState(0);
  const testButton = () => {
    setCounter(() => counter + 1);
  };

  return (
    <>
      <Button onClick={testButton}>Button</Button>
      <h1>{counter}</h1>
    </>
  );
};

export default ButtonComponents;
