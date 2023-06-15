import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
//import 1 funtion tu 1 file:
//ham get API:
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";
import { reject } from "lodash";
class UserManage extends Component {
  //Ham khoi tao cac state trong react(giong nhhu class):
  //properties;nested.
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {},
    };
  }
  //vao ham did mouth truoc:
  //goi api:
  async componentDidMount() {
    await this.getAllUsersFromReact();
    // console.log("data get user from nodejs: ", response);
  }

  /** Life circle
   * 1.Run component=>init cac bien(state)
   * 2. Did mount(dung de gan gia tri cho 1 bien state)-set state// born; unmout.
   * 3.Render(re-render)==> hien thi cho nguoi dung
   *
   */

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      // component tu render lai:
      this.setState(
        {
          arrUsers: response.users,
        }
        //callback:
        // () => {
        //   console.log("check state user 2: ", this.state.arrUsers);
        // }
      );
      // console.log("check state user 1: ", this.state.arrUsers);
    }
  };

  handleAddNewUser = () => {
    this.setState({
      // arrUsers: [],
      isOpenModalUser: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  toggleUserEditModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser,
    });
  };
  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
        //xoa data sau khi nhap:
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
      //  console.log('check response create user: ',response);
    } catch (e) {
      console.log(e);
    }
    // console.log('check data from child ', data);
  };

  handleDeleteUser = async (user) => {
    // console.log("click delete", user);
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode === 0) {
        await this.getAllUsersFromReact();
        // console.log("tk duoc xoa: ", res);
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditUser = (user) => {
    console.log("check edit ", user);
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user,
    });
  };
  doEditUser = async (user) => {
    try {
      let res = await editUserService(user);
      if (res && res.errCode === 0) {
        this.setState({
          isOpenModalEditUser: false,
        });
        await this.getAllUsersFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    console.log("check render: ", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          createNewUser={this.createNewUser}
          toggleFromParent={this.toggleUserModal}
        />
        {this.state.isOpenModalEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEditUser}
            editUser={this.doEditUser}
            toggleFromParent={this.toggleUserEditModal}
            currentUser={this.state.userEdit}
          />
        )}
        <div className="title text-center">MANAGE USERS WITH TRI BUI</div>
        <div className="mx-1 mt-1">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus mx-1"></i>Add new user
          </button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>Address</th>
                <th>phonenumber</th>
                <th>Action</th>
              </tr>
              {
                // map: duyet theo tung phan tu
                //  reder =javascript
                arrUsers &&
                  arrUsers.map((item, index) => {
                    // console.log("huu tri check map ", item, index);
                    return (
                      //khi render ra view chi ra 1 khoi->nen can phai boc lai:
                      <tr className="divClass" key={index}>
                        <td>{item.email}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.address}</td>
                        <td>{item.phonenumber}</td>
                        <td>
                          <button
                            className="btn-edit"
                            onClick={() => this.handleEditUser(item)}
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </button>
                          <button
                            className="btn-delete"
                            onClick={() => this.handleDeleteUser(item)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
