import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const OneContact = ({ id, first_name, country_id, buttonLabel }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="link" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{id}</ModalHeader>
        <ModalBody>
          Name: {(first_name && first_name) || "null"}
          <br />
          Country_id: {country_id}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OneContact;
