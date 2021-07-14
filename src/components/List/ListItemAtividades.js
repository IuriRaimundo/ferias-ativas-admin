import React from 'react';
import CheckButton from './CheckButton';
import { useDashboardContext } from '../../utils/DashboardContext';
import truncateString from '../../utils/truncateString';

export default function ListItemAtividades({ doc }) {
  const { selection, setSelection } = useDashboardContext();

  const clickHandler = () => {
    if (selection?.id !== doc.dia) {
      setSelection({
        id: doc.dia,
      });
    } else {
      setSelection();
    }
  };

  return (
    <div className={`list-item ${selection?.id === doc.dia && 'list-item-highlight'}`} onClick={clickHandler}>
      <p>
        <b>{doc?.dia.split('-').reverse().join('/')}</b>
      </p>
      <p>
        Atividades: <b>{truncateString(doc?.atividades.join(', '), 20)}</b>
      </p>
      <p>
        Início: <b>{doc?.encontro.hora}</b>
      </p>
      <p>
        Fim: <b>{doc?.despedida.hora}</b>
      </p>
      <CheckButton id={doc?.dia} />
    </div>
  );
}
