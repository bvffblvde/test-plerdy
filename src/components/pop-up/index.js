import React from "react";
import {Button} from "./styles";

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
            <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={this.closeModal}></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={this.closeModal}>Close
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
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
