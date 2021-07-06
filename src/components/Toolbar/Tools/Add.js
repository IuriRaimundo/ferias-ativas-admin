import React from 'react';
import { ReactComponent as AddIcon } from '../../../assets/icons/icon_add.svg';

function Add() {
  return (
    <div className='toolbar-item'>
      <AddIcon className='tool-icon' />
      <p>Criar</p>
    </div>
  );
}

function ToolModal() {}

export default Add;
