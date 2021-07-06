import React from 'react';
import { ReactComponent as LogoutIcon } from '../../../assets/icons/icon_logout.svg';

function Logout() {
  return (
    <div className='toolbar-item'>
      <LogoutIcon className='tool-icon' />
      <p>Sair</p>
    </div>
  );
}

function ToolModal() {}

export default Logout;
