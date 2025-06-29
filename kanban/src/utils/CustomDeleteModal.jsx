import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function CustomDeleteModal({show,close,message,buttonText,onConfirm}) {
  return (
   <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
            Alert
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={()=>{
            onConfirm(),close()
        }}>
            {buttonText}
        </Button>
      </Modal.Footer>
   </Modal>
  )
}

export default CustomDeleteModal
