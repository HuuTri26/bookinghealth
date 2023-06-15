import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "../../assets/logo.png";
import { FormattedMessage } from "react-intl";
// import { LANGUAGES } from "../../utils";
// Import css files
// import { changeLanguageApp } from "../../store/actions";
class About extends Component {
  render() {
    // console.log("check props: ", this.props);
    //lấy biến language từ redux;
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyen thong</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/arVmr82lSgs"
              title="Meet Xiaomi 13 Ultra"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
          <p>#Xiaomi13UltraLaunchEvent is LIVE! 🟠📷🔴 Step into a whole new era of mobile optical imaging!<br/><br/><br/>Contact:<br/></p>
          <div className="about-icon">
            <div className="content-icon">
            <i  className="fab fa-facebook-square"></i>
            </div>
            <div className="content-icon">
            <i className="fab fa-google-plus-square"></i>
            </div>
            <div className="content-icon">
            <i className="fab fa-twitter-square"></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
