import React from "react";
import {Button, Modal, ModalBody, ModalContent, ModalHeader} from "./styles";

type State = {
    isModalOpen: boolean,
}

class PopUp extends React.Component<State> {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    openModal = () => {
        this.setState({isModalOpen: true});
    }

    closeModal = () => {
        this.setState({isModalOpen: false});
    }

    renderPopUpButton = () => {
        return (
            <Button type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={this.openModal}
            >
                Run the Plerdy tool
            </Button>
        );
    }

    renderPopUp = () => {
        return (
            <Modal>
                <ModalContent>
                    <ModalHeader>
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={this.closeModal}/>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                        <p>Modal body text goes here.</p>
                    </ModalBody>
                    <ModalHeader>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={this.closeModal}>Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </ModalHeader>
                </ModalContent>
            </Modal>
        );
    }

    render() {
        const {isModalOpen} = this.state;
        return (
            <div>
                {this.renderPopUpButton()}
                {isModalOpen ? this.renderPopUp() : null}
            </div>
        );
    }
}

export default PopUp;