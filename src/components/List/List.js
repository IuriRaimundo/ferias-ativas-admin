import React from 'react';
import './List.css';
import ListItemAtividades from './ListItemAtividades';
import ListItemRecados from './ListItemRecados';

function List({ documents, type }) {
  console.log(documents);
  return (
    <div>
      {documents &&
        documents.map((doc, key) => {
          if (type === 'atividades-selector') {
            return <ListItemAtividades key={key} doc={doc} />;
          } else {
            return <ListItemRecados key={key} doc={doc} />;
          }
        })}
    </div>
  );
}

export default List;
