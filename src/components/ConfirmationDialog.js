import React from 'react'

export default function (props) {
    return (
        <div className="modal fade" id={props.id}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Atenção</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p style={{fontSize: "18px"}}>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ev => props.modalAction()}
                            data-dismiss="modal"
                        >
                            Confirmo
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Não confirmo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};