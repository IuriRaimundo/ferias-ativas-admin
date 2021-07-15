import React, { useState, useEffect } from 'react';

function Tool({ Icon, label, Modal }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  return (
    <>
      <div className='toolbar-item' onClick={() => setShowModal(true)}>
        <Icon className='tool-icon' />
        <p>{label}</p>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}

export default Tool;
