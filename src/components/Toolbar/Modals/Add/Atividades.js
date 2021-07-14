import React, { useRef, useState } from 'react';
import { useDashboardContext } from '../../../../utils/DashboardContext';
import ToolButtons from '../../ToolButtons';
import { request } from '../../../../utils/request';

// WORK
// Image options

function Atividades({ setShowModal }) {
  const { token } = useDashboardContext();
  const [feedback, setFeedback] = useState();
  const [isLoading, setIsLoading] = useState();

  const diaRef = useRef();
  const localDeEncontro = useRef();
  const horaDeEncontro = useRef();
  const localDeDespedida = useRef();
  const horaDeDespedida = useRef();

  const [atividades, setAtividades] = useState(1);
  const atividade1Ref = useRef();
  const atividade2Ref = useRef();
  const atividade3Ref = useRef();
  const atividade4Ref = useRef();
  const atividade5Ref = useRef();
  const atividade6Ref = useRef();
  const atividade7Ref = useRef();

  const atividadesRefs = [
    atividade1Ref,
    atividade2Ref,
    atividade3Ref,
    atividade4Ref,
    atividade5Ref,
    atividade6Ref,
    atividade7Ref,
  ];

  const imagemRef = useRef();

  const overlayImages = {
    default: true,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const requestBody = {
      dia: diaRef.current.value,
      encontro: {
        hora: horaDeEncontro.current.value,
        local: localDeEncontro.current.value,
      },
      despedida: {
        hora: horaDeDespedida.current.value,
        local: localDeDespedida.current.value,
      },
      atividades: atividadesRefs.filter((ref) => ref.current?.value).map((ref) => ref.current.value),
      imagem: imagemRef.current.value,
      overlay: overlayImages[imagemRef.current.value],
    };

    setIsLoading(true);

    request('POST', 'atividades', requestBody, token)
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
          <p>Criar atividade</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='tool-modal-body'>
            <ul>
              <li>
                <label>Dia</label>
                <input type='date' ref={diaRef} required />
              </li>

              <li>
                <label>Local de encontro</label>
                <input type='text' ref={localDeEncontro} required />
              </li>

              <li>
                <label>Hora de encontro</label>
                <input type='time' ref={horaDeEncontro} required />
              </li>

              <li>
                <label>Local de despedida</label>
                <input type='text' ref={localDeDespedida} required />
              </li>

              <li>
                <label>Hora de despedida</label>
                <input type='time' ref={horaDeDespedida} required />
              </li>

              <li>
                <span style={{ display: 'flex' }}>
                  <p style={{ margin: 0, paddingRight: '0.7rem' }}>Atividades</p>
                  <select name='cars' id='cars' onChange={(e) => setAtividades(parseInt(e.target.value))} required>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                </span>
              </li>

              {[...Array(atividades)].map((value, index) => {
                return (
                  <li key={index}>
                    <input placeholder={`Atividade ${index + 1}`} ref={atividadesRefs[index]} required />
                  </li>
                );
              })}

              <li>
                <span style={{ display: 'flex' }}>
                  <p style={{ margin: 0, paddingRight: '0.7rem' }}>Imagem da atividade</p>
                  <select name='cars' id='cars' ref={imagemRef}>
                    <option value={'default'}>Padrão</option>
                  </select>
                </span>
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

export default Atividades;
