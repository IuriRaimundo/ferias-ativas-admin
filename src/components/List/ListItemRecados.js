import React from 'react';
import { useDashboardContext } from '../../utils/DashboardContext';
import formatDate from '../../utils/formatDate';
import truncateString from '../../utils/truncateString';
import CheckButton from './CheckButton';

export default function ListItemRecados({ doc }) {
  const { selection, setSelection } = useDashboardContext();

  const clickHandler = () => {
    console.log(selection);
    if (selection?.id !== doc?.timestamp) {
      setSelection({
        id: doc.timestamp,
      });
    } else {
      setSelection();
    }
  };

  return (
    <div className={`list-item ${selection?.id === doc.timestamp && 'list-item-highlight'}`} onClick={clickHandler}>
      <p>
        Emitido em: <b>{formatDate(doc.timestamp)}</b>
      </p>
      <p>{doc.titulo}</p>
      <p>{doc.corpo && truncateString(doc.corpo, 40)}</p>
      <CheckButton id={doc?.timestamp} />
    </div>
  );
}
