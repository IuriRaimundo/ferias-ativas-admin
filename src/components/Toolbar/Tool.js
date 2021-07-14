import React, { useState } from 'react';

function Tool({ Icon, label, Modal }) {
  const [showModal, setShowModal] = useState(false);

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
