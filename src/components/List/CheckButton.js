import React from 'react';
//Utils
import { useDashboardContext } from '../../utils/DashboardContext';
//Icones
import { ReactComponent as CheckMarkIcon } from '../../assets/icons/icon_check_mark.svg';

function CheckButton({ id }) {
  const { selection } = useDashboardContext();

  return (
    <div className={`check-button ${selection?.id === id ? 'check-button-checked' : ''}`}>
      {selection && selection.id === id && <CheckMarkIcon />}
    </div>
  );
}

export default CheckButton;
