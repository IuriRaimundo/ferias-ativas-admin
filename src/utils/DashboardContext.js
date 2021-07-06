import React, { useContext, createContext, useState } from 'react';

export const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardContextProvider = ({ children }) => {
  const [type, setType] = useState('atividades-selector');

  const value = {
    setType,
    type,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};
