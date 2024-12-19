import React from "react";
import './login.css'

export const LoginPage = () => {

    const [action,setAction] = React.useState("Sign Up")

    return (
        <div className="container">
            <div className="header">
                <div className="text">
                   {action} 
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <input type="text" placeholder="name"/>
            </div>
            <div className="inputs">
                <input type="email" placeholder="email"/>
            </div>
            <div className="inputs">
                <input type="password" placeholder="password"/>
            </div>
            <div className="forgotPassword"> Forgot Password</div>
            <div className="submitContainer">
                <div className={action === "LogIn" ? "submit gray" : "submit" }
                        onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}
                        onClick={() => setAction("Log In")}>LogIn</div> 
            </div>
        </div>
    )
}