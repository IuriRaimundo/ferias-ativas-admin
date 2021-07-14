import React from 'react';

function ToolButtons({ feedback, setShowModal, allowSubmit, submitFunction, params }) {
  return (
    <div className='tool-buttons'>
      {feedback?.type && (
        <div className={feedback?.type === 'success' ? 'tool-feedback-success' : 'tool-feedback-error'}>{feedback.message}</div>
      )}
      <button type='button' className='tool-cancel-button' onClick={() => setShowModal(false)}>
        Cancelar
      </button>
      <button
        type='submit'
        className={allowSubmit ? 'tool-submit-button-active' : 'tool-submit-button-disable'}
        onClick={() => {
          if (submitFunction && params) submitFunction(params);
        }}
      >
        Confirmar
      </button>
    </div>
  );
}

export default ToolButtons;
