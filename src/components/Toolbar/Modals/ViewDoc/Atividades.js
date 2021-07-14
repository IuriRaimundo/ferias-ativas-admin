import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../../../../utils/DashboardContext';

function Atividades() {
  const [documentToDisplay, setDocumentToDisplay] = useState();
  const { documents, selection } = useDashboardContext();

  useEffect(() => {
    let a = documents.filter((doc) => doc.dia === selection.id);
    setDocumentToDisplay(a[0]);
  }, []);

  if (documentToDisplay) {
    return (
      <div>
        <p>
          Atividades de<b> {documentToDisplay.dia}</b>
        </p>
        <p>
          Hora de encontro:<b> {documentToDisplay.encontro.hora}</b>
        </p>
        <p>
          Local de encontro:<b> {documentToDisplay.encontro.local}</b>
        </p>
        <p>
          Hora de despedida:<b> {documentToDisplay.despedida.hora}</b>
        </p>
        <p>
          Local de despedida:<b> {documentToDisplay.despedida.local}</b>
        </p>
        <p>
          <b>Atividades:</b>
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
          {documentToDisplay.atividades.map((atividade, index) => (
            <li key={index}>{atividade}</li>
          ))}
        </ul>
        <p>
          Imagem:<b> {documentToDisplay.imagem}</b>
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Atividades;
