import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);
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
                        nav('/otpVerification', { state: { email, password } });
                        console.log("OTP sent");
                    }else{
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
            <h1>Loading</h1>
        )
    }else{
    return (
        <div>
            <h1>Register Page</h1>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={sendOtp}>Submit</button>
        </div>
    );}
};

export default Register;
