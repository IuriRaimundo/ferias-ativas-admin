import React from 'react';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/icon_delete.svg';

function Delete() {
  return (
    <div className='toolbar-item'>
      <DeleteIcon className='tool-icon' />
      <p>Apagar</p>
    </div>
  );
}

function ToolModal() {}

export default Delete;
