import React, { useEffect } from 'react';
import './Dashboard.css';
import { useDashboardContext } from '../../utils/DashboardContext';
import Toolbar from '../Toolbar/Toolbar';
import List from '../List/List';
import Loading from '../Loading/Loading';

function Dashboard() {
  const { token, type, setType, setDocuments, documents, setIsLoading, isLoading, setSelection } = useDashboardContext();

  // Ir para a página de iniciar sessão caso nenhum token esteja armazenado no browser.
  if (!token) {
    window.location.href = '/';
  }

  // Terminar sessão caso o último inicio de sessão tenha sido mais do que 5 horas atrás (300 minutos).
  const setupTime = parseInt(localStorage.getItem('setupTime'));
  if ((new Date().getTime() - setupTime) / 1000 / 60 > 300) {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  const clickHandler = (e) => {
    const selectorMarker = document.getElementById('selector-marker');
    const selected = document.getElementById(e.target.id);
    const left = selected.getBoundingClientRect().left;
    selectorMarker.style.left = left + 'px';
    if (e.target.id !== type) {
      setType(e.target.id);
      setDocuments();
      setIsLoading(true);
    }
  };

  // Ajustar posição do marcador quando o tamanho da janela é alterado
  const resizeHandler = () => {
    const selectorMarker = document.getElementById('selector-marker');
    const left = document.getElementById(type).getBoundingClientRect().left;
    selectorMarker.style.left = left + 'px';
  };

  useEffect(() => {
    window.addEventListener('resize', () => resizeHandler());
    // Posicionar o marcador no botão de atividades por defeito
    const selectorMarker = document.getElementById('selector-marker');
    const left = document.getElementById('atividades-selector').getBoundingClientRect().left;
    selectorMarker.style.left = left + 'px';
  }, []);

  useEffect(() => {
    setSelection();
  }, [type]);

  return (
    <div>
      <div className='dash-type-wrapper'>
        <div className='dash-type-selector-wrapper'>
          <div onClick={clickHandler} id='atividades-selector' className='dash-type-selector'>
            Atividades
          </div>
          <div onClick={clickHandler} id='recados-selector' className='dash-type-selector'>
            Recados
          </div>
        </div>
        <div id='selector-marker' className='dash-type-marker'></div>
      </div>
      <Toolbar />
      {isLoading && <Loading />}
      {documents && !isLoading ? <List documents={documents} type={type} /> : null}
    </div>
  );
}

export default Dashboard;
