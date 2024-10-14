import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
const LoginPopup = ({ setShowlogin }) => {
	const [currState, setCurrSteate] = useState("Sign Up");
	return (
		<div className="login-popup">
			<form className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currState}</h2>
					<img
						onClick={() => setShowlogin(false)}
						src={assets.cross_icon}
						alt=""
					/>
				</div>
				<div className="login-popup-inputs">
					{currState === "Login" ? (
						<></>
					) : (
						<input type="text" placeholder="Your name" required />
					)}
					<input type="email" placeholder="Your email" required />
					<input type="password" placeholder="password" required />
				</div>
				<button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
				<div className="login-popup-condition">
					<input type="checkbox" required />
					{/* <p>By continuing, I agree to the <a href="#">terms of use</a> & <a href="#">privacy policy</a>.</p> */}
					<p>By continuing, I agree to the terms of use & privacy policy.</p>
				</div>
				{currState === "Login" ? (
					<p>
						Create a new account ? <span onClick={()=> setCurrSteate("Sign Up")}>Click here</span>
					</p>
				) : (
					<p>
						Already have an account ? <span onClick={()=> setCurrSteate("Login")}>login here</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default LoginPopup;
