import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          {" "}
          <div className="section-header">
            <span className="title-section">Co so y te noi bac</span>
            <button className="btn-section">xem thêm</button>
          </div>
          <div className="section-body">
            {/* //lay thuoc tinh tu cha */}
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>He thong y te thu cuc 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>He thong y te thu cuc 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>He thong y te thu cuc 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>He thong y te thu cuc 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>He thong y te thu cuc 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility" />
                <div>He thong y te thu cuc 6</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
