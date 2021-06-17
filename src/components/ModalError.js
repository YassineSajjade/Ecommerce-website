import React from 'react'

function ModalError({displayP, fadeP, nameP}) {
    return (
        <div className={`error-modal modale animate__animated ${fadeP}`} style={{visibility: displayP}} >
            <div className="modal-inner">
                <div className="error-title">Error</div>
                <div className="error-message">All 1 {nameP} are in your cart.</div>
            </div>
        </div>
    )
}

export default ModalError;
