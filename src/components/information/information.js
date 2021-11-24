import React, { Component } from "react";
import "../information/information.css";
import { validateForm } from "../../utils/regex.js";
import { httpClient } from "../../utils/HttpClient";
import { server, YES } from "../../constants";
import Modal from "react-bootstrap/Modal";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: null,
      Gender: "",
      CitizenId: null,
      VaccineName: null,
      VaccinceDate: null,
      hospitalName: null,
      Dose: "1",
      Error: "",
      errors: {
        FirstName: "",
        LastName: "",
        CitizenId: "",
        VaccineName: "",
        VaccineDate: "",
      },
      passModal: false,
      failModal: false,
    };
    this.showPassModal = this.showPassModal.bind(this);
    this.hidePassModal = this.hidePassModal.bind(this);
    this.showFailModal = this.showFailModal.bind(this);
    this.hideFailModal = this.hideFailModal.bind(this);
  }

  componentDidMount() {
    try {
      this.setState({ isFetching: true });
      if (localStorage.getItem(server.LOGIN_PASSED) == YES) {
        let token = localStorage.getItem("Token");
        httpClient
          .get(server.GET_INFO, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            this.setState({ hospitalName: result.data.result.hospital })
          });
      } else {
      }
    } catch (e) {}
  }

  showPassModal = () => {
    this.setState({ passModal: true });
  };

  hidePassModal = () => {
    this.setState({ passModal: false });
  };

  showFailModal = () => {
    this.setState({ failModal: true });
  };

  hideFailModal = () => {
    this.setState({ failModal: false });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "FirstName":
        errors.FirstName =
          value.length < 0
            ? "First Name must be more than 1 characters long!"
            : "";
        break;
      case "LastName":
        errors.LastName =
          value.length < 5
            ? "Last Name must be more than 1 characters long!"
            : "";
        break;
      case "CitizenId":
        errors.CitizenId =
          value.length < 13 ? "Citizen id must be 13 characters long!" : "";
        break;
      case "VaccineName":
        errors.Telno =
          value.length < 5 ? "Vaccine Name must be 5 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleInformationSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      console.log(this.state.errors);
      if (this.state.Gender !== "" || this.state.Gender.length > 0) {
        var data = new FormData();
        data.append("citizenIdInput", this.state.CitizenId);
        data.append("firstNameInput", this.state.FirstName);
        data.append("lastNameInput", this.state.LastName);
        data.append("genderInput", this.state.Gender);
        data.append("vaccineName", this.state.VaccineName);
        data.append("dateGetVaccine", this.state.VaccineDate);
        data.append("hospitalName", this.state.hospitalName);
        data.append("Dose", this.state.Dose);
        httpClient
          .post(server.ADD_INFORMATION, data)
          .then((response) => {
            console.log(response.data.result);
            if (response.data.result === true) {
              this.showPassModal();
            } else {
              this.showFailModal();
            }
          })
          .catch((error) => {
            console.error(error);
            this.showFailModal();
          });
      } else {
        this.setState({ Error: "โปรดระบุเพศ" });
        console.log("Invalid gender");
      }
    } else {
      console.log(this.state.errors);
      console.info("Invalid Form");
    }
  };

  render() {
    const { errors, passModal, failModal } = this.state;
    return (
      <div>
        <section className="u-clearfix u-section-1" id="sec-776b">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-container-style u-custom-color-3 u-group u-radius-15 u-shape-round u-group-1">
              <div className="u-container-layout u-container-layout-1">
                <h2 className="u-text u-text-1">
                  <b>กรอกประวัติการฉีดวัคซีน</b>
                </h2>
                <div className="u-form u-form-1">
                  <form
                    className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
                    style={{ padding: 10 }}
                  >
                    <div className="u-form-group u-form-name u-form-group-1">
                      <label className="u-form-control-hidden u-label" />
                      <input
                        type="text"
                        placeholder="ชื่อจริง"
                        name="FirstName"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        required
                        onChange={this.handleChange}
                      />
                      {errors.FirstName.length > 0 && (
                        <span className="error">{errors.FirstName}</span>
                      )}
                    </div>
                    <div className="u-form-group u-form-name u-form-group-2">
                      <label className="u-form-control-hidden u-label" />
                      <input
                        type="text"
                        placeholder="นามสกุล"
                        name="LastName"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        required
                        onChange={this.handleChange}
                      />
                      {errors.LastName.length > 0 && (
                        <span className="error">{errors.LastName}</span>
                      )}
                    </div>
                    <div className="u-form-group u-form-radiobutton u-form-group-3">
                      <div
                        className="u-form-radio-button-wrapper"
                        onChange={(e) => {
                          this.setState({ Gender: e.target.value });
                        }}
                      >
                        <input
                          type="radio"
                          name="radiobutton"
                          defaultValue="เพศชาย"
                          required="required"
                          value="1"
                        />{" "}
                        <label
                          className="u-label"
                          style={{ color: "#000000" }}
                          htmlFor="radiobutton"
                        >
                          เพศชาย
                        </label>
                        <br />
                        <input
                          type="radio"
                          name="radiobutton"
                          defaultValue="เพศหญิง"
                          required="required"
                          value="2"
                        />{" "}
                        <label
                          className="u-label"
                          style={{ color: "#000000" }}
                          htmlFor="radiobutton"
                        >
                          เพศหญิง
                        </label>
                        <br />
                      </div>
                    </div>
                    <div className="u-form-group u-form-name u-form-group-4">
                      <label
                        htmlFor="name-769e"
                        className="u-form-control-hidden u-label"
                      />
                      <input
                        type="text"
                        placeholder="รหัสบัตรประชาชน"
                        id="name-769e"
                        name="CitizenId"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        required
                        onChange={this.handleChange}
                      />
                      {errors.CitizenId.length > 0 && (
                        <span className="error">{errors.CitizenId}</span>
                      )}
                    </div>
                    <div className="u-form-group u-form-name u-form-group-5">
                      <label className="u-form-control-hidden u-label" />
                      <input
                        type="text"
                        placeholder="ชื่อวัคซีน"
                        name="VaccineName"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        required
                        onChange={this.handleChange}
                      />
                      {errors.VaccineName.length > 0 && (
                        <span className="error">{errors.VaccineName}</span>
                      )}
                    </div>
                    <div className="u-form-date u-form-group u-form-group-6">
                      <label className="u-form-control-hidden u-label" />
                      <input
                        type="date"
                        placeholder="MM/DD/YYYY"
                        name="VaccineDate"
                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                        required
                        onChange={(e) => {
                          this.setState({ VaccineDate: e.target.value });
                        }}
                      />
                    </div>
                    <div className="u-form-group u-form-select u-form-group-7">
                      <label className="u-form-control-hidden u-label" />
                      <div className="u-form-select-wrapper">
                        <select
                          name="Dose"
                          className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                          required="required"
                          onChange={(e) => {
                            this.setState({ Dose: e.target.value });
                          }}
                        >
                          <option value="1">โดสที่ 1</option>
                          <option value="2">โดสที่ 2</option>
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={12}
                          version={1}
                          className="u-caret"
                        >
                          <path fill="currentColor" d="M4 8L0 4h8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="u-align-right u-form-group u-form-submit">
                      <a
                        href="#"
                        className="u-btn u-btn-submit u-button-style"
                        style={{ background: "#0F4A69", color: "#FFFFFF" }}
                        onClick={this.handleInformationSubmit}
                      >
                        ยืนยัน
                      </a>
                      <input type="submit" className="u-form-control-hidden" />
                    </div>
                  </form>
                </div>
                <p className="u-text u-text-2">ชื่อจริง :&nbsp;</p>
                <p className="u-text u-text-default u-text-3">
                  นามสกุล :&nbsp;
                </p>
                <p className="u-text u-text-default u-text-4">เพศ :&nbsp;</p>
                <p className="u-text u-text-default u-text-5">
                  รหัสบัตรประชาชน :&nbsp;
                </p>
                <p className="u-text u-text-default u-text-6">
                  ชื่อวัคซีน :&nbsp;
                </p>
                <p className="u-text u-text-default u-text-7">
                  วันที่ฉีดวัคซีน :&nbsp;
                </p>
                <p className="u-text u-text-default u-text-8">โดส :&nbsp;</p>
              </div>
            </div>
          </div>
        </section>
        <Modal
          size="sm"
          show={passModal}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <div style={{ textAlign: "center" }}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--success">
                  <div className="simplert__line simplert__line--success" />
                  <div className="simplert__line simplert__line--success-2" />
                </div>
              </div>
              <b className="simplert__title">เพิ่มสำเร็จ</b>
            </div>
            {/* <div className="simplert__body">
              <div>
                ข้อมูลวัคซีนของท่านได้รับการอัพเดท
              </div>
            </div> */}
            <div className="simplert__footer">
              <button
                className="simplert__close "
                onClick={() => this.hidePassModal()}
              >
                ปิด
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          size="sm"
          show={failModal}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
        >
          <div style={{ textAlign: "center" }}>
            <div className="simplert__header">
              <div>
                <div className="simplert__icon simplert__icon--error">
                  <div className="simplert__line simplert__line--error" />
                  <div className="simplert__line simplert__line--error-2" />
                </div>
              </div>
              <b className="simplert__title">ผิดพลาด</b>
            </div>
            <div className="simplert__footer">
              <button
                className="simplert__close "
                onClick={() => this.hideFailModal()}
              >
                ปิด
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Information;
