import React from 'react';

const ActionModal = ({title, message, modalData, successAction}) => {
    return (
        <div>
<input type="checkbox" id="action-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <label htmlFor="action-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={()=>successAction(modalData)} htmlFor="action-modal" className="btn">Delete</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ActionModal;