import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './register.css';

const OtpVerification = () => {
    const location = useLocation();
    const { email, password } = location.state || {};
    const [maskedEmail, setMaskedEmail] = useState("");
    const otpRefs = useRef([]);
    const [otp, setOtp] = useState(["", "", "", ""]);

    useEffect(() => {
        if (email) {
            const emailParts = email.split("@");
            setMaskedEmail(emailParts[0].slice(0, 2) + "****" + "@" + emailParts[1]);
        }

        const handleKeyup = (index) => (e) => moveFocus(e, index);
        otpRefs.current.forEach((input, index) => {
            if (input) {
                input.addEventListener("keyup", handleKeyup(index));
                input.handleKeyup = handleKeyup(index);
            }
        });

        return () => {
            otpRefs.current.forEach((input) => {
                if (input && input.handleKeyup) {
                    input.removeEventListener("keyup", input.handleKeyup);
                }
            });
        };
    }, [email]);

    const moveFocus = (e, index) => {
        const value = e.target.value;
        if (e.key === "Backspace" && index > 0 && value === "") {
            otpRefs.current[index - 1].focus();
        } else if (value.length === 1 && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1].focus();
        }
    };

    const checkOTP = () => {
        let otp_check = "";
        otpRefs.current.forEach((ip) => {
            otp_check += ip.value;
        });
        if (otp_check.length === 4) {
            fetch('http://localhost:4000/verify', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'email': email,
                    'otp': otp_check
                }),
            }).then((res) => {
                if (res.ok) {
                    document.getElementById("successMessage").style.display = 'block';
                    document.getElementById("errorMessage").style.display = 'none';
                } else {
                    document.getElementById("successMessage").style.display = 'none';
                    document.getElementById("errorMessage").style.display = 'block';
                }
            }).catch((err)=>{
                document.getElementById("successMessage").style.display = 'none';
                    document.getElementById("errorMessage").style.display = 'block';
            })
        }else{
            alert("Enter 4 digit OTP...");
        }
    };

    return (
        <div className="verify" id="verify">
            <p>OTP has been sent to <span id="PartialEmail">{maskedEmail}</span></p>
            <div className="input-otp">
                {[0, 1, 2, 3].map((i) => (
                    <input
                        key={i}
                        type="number"
                        className={`otp i${i + 1}`}
                        maxLength="1"
                        ref={el => { otpRefs.current[i] = el }}
                    />
                ))}
            </div>
            <button onClick={checkOTP}>Verify OTP</button>
            <div id="successMessage" className="message success" style={{ display: 'none' }}>
                OTP verified successfully
            </div>
            <div id="errorMessage" className="message error" style={{ display: 'none' }}>
                Invalid OTP
            </div>
        </div>
    );
};

export default OtpVerification;
