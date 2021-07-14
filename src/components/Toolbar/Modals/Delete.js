import React, { useRef, useState } from 'react';
import { useDashboardContext } from '../../../utils/DashboardContext';
import ToolButtons from '../ToolButtons';
import { request } from '../../../utils/request';

function Delete({ setShowModal }) {
  const [feedback, setFeedback] = useState();
  const [allowSubmit, setAllowSubmit] = useState();
  const [isLoading, setIsLoading] = useState();

  const { selection, type, token } = useDashboardContext();
  const confirmationRef = useRef();
  const labelsByType = {
    'atividades-selector': 'atividade',
    'recados-selector': 'recado',
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const requestBody = {
      id: confirmationRef.current.value,
    };

    const collections = {
      'atividades-selector': 'atividades',
      'recados-selector': 'recados',
    };

    setIsLoading(true);

    request('DELETE', collections[type], requestBody, token)
      .then((res) => {
        setFeedback({
          type: 'success',
          message: res,
        });
        setTimeout(() => {
          setShowModal(false);
          window.location.reload();
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        setFeedback({
          type: 'error',
          message: err,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setFeedback();
          setIsLoading(false);
        }, 2500);
      });
  };

  return (
    <>
      <div className='tool-modal'>
        <div className='tool-modal-header'>
          <p>Apagar {labelsByType[type]}</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='tool-modal-body'>
            <h3>Escreva o ID do documento que deseja apagar para confirmar</h3>
            <div className='confirmation-body'>
              <label htmlFor='confirmation'>
                ID: <strong>{selection?.id}</strong>
              </label>
              <input
                type='text'
                ref={confirmationRef}
                name='confirmation'
                onChange={() => {
                  setAllowSubmit(verifyInput(confirmationRef.current.value, selection.id));
                }}
              />
            </div>
          </div>
          <ToolButtons feedback={feedback} allowSubmit={allowSubmit && !isLoading} setShowModal={setShowModal} />
        </form>
      </div>
      <div className='page-overlay' onClick={() => setShowModal(false)}></div>
    </>
  );
}

const verifyInput = (value, id) => {
  id = id.toString();
  value = value.toString();
  return value === id ? true : false;
};

export default Delete;
