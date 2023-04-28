import React, { useEffect, useState } from "react";
import UserTableData from "./UserTableData";
import "../Components/TableForm.css";

function UserData() {
  const [employeId, setEmployeId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [gender, setGender] = useState("FeMale");
  const [userData, setUserData] = useState({});
  const [editToggle, setEditToggle] = useState(false);
  const getEmployeId = () => {
    let maxNumber = Math.max(
      ...Object.keys(userData).map((num) => parseInt(num)),
      0
    );
    return maxNumber + 1;
  };
  const handleSubmit = () => {
    console.log("::::::in submit");
    if (editToggle) {
      console.log("======in edit");

      let obj = {
        firstName: firstName,
        lastName: lastName,
        mobileNo: mobileNo,
        gender: gender,
      };
      userData[employeId] = { ...obj };
      console.log("%^&*(>", userData);
      // setUserData({ ...UserData });
      setEditToggle(false);
      setFirstName("");
      setLastName("");
      setMobileNo("");
      setGender("");
    } else {
      let obj = {
        firstName: firstName,
        lastName: lastName,
        mobileNo: mobileNo,
        gender: gender,
      };
      setFirstName("");
      setLastName("");
      setMobileNo("");
      setGender("");
      userData[getEmployeId()] = obj;
      console.log(":::::::::>", userData);
      // Object.keys(userData).length + 1
      // setUserData({ ...userData });
    }
    localStorage.setItem("UserData", JSON.stringify(userData));
    // if (localStorage.userData) {
    //   let userData1 = JSON.parse(localStorage.getItem("userData"));
    //   userData1[getEmployeId()]=obj
    //   localStorage.setItem("UserData", JSON.stringify("userData1"));
    // } else {
    //   localStorage.setItem("userData", JSON.stringify({ obj }));
    //   setUserData({ obj });
    // }
  };
  useEffect = () => {};

  const deleteUser = (key) => {
    delete userData[key];
    setUserData({ ...userData });
    //let user = Object.keys(userData).filter((val) => key !== val);
    //setUserData(user);
  };
  const editUser = (key) => {
    let user1 = userData[key];
    setFirstName(user1.firstName);
    setLastName(user1.lastName);
    setMobileNo(user1.mobileNo);
    setGender(user1.gender);
    setEditToggle(true);
    setEmployeId(key);
  };
  return (
    <div>
      <h4>Table Data</h4>
      <div className="container">
        <div className="field mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            FirstName:
          </label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="field mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            LastName:
          </label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="field mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mobile No:
          </label>
          <input
            type="tel"
            className="form-control"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="raio_buttons">
          <div>
            <label
              // style={{ position: "relative", right: "17px" }}
              htmlFor="exampleInputPassword1"
              className="form-label"
            >
              Gender
            </label>
          </div>
          <div className="radio-container">
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked={gender === "Male"}
                onClick={() => setGender("Male")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={gender === "FeMale"}
                onClick={() => setGender("Female")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
          className="btn btn-primary"
        >
          {editToggle ? "Edit" : "Submit"}
        </button>
        ;
      </div>
      <div>
        <UserTableData
          userData={userData}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      </div>
    </div>
  );
}
export default UserData;
