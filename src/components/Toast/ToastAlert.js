import React, { useState,useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useNavigate } from 'react-router-dom';

function AlertMessage({show,message = "Create Data Success"}) {
  const [position, setPosition] = useState('middle-center');
  let navigate = useNavigate();

  return (
    <ToastContainer  position={position}>
      <Toast show={show} style={{
        background : "#30b566",
        fontWeight : "bold",
        textAlign : "center",
        color : "white"
      }}>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AlertMessage;