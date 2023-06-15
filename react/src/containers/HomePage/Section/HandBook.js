import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "../../assets/logo.png";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
// import { LANGUAGES } from "../../utils";
// Import css files

// import { changeLanguageApp } from "../../store/actions";
class HandBook extends Component {
  render() {
    // console.log("check props: ", this.props);
    //lấy biến language từ redux;
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          {" "}
          <div className="section-header">
            <span className="title-section">Cam nang</span>
            <button className="btn-section">xem thêm</button>
          </div>
          <div className="section-body">
            {/* //lay thuoc tinh tu cha */}
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ xương khớp 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ xương khớp 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ xương khớp 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ xương khớp 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook" />
                <div>Cơ xương khớp 6</div>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
