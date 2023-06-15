import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
class UserRedux extends Component {
  // Reducx
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        this.setState({
          genderArr: res.data,
        });
      }
      console.log("Tri check res: ", res);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    // console.log("Tri bui check state from redux: ", this.state);
    let genders = this.state.genderArr;
    let language = this.props.language;
    return (
      <div className="user-redux-container">
        <div className="title">Learn Reduc với User redux-TriBui</div>
        <div className="user-redux-body">
          <div>
            {/* boostrap-form */}
            <div className="container">
              <div className="row">
                <div className="col-12 my-3">
                  <FormattedMessage id="manage-user.add" />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.email" />
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.password" />{" "}
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.first-name" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="FirstName"
                  />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.last-name" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="LastName"
                  />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.phone-number" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="PhoneNumber"
                  />
                </div>
                <div className="col-9">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.address" />
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select className="form-control">
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, index) => {
                        return (
                          <option key={index}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.position" />
                  </label>
                  <select className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.role" />
                  </label>
                  <select className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-3">
                  <label>
                    {" "}
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-12 mt-3">
                  <button className="btn btn-primary">
                    {" "}
                    <FormattedMessage id="manage-user.save" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
