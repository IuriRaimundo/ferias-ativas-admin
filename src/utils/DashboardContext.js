import React, { useContext, createContext, useState, useEffect } from 'react';
import { request } from './request';

export const DashboardContext = createContext();

export const useDashboardContext = () => useContext(DashboardContext);

export const DashboardContextProvider = ({ children }) => {
  const [type, setType] = useState('atividades-selector');
  const [selection, setSelection] = useState();
  const [documents, setDocuments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  const collectionsByType = {
    'atividades-selector': 'atividades',
    'recados-selector': 'recados',
  };

  useEffect(() => {
    setDocuments();
    request('GET', collectionsByType[type], null, token).then((response) => {
      setDocuments(response);
      setIsLoading(false);
    });
  }, [type]);

  const value = {
    setType,
    type,
    setDocuments,
    documents,
    setIsLoading,
    isLoading,
    selection,
    setSelection,
    token,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};
