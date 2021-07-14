import React, { useRef, useState } from 'react';
import { useDashboardContext } from '../../../../utils/DashboardContext';
import ToolButtons from '../../ToolButtons';
import { request } from '../../../../utils/request';

function Recados({ setShowModal }) {
  const [feedback, setFeedback] = useState();
  const [isLoading, setIsLoading] = useState();

  const { token } = useDashboardContext();

  const tituloRef = useRef();
  const corpoRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const requestBody = {
      titulo: tituloRef.current.value,
      corpo: corpoRef.current.value,
      timestamp: new Date().getTime(),
    };

    setIsLoading(true);

    request('POST', 'recados', requestBody, token)
      .then((res) => {
        setFeedback({
          type: 'success',
          message: res,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      })
      .catch((err) => {
        setFeedback({
          type: 'error',
          message: err,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
          setFeedback();
        }, 2500);
      });
  };

  return (
    <>
      <div className='tool-modal'>
        <div className='tool-modal-header'>
          <p>Criar recado</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='tool-modal-body'>
            <ul>
              <li>
                <label>Título</label>
                <input type='text' ref={tituloRef} required />
              </li>
              <li>
                <label>Corpo</label>
                <textarea ref={corpoRef} required />
              </li>
            </ul>
          </div>
          <ToolButtons feedback={feedback} allowSubmit={!isLoading} setShowModal={setShowModal} />
        </form>
      </div>
      <div className='page-overlay' onClick={() => setShowModal(false)}></div>
    </>
  );
}

export default Recados;
