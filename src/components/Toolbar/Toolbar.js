import React from 'react';
import './Toolbar.css';
import { useDashboardContext } from '../../utils/DashboardContext';
import Tool from './Tool';
import AddModal from './Modals/Add/Add';
import { ReactComponent as AddIcon } from '../../assets/icons/icon_add.svg';
import DeleteModal from './Modals/Delete';
import { ReactComponent as DeleteIcon } from '../../assets/icons/icon_delete.svg';
import ViewDocModal from './Modals/ViewDoc/ViewDoc';
import { ReactComponent as ViewIcon } from '../../assets/icons/icon_logout.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/icon_logout.svg';

function Toolbar() {
  const { selection } = useDashboardContext();

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className='toolbar-wrapper'>
      <Tool Icon={AddIcon} label='Criar' Modal={AddModal} />
      {selection && <Tool Icon={ViewIcon} label='Ver documento' Modal={ViewDocModal} />}
      {selection && <Tool Icon={DeleteIcon} label='Apagar' Modal={DeleteModal} />}
      <div className='toolbar-item' onClick={logout}>
        <LogoutIcon className='tool-icon' />
        <p>Sair</p>
      </div>
    </div>
  );
}

export default Toolbar;
