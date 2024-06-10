import React from "react";
import { useState } from "react";
import './register.css'

const Register = () => {
    const [email, setEmail] = useState("");
    const [isVerify, setIsVerify] = useState(false);
    const [maskedEmail, setMaskedEmail] = useState("");

   const sendOtp = ()=>{
    console.log(email)
   }

    if (!isVerify) {
        return (
            <div>
                <h1>Register Page</h1>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                />
                <button onClick={sendOtp}>Submit</button>
            </div>
        );
    } else {
        return (
            <div className="verify" id="verify">
                <p>OTP has been sent to <span id="PartialEmail">{maskedEmail}</span></p>
                <div className="input-otp">
                    <input type="number" className="otp i1" maxLength="1" />
                    <input type="number" className="otp i2" maxLength="1" />
                    <input type="number" className="otp i3" maxLength="1" />
                    <input type="number" className="otp i4" maxLength="1" />
                </div>
                <div id="successMessage" className="message success" style={{ display: 'none' }}>
                    OTP verified successfully
                </div>
                <div id="errorMessage" className="message error" style={{ display: 'none' }}>
                    Invalid OTP
                </div>
            </div>
        );
    }
};

export default Register;
