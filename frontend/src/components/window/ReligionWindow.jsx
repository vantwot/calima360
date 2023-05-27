import React from 'react';
import {Button, Modal} from "react-bootstrap";

const ReligionWindow = (props) => {
    <Modal {...props}>
        <Modal.Header closeButton>
            <Modal.Title>Ventana de prueba</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Aqui se mostrará toda la información de la lección.
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={()=>props.handleCloseIn()}>
              Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ReligionWindow