import { createContext, useContext, useEffect, useState } from "react";
import * as ActionCable from "@rails/actioncable";

const CableContext = createContext(null);
const WS_URL = import.meta.env.VITE_CCHIVE_WS_URL;

export const CableProvider = ({ children }) => {
  const [cableInstance, setCableInstance] = useState(null);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const client = localStorage.getItem("client");
    const token = localStorage.getItem("access-token");

    const cableConnection = ActionCable.createConsumer(
      `${WS_URL}/cable?uid=${uid}&client=${client}&access-token=${token}`,
    );

    setCableInstance(cableConnection);

    return () => {
      cableConnection.disconnect();
    };
  }, []);

  return (
    <CableContext.Provider value={cableInstance}>
      {children}
    </CableContext.Provider>
  );
};

export const useCable = () => useContext(CableContext);
