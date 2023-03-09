import React, { useState } from 'react';
import styled from "@emotion/styled";
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 15px;
  padding: 10px;
  
  margin: 0 20px;
  cursor: pointer;
`;
const CloseButton = styled.button`
  background-color: #E5CDCE;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-style: none;
  margin: 10px 40px;
  cursor: pointer;
`;

function DeliveryButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button className="btn" variant="outline-primary" onClick={handleShow}>배송 기간</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>배송 기간</Modal.Title>
                </Modal.Header>
                <Modal.Body>데이터</Modal.Body>
                <Modal.Footer>
                    <CloseButton className="btn_close" variant="secondary" onClick={handleClose}>
                        닫기
                    </CloseButton>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default DeliveryButton;


//import './MyButton.css';

// function DeliveryButton() {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return(
//         <div>
//             <Button className="btn" variant="outline-primary" onClick={handleShow}>배송 기간</Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header>
//                     <Modal.Title>배송 기간</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>데이터</Modal.Body>
//                 <Modal.Footer>
//                     <Button className="btn_close" variant="secondary" onClick={handleClose}>
//                         닫기
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }
// export default DeliveryButton;