/* eslint-disable no-useless-escape */
import { React, useState } from "react";
import axios from "axios";
import "../css/Registration.css";

function Registration() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email_id: "",
    mobile_no: "",
    birth_date: "",
    gender: "",
    address: "",
  });
  // const [validation, setValidation] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email_id: "",
  //   mobile_no: "",
  //   birth_date: "",
  //   gender: "",
  //   address: "",
  // });
 
  const {
    first_name,
    last_name,
    email_id,
    mobile_no,
    birth_date,
    gender,
    address,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {

    console.log("here")
    // let errors = validation;

    // //first Name validation
    // const fname = "[A-Za-z]{32}$/";
    // if (user.first_name.length <= 0) {
    //   errors.first_name = "First name is required";
    // } 
    // else if (!user.first_name.match(fname)) {
    //   errors.first_name = "";
    // }  
    // console.log("user.first_name")
    // //last Name validation
    // const lname = "[A-Za-z]{32}";
    // if (!user.last_name.trim()) {
    //   errors.last_name = "Last name is required";
    // } else if (!user.last_name.match(lname)) {
    //   errors.last_name = "";
    // } 

    // // email validation
    // const email = "/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/";
    // if (!user.email_id.trim()) {
    //   errors.email = "Email is required";
    // } else if (!user.email_id.match(email)) {
    //   errors.email_id = "";
    // }

    // //Mobile No validation
    // const number = "[789][0-9]{10}";
    // if (!user.mobile_no.trim()) {
    //   errors.mobile_no = "";
    // } else if (!user.mobile_no.match(number)) {
    //   errors.mobile_no = "";
    // }

    const data = await axios.post("http://127.0.0.1:5000/create", user);
    if (data.status === 200) {
      alert("Registration Successfully........");
      setUser({
        first_name: "",
        last_name: "",
        email_id: "",
        mobile_no: "",
        birth_date: "",
        gender: "",
        address: "",
      });
    }

  };
  return (
    <>
      <div className="bg-container">
        {/* Registration Form */}
        <form onSubmit={(e) => handelSubmit(e)} className="container mb-3">
          <h2 className="heading">Registration Form</h2>

          <label className="mb-2">
            <b>First Name</b>
          </label>
          <div>
            <i class="far fa-user icon-user"></i>
            <input
              type="text"
              className=" input-box mb-2 input-txt"
              placeholder="Enter First Name"
              name="first_name"
              value={first_name}
              autoComplete="off"
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* {validation.first_name && <p>{validation.first_name}</p>} */}
          <label className="mb-2">
            <b>Last Name</b>
          </label>
          <div>
            <i class="far fa-user icon-user"></i>
            <input
              type="text"
              className="input-box mb-2 input-txt"
              placeholder="Enter Last Name"
              name="last_name"
              value={last_name}
              autoComplete="off"
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* {validation.last_name && <p>{validation.last_name}</p>} */}
          <label className="mb-2">
            <b>Email Id</b>
          </label>
          <div>
            <i class="far fa-envelope icon-user"></i>
            <input
              type="email"
              className="input-box mb-2 input-txt"
              placeholder="Enter Email"
              name="email_id"
              value={email_id}
              autoComplete="off"
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* {validation.email_id && (
            <p onChange={(e) => onInputChange(e)}>{validation.email_id}</p>
          )} */}
          <label className="mb-2">
            <b>Mobile No</b>
          </label>
          <div>
            <i className="fa fa-phone icon-user"></i>
            <input
              type="text"
              className="input-box mb-2 input-txt"
              placeholder="Mobile No"
              name="mobile_no"
              value={mobile_no}
              autoComplete="off"
              required
              pattern="[789][0-9]{10}"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* {validation.mobile_no && <p>{validation.mobile_no}</p>} */}
          <label className="mb-2">
            <b>Date of Birth </b>
          </label>
          <div>
            <input
              type="date"
              className="input-box mb-2 input-text"
              name="birth_date"
              value={birth_date}
              autoComplete="off"
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <label className="mb-2">
            <b>Gender</b>
          </label>
          <div class="mb-3">
            <input
              type="radio"
              name="gender"
              onChange={(e) => onInputChange(e)}
              value="Female"
              checked={gender === "Female"}
            />
            <label className="input-label">Female</label>
            <input
              type="radio"
              name="gender"
              onChange={(e) => onInputChange(e)}
              value="Male"
              checked={gender === "Male"}
            />
            <label className="input-label">Male</label>
          </div>

          <label className="mb-2">
            <b>Address</b>
          </label>
          <div>
            <textarea
              type="text"
              className="input-textarea mb-2  input-text"
              name="address"
              value={address}
              placeholder="Address with City and Zip Code"
              autoComplete="off"
              required
              onChange={(e) => onInputChange(e)}
            ></textarea>
          </div>
          <button type="submit" className=" mt-3  btn-submit ">
            Submit
          </button>
        </form>
        {/* Registration Form End */}
      </div>
    </>
  );
}

export default Registration;
