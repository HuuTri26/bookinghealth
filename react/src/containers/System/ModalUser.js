//recatetrap
import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    //Muon lay ra gi pha dat state
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
    };
    this.listenToEmitter();
  }
  listenToEmitter() {
    //hung event
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      //reset state:
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phonenumber: "",
      });
    });
  } //bus event
  componentDidMount() {}
  //toggle la click ra ngoai :
  toggle = () => {
    this.props.toggleFromParent();
  };
  //Batn duoc cac thay doi:
  handleOnChangeInput = (event, id) => {
    //bad code.modify state:
    /**
     * this.state={
     * email:'',
     * password:'',
     * firstName:'',
     * lastName:'',
     * address:'',
     * }
     * this.state.email===this.state['email];
     */
    // this.state[id] = event.target.value;
    // this.setState(
    //   {
    //     //...: copy trong js:
    //     /**
    //      * this.state={
    //      * email:'',
    //      * password:'',
    //      * firstName:'',
    //      * lastName:'',
    //      * address:'',
    //      * }
    //      * this.state.email===this.state['email];
    //      * ==>sao chep lai state vua sua doi.
    //      */
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check bad state: ", this.state);
    //   }
    // );

    //good code:
    //thong qua bien trung gian de luu state:
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      }
      // () => {
      //   console.log("check good state: ", this.state);
      // }
    );
    // console.log('copyState: ',copyState);
    //lay gia tri cua 1 event-gia tri cua html:
    // console.log("event 1: ", event.target.value, id);
  };
  checkValIndexInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phonenumber",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      // console.log("check inside loop: ", this.state[arrInput[i]], arrInput[i]);
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleAddNewUser = () => {
    let isValid = this.checkValIndexInput();
    if (isValid === true) {
      // console.log('check props child',this.props);
      this.props.createNewUser(this.state);
      // console.log("your full you have input data modal: ", this.state);
    }
  };
  render() {
    // console.log("check child prop", this.props);
    // console.log("check child is open modal ", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        // centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "email");
                }}
                value={this.state.email}
              />
            </div>
            <div className="input-container">
              <label>password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "password");
                }}
                value={this.state.password}
              />
            </div>
            <div className="input-container">
              <label>firstName</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>lastName</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label>address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
            <div className="input-container max-width-input">
              <label>phonenumber</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "phonenumber");
                }}
                value={this.state.phonenumber}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-3"
            color="primary"
            onClick={() => {
              this.handleAddNewUser();
            }}
          >
            Add new
          </Button>{" "}
          <Button
            className="px-3"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
