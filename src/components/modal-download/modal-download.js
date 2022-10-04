import './modal-download.scss';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsXCircle} from "react-icons/bs";
import AlertNotification from "../alert-notification/alert-notification";

let timeOut = null;
let timeIn = null;

const ModalDownload = ({show,setShow}) =>{

    const handleDownload = () => {
        if(!alert){
            timeIn= setTimeout(()=>{ setAlert(true)},500);
            timeOut = setTimeout(()=>{ setAlert(false)},2800);
        }
        setShow(false);
    }

    const handleClose = () => setShow(false);

    const [alert, setAlert] = useState(false);

    const closeAlert = () =>{
        setAlert(false);
        clearTimeout(timeOut);
        clearTimeout(timeIn);
    }
    return(
        <>
            <Modal show={show} onHide={handleClose} className="modal-download">
                <Modal.Body>
                    <div className="modal-download-body">
                        <BsXCircle className="icon-close"
                                   onClick={()=>handleClose()} />

                        <Button variant="primary"
                                onClick={handleDownload}>
                            PC
                        </Button>

                        <Button variant="primary"
                                onClick={handleDownload}>
                            IOS
                        </Button>

                        <Button variant="primary"
                                onClick={handleDownload}>
                            Android
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            <AlertNotification alertStatus={alert} closeAlert={()=>closeAlert()} title={"Download Success"} />
        </>
    )
}

export default ModalDownload;