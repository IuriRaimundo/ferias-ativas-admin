import React, { useState, useEffect } from 'react';
import { useDashboardContext } from '../../../../utils/DashboardContext';
import formatDate from '../../../../utils/formatDate';

function Recados() {
  const [documentToDisplay, setDocumentToDisplay] = useState();
  const { documents, selection } = useDashboardContext();

  useEffect(() => {
    let a = documents.filter((doc) => doc.timestamp === selection.id);
    setDocumentToDisplay(a[0]);
  }, []);

  if (documentToDisplay) {
    return (
      <div>
        <p>
          Recado emitido em <b>{formatDate(documentToDisplay.timestamp)}</b>
        </p>
        <p>{documentToDisplay.corpo}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Recados;
