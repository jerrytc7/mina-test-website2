import React from "react";
import { Toast as BSToast } from "react-bootstrap";

function Toast({title, message ,onClose}) {
  return (
    <BSToast onClose={onClose}>
      <BSToast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
      </BSToast.Header>
      <BSToast.Body>{message}</BSToast.Body>
    </BSToast>
  );
}

export default Toast;
