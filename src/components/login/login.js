import React, { Component } from "react";
import "../login/login.css";

class Login extends Component {
  
  render() {
    return (
      <div>
        <section className="u-clearfix u-section-1" id="sec-96fb">
          <div className="u-clearfix u-sheet u-sheet-1">
            <h3 className="u-text u-text-default u-text-1">กรุณาลงชื่อเข้าใช้</h3>
              <div className="u-border-1 u-border-grey-dark-1 u-line u-line-horizontal u-line-1" />
                <div className="u-form u-form-1">
                  <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                    <input type="hidden" id="siteId" name="siteId" defaultValue={2787330704} />
                    <input type="hidden" id="pageId" name="pageId" defaultValue={2008504319} />
                    <div className="u-form-group u-form-name">
                      <label htmlFor="name-1362" className="u-form-control-hidden u-label" />
                      <input type="text" placeholder="รหัสแพทย์" id="name-1362" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                    </div>
                    <div className="u-form-group u-form-group-2">
                      <label htmlFor="text-cfd3" className="u-form-control-hidden u-label" />
                      <input type="text" placeholder="รหัสผ่าน" id="text-cfd3" name="text" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" />
                    </div>
                    <div className="u-align-center u-form-group u-form-submit">
                      <a href="#" className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-2 u-btn-1">ลงชื่อเข้าใช้<br />
                      </a>
                      <input type="submit" defaultValue="submit" className="u-form-control-hidden" />
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

export default Login;
