import React, { createContext, useState } from "react";
import runChat from "../api";

export const Context = createContext();

const ContextProvider = (props) => {
    const [messages, setMessages] = useState([]);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(false);

    const onSent = async (prompt) => {

        const apiResponse = await runChat(prompt);
    
        setMessages((prevMessages) => [...prevMessages, { userInput: prompt, apiRes: apiResponse }])
    };

    const contextValue = {
        messages,
        setMessages,
        recording,
        setRecording,
        speaking,
        setSpeaking,
        onSent,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
