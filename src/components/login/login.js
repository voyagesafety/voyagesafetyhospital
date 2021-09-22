import React, { Component } from "react";
import { login, autoLogin } from "./../../actions/login.action";
import { connect } from "react-redux";
import "../login/login.css";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MedUsername: "",
      MedPassword: "",
    };
  }

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      <div
        className="alert alert-primary d-flex align-items-center"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>Incorrect Email or Password.</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <section className="u-clearfix sectionlogin" id="sec-96fb">
          <div className="u-clearfix u-sheet u-sheet-1">
            <h3 className="u-text u-text-default u-text-1" >กรุณาลงชื่อเข้าใช้</h3>
              <div className="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1" />
                <div className="u-form u-form-1">
                  <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                    <input type="hidden" id="siteId" name="siteId" defaultValue={2787330704} />
                    <input type="hidden" id="pageId" name="pageId" defaultValue={2008504319} />
                    <div className="u-form-group u-form-name">
                      <label htmlFor="name-1362" className="u-form-control-hidden u-label" />
                      <input type="text" placeholder="รหัสแพทย์" id="name-1362" name="MedUsername" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required 
                      onChange={(e) =>
                        this.setState({ MedUsername: e.target.value })
                      }
                      />
                    </div>
                    <div className="u-form-group u-form-group-2">
                      <label htmlFor="text-cfd3" className="u-form-control-hidden u-label" />
                      <input type="password" placeholder="รหัสผ่าน" id="text-cfd3" name="MedPassword" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" 
                      onChange={(e) =>
                        this.setState({ MedPassword: e.target.value })
                      }
                      />
                    </div>
                      <div style={{ marginLeft: 35 }}>
                        {this.props.loginReducer.isError && this.showError()}
                      </div>
                    <div className="u-align-center u-form-group u-form-submit">
                      <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-2 u-btn-1"
                          onClick={(e) => {
                            e.preventDefault();
                              this.props.login(
                              this.props.history,
                              this.state
                              );
                          }}>ลงชื่อเข้าใช้<br />
                      <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
                      </a>
                    </div>
                    <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                    <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                    <input type="hidden" defaultValue name="recaptchaResponse" />
                  </form>
                </div>
              </div>
            </section>
          </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

const mapDispatchToProps = {
  login,
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
