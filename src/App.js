import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const userName = useRef("");
  const password = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const company = useRef("");
  const isRemembered = useRef(false);
  //const isRemembered = useRef(false);

  const [userNameState, setUserNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [phoneState, setphoneState] = useState("");
  const [companyState, setCompanyState] = useState("");
  const [isRememberedState, setIsRememberedState] = useState(false);
  const [isFormDataShown, setisFormDataShown] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setUserNameState(userName.current.value);
    setPasswordState(password.current.value);
    setphoneState(phone.current.value);
    setEmailState(email.current.value);
    setCompanyState(company.current.value);
    setIsRememberedState(isRemembered.current.checked);
    setisFormDataShown(true);
  };
  return (
    <>
      <div className="container">
        <form className="form">
          <div className="form-control">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={userName}></input>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={password}></input>
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" ref={phone}></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" ref={email}></input>
          </div>
          <div className="form-control">
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" ref={company}></input>
          </div>
          <div className="form-control">
            <label htmlFor="remember">Remember</label>
            <input type="checkbox" id="remember" ref={isRemembered}></input>
          </div>
          <button type="button" onClick={clickHandler}>
            Sign In
          </button>
        </form>
      </div>

      {isFormDataShown && (
        <div className="container">
          <h4> Sign In Successful...</h4>
          <h4>Welcome : {userNameState}</h4>
          <p> Username: {userNameState}</p>
          <p> Password: {passwordState}</p>
          <p> Email: {emailState}</p>
          <p> Phone: {phoneState}</p>
          <p> Company: {companyState}</p>
          <p> Your data is {!isRememberedState && "not"} remembered.</p>
        </div>
      )}
    </>
  );
}

export default App;
