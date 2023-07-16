import { createContext, useState } from "react";
import { userInitialState } from "../screens/QRScanner"; // import the initial state

export const ToolUserContext = createContext({});

export const ToolUserContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <ToolUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </ToolUserContext.Provider>
  );
};
