import React from "react";
import {
    Button, ButtonsArea,
    CloseButtonArea,
    Errors,
    FormArea,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    LabelInput,
    Wrapper,
    FormFieldStyled,
} from "./styles";
import {validateForm} from "./validate";
import {Field, Form} from "react-final-form";


type Props = {
    title: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
};

type State = {
    isModalOpen: boolean,
}

const onSubmit = (values: any) => {
    console.log(values);
}

class PopUp extends React.Component<Props, State> {

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
        const {title} = this.props;
        return (
            <Button type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={this.openModal}
            >
                {title}
            </Button>
        );
    }

    renderFieldForm = () => (
        <Form onSubmit={onSubmit}
              validate={validateForm}
              render={({handleSubmit, valid}) => (
                  <form onSubmit={handleSubmit}>
                      <Field name="name">
                          {({input, meta}) => (
                              <div>
                                  <LabelInput htmlFor="phoneNumber">Name</LabelInput>
                                  <Wrapper>
                                      <FormFieldStyled
                                      type="text"
                                      id="name"
                                      name="name"
                                      placeholder="Boris Johnson"
                                      {...input}
                                  />
                                      </Wrapper>
                                  {meta.error && meta.touched && <Errors>{meta.error}</Errors>}
                              </div>
                          )}
                      </Field>
                      <Field name="phoneNumber">
                          {({input, meta}) => (
                              <div>
                                  <LabelInput htmlFor="phoneNumber">Phone Number</LabelInput>
                                  <Wrapper>
                                  <FormFieldStyled
                                      type="text"
                                      name="phoneNumber"
                                      id="phoneNumber"
                                      placeholder="XX XXX XXXX"
                                      {...input}
                                  />
                                  </Wrapper>
                                  {meta.error && meta.touched && <Errors>{meta.error}</Errors>}
                              </div>
                          )}
                      </Field>
                      <ButtonsArea>
                          <Button type="button"
                                  onClick={this.closeModal}
                                  width="-webkit-fill-available"
                                  margin="20px 7px 10px"
                                  fontSize="12px"
                                  fontWeight="400"
                                  disabled
                          >
                              Support
                          </Button>
                          <Button type="submit"
                                  width="-webkit-fill-available"
                                  onSubmit={onSubmit}
                                  fontSize="12px"
                                  disabled={!valid}
                                  fontWeight="400"
                          >
                              Contact Sales
                          </Button>
                      </ButtonsArea>
                  </form>
              )}
        />
    );

    renderPopUp = () => {
        return (
            <Modal>
                <ModalContent>
                    <CloseButtonArea>
                        <img src={require('../../../src/components/icons/close-button/close.svg').default} alt="close"
                             onClick={this.closeModal}/>
                    </CloseButtonArea>
                    <ModalHeader>
                        <text>How to do a Website Audit to Improve SEO & Conversions</text>
                    </ModalHeader>
                    <ModalBody>
                        <text>You will get an SMS with a link to the webinar</text>
                    </ModalBody>
                    <FormArea>
                        <Form render={this.renderFieldForm} onSubmit={onSubmit}/>
                    </FormArea>
                    <ModalFooter>
                    </ModalFooter>
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