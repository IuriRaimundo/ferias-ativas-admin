import React from 'react';
import { useDashboardContext } from '../../../../utils/DashboardContext';
import Atividades from './Atividades';
import Recados from './Recados';

function ViewDoc({ setShowModal }) {
  const { type } = useDashboardContext();

  return (
    <>
      <div className='tool-modal'>
        <div className='tool-modal-header'>
          <p>Ver documento</p>
        </div>
        <div className='tool-modal-body'>{type === 'atividades-selector' ? <Atividades /> : <Recados />}</div>
        <div className='tool-buttons'>
          <button
            type='submit'
            className={'tool-submit-button-active'}
            onClick={() => {
              setShowModal(false);
            }}
          >
            Fechar
          </button>
        </div>
      </div>
      <div className='page-overlay' onClick={() => setShowModal(false)}></div>
    </>
  );
}

export default ViewDoc;
