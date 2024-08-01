import { createContext, useState } from "react";
import run from "../config/geminie"; // Assuming run is a synchronous function

export const Context = createContext();

const ContextProvider = (props) => {
  const [data, setData] = useState(null);

  const onSet = async (prompt) => {
    const result = await run(prompt);
    setData(result);
  };

  const contextValue = {
    data,
    onSet,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

