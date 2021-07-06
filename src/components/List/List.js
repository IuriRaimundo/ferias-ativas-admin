import React, { useState, useEffect } from 'react';
import './List.css';
import { useDashboardContext } from '../../utils/DashboardContext';
import Loading from '../Loading/Loading';
import { request } from '../../utils/request';

function List() {
  const [documents, setDocuments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useDashboardContext();
  const token = localStorage.getItem('token');

  const collectionsByType = {
    'atividades-selector': 'atividades',
    'recados-selector': 'recados',
  };

  useEffect(() => {
    request('GET', collectionsByType[type], null, token).then((response) => {
      setDocuments(response);
      setIsLoading(false);
    });
  }, [type]);

  return (
    <div>
      {isLoading && <Loading />}
      {documents &&
        documents.map((doc, index) => {
          return <div key={index}>{doc.id ? doc.id : doc.dia}</div>;
        })}
    </div>
  );
}

export default List;
