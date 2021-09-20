import React, { Component } from "react";
import "../information/information.css"

class Information extends Component {
  render() {
    return (
    <div>
      <section className="u-clearfix u-section-1" id="sec-776b">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-container-style u-custom-color-3 u-group u-radius-15 u-shape-round u-group-1">
            <div className="u-container-layout u-container-layout-1">
            <h2 className="u-text u-text-1"><b>กรอกประวัติการฉีดวัคซีน</b>
            </h2>
              <div className="u-form u-form-1">
                <form action="#" method="POST" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{padding: 10}}>
                  <input type="hidden" id="siteId" name="siteId" defaultValue={2787330704} />
                  <input type="hidden" id="pageId" name="pageId" defaultValue={84195804} />
                  <div className="u-form-group u-form-name u-form-group-1">
                    <label htmlFor="name-dadd" className="u-form-control-hidden u-label" />
                    <input type="text" placeholder="ชื่อจริง" id="name-dadd" name="name" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                  </div>
                  <div className="u-form-group u-form-name u-form-group-2">
                    <label htmlFor="name-8f35" className="u-form-control-hidden u-label" />
                    <input type="text" placeholder="นามสกุล" id="name-8f35" name="surname" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                  </div>
                  <div className="u-form-group u-form-radiobutton u-form-group-3">
                    <div className="u-form-radio-button-wrapper">
                      <input type="radio" name="radiobutton" defaultValue="เพศชาย" required="required" />
                      <label className="u-label" style={{color:'#000000'}} htmlFor="radiobutton">เพศชาย</label>
                      <br />
                      <input type="radio" name="radiobutton" defaultValue="เพศหญิง" required="required" />
                      <label className="u-label" style={{color:'#000000'}} htmlFor="radiobutton">เพศหญิง</label>
                      <br />
                    </div>
                  </div>
                  <div className="u-form-group u-form-name u-form-group-4">
                    <label htmlFor="name-769e" className="u-form-control-hidden u-label" />
                    <input type="text" placeholder="รหัสบัตรประชาชน" id="name-769e" name="citizenId" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                  </div>
                  <div className="u-form-group u-form-name u-form-group-5">
                    <label htmlFor="name-04d9" className="u-form-control-hidden u-label" />
                    <input type="text" placeholder="ชื่อวัคซีน" id="name-04d9" name="vaccineName" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                  </div>
                  <div className="u-form-date u-form-group u-form-group-6">
                    <label htmlFor="date-092b" className="u-form-control-hidden u-label" />
                    <input type="date" placeholder="MM/DD/YYYY" id="date-092b" name="vaccineDate" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required />
                  </div>
                  <div className="u-form-group u-form-select u-form-group-7">
                    <label htmlFor="select-8724" className="u-form-control-hidden u-label" />
                      <div className="u-form-select-wrapper">
                        <select id="select-8724" name="select" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="required">
                          <option value="โดสที่ 1">โดสที่ 1</option>
                          <option value="โดสที่ 2">โดสที่ 2</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} version={1} className="u-caret"><path fill="currentColor" d="M4 8L0 4h8z" /></svg>
                      </div>
                  </div>
                  <div className="u-align-right u-form-group u-form-submit" >
                    <a href="#" className="u-btn u-btn-submit u-button-style" style={{background:'#0F4A69' , color:'#FFFFFF'}}>ยืนยัน</a>
                    <input type="submit" defaultValue="submit" className="u-form-control-hidden"/>
                  </div>
                  <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                  <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                </form>
              </div>
              <p className="u-text u-text-2">ชื่อจริง :&nbsp;</p>
              <p className="u-text u-text-default u-text-3">นามสกุล :&nbsp;</p>
              <p className="u-text u-text-default u-text-4">เพศ :&nbsp;</p>
              <p className="u-text u-text-default u-text-5">รหัสบัตรประชาชน :&nbsp;</p>
              <p className="u-text u-text-default u-text-6">ชื่อวัคซีน :&nbsp;</p>
              <p className="u-text u-text-default u-text-7">วันที่ฉีดวัคซีน :&nbsp;</p>
              <p className="u-text u-text-default u-text-8">โดส :&nbsp;</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Information;
