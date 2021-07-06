import React from 'react';
import './Toolbar.css';
import Add from './Tools/Add';
import Delete from './Tools/Delete';
import Logout from './Tools/Logout';

function Toolbar() {
  return (
    <div className='toolbar-wrapper'>
      <Add />
      <Delete />
      <Logout />
    </div>
  );
}

export default Toolbar;
