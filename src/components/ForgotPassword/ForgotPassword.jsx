import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const Register = false;
    const nav = useNavigate();
    const sendOtp = () => {
        setLoading(true);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            fetch("http://localhost:4000/sendOtp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email }),
            })
                .then((res) => {
                    if (res.ok) {
                        nav('/otpVerification', { state: { email,Register } });
                        
                        console.log("OTP sent");
                    } else {
                        alert("Can't send OTP")
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("Enter a valid email");
        }
    };
    if(loading){
        return(
            <h1>Loading....</h1>
        )
    }else{
  return (
    <div>
      <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <button onClick={sendOtp}>Reset Password</button>
    </div>
  )}
}

export default ForgotPassword
