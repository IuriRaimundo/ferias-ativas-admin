import React, { useRef, useState } from 'react';
import { useDashboardContext } from '../../../../utils/DashboardContext';
import ToolButtons from '../../ToolButtons';
import { request } from '../../../../utils/request';
import Atividades from './Atividades';
import Recados from './Recados';

function Add({ setShowModal }) {
  const { type } = useDashboardContext();

  if (type === 'atividades-selector') {
    return <Atividades setShowModal={setShowModal} />;
  } else {
    return <Recados setShowModal={setShowModal} />;
  }
}
export default Add;
