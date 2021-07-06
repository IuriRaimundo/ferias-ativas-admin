import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <li className='auth-loading'>
      <span className='loading-text'>A aguardar resposta</span>
      <span className='loading-span'></span>
      <span className='loading-span'></span>
      <span className='loading-span'></span>
    </li>
  );
}

export default Loading;
