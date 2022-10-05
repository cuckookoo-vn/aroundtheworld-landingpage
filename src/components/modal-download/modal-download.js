import './modal-download.scss';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BsXCircle, BsApple } from "react-icons/bs";
import { BiDesktop } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
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
                        <button onClick={handleDownload}>
                            <BiDesktop className="icon"/>
                            PC
                            <span>Coming soon...</span>
                        </button>

                        <button onClick={handleDownload}>
                            <DiAndroid className="icon"/>
                            Android
                            <span>Coming soon...</span>
                        </button>

                        <button onClick={handleDownload}>
                            <BsApple className="icon"/>
                            IOS
                            <span>Coming soon...</span>
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            <AlertNotification alertStatus={alert} closeAlert={()=>closeAlert()} title={"Download Success"} />
        </>
    )
}

export default ModalDownload;