import React, { useState } from 'react';
import { Backbtn } from '../../global';
import "./Auth.css";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  const [slider, setSlider] = useState("register");
  const [slide, setSlide] = useState("register")

  const runLoginandReg = (param, slide) =>{
    setSlider(param)
    setSlide(slide)
  }

  return (
    <>
      <Backbtn urlpath="/"/>
       <div className="auth">
      <div className="auth_container">
        <div className="auth_btns">
          <div className={`active_slider ${slider === "register" ? "register" : slider === "login" ? "login" : ""}`}></div>
          <button className={slider === "register" && "activetxt"} onClick={() => runLoginandReg("register", "register")}>Register</button>
          <button className={slider === "login" && "activetxt"} onClick={() => runLoginandReg("login", "login")}>Login</button>
        </div>
        <div className="auth_slider">
          <div className={`form_wrap ${slide === "register" ? "" : "login_slide"}`}>
            
    <Register/>
    <Login/>
          </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Auth