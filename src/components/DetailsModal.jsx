import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../assets/Home.css';

function DetailsModal({showModal, handleClose, selectedItem}){
    return (
        <Modal
  show={showModal}
  onHide={handleClose}
  fullscreen={true}
  centered
  className='modal'
>
  <Modal.Header style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <Modal.Title>Details</Modal.Title>
    </Modal.Header>
    <Modal.Body className='modal-body'>
            {selectedItem ? (
            <div>
                <p><strong>Company Name:</strong> {selectedItem["Company Name"]}</p>
                <p><strong>Industry:</strong> {selectedItem["Industry"]}</p>
                <p><strong>About:</strong> {selectedItem["Description"]}</p>
                <p><strong>Website:</strong> {selectedItem["Website"]}</p>
            </div>
            ) : (
            <p>No details to show.</p>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
    </Modal>
    )
    
}

export default DetailsModal;