import { createContext, useState } from "react";
import run from "../config/geminie"; 

export const Context = createContext();

const ContextProvider = (props) => {
    //const [contextValue, setContextValue] = useState({});
    const [input,setInput]=useState("");
    const [recentPromt,setRecentPromt]=useState("")
    const [previousPromt,setPreviousPrompts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData,setResultData]=useState("")


    const onSent = async (prompt) => {
        await run(input);
    }

    const contextValue={
      previousPromt,
      setPreviousPrompts,
      onSent,
      setRecentPromt,
      recentPromt,
      showResult,
      loading,
      resultData,
      input,
      setInput
      

    }

    return (
        <Context.Provider value={{ contextValue, onSent }}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
