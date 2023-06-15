import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "../../assets/logo.png";
import { FormattedMessage } from "react-intl";
// import { LANGUAGES } from "../../utils";
// Import css files

// import { changeLanguageApp } from "../../store/actions";
class HomeFooter extends Component {
  render() {
    // console.log("check props: ", this.props);
    //lấy biến language từ redux;
    return (
      <div className="home-footer">
        <p>
          &copy;2023 By HuuTri.com. For more Infor please visit my chanel:
          <a target="_blank" href="https://www.youtube.com/channel/UCCspJ6mFfCwOV4qFjZWi2wg">
            {" "}
            &#8594;Click me&#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    //redux:bộ nhớ của ứng dụng react
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fire event:
    // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
