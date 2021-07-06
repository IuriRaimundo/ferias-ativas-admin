import React, { useEffect } from 'react';
import './Dashboard.css';
import { useDashboardContext } from '../../utils/DashboardContext';
import Toolbar from '../Toolbar/Toolbar';
import List from '../List/List';

function Dashboard() {
  const { type, setType } = useDashboardContext();

  const clickHandler = (e) => {
    const selectorMarker = document.getElementById('selector-marker');
    const selected = document.getElementById(e.target.id);
    const left = selected.getBoundingClientRect().left;
    selectorMarker.style.left = left + 'px';
    setType(e.target.id);
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
      <List />
    </div>
  );
}

export default Dashboard;
