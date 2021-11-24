import React, { Component } from "react";
import { server, YES } from "../../constants";
import { connect } from "react-redux";
import "../Header/Header.css";
import { withRouter } from "react-router-dom";

class Header extends Component {
  componentDidMount() {}
  render() {
    if (localStorage.getItem(server.LOGIN_PASSED) === YES) {
      return (
        <div>
          <header
            className="u-clearfix u-custom-color-1 u-header u-header"
            id="sec-b445"
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <button
                type="button"
                className="btn btn-dark navbar-right"
                onClick={() => {
                  this.props.history.push("/login");
                  localStorage.clear();
                }}
              >
                ลงชื่อออก
              </button>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header
            className="u-clearfix u-custom-color-1 u-header u-header"
            id="sec-b445"
          >
            <div className="u-clearfix u-sheet u-sheet-1" />
          </header>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ appReducer }) => ({ appReducer });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
