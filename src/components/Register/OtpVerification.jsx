import React, { useState, useRef, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './register.css';

const OtpVerification = () => {
    const location = useLocation();
    const { email, password,Register } = location.state || {};
    const [maskedEmail, setMaskedEmail] = useState("");
    const otpRefs = useRef([]);
    const nav = useNavigate();


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
                    if(!Register){
                        setTimeout(() => {
                            nav('/ResetPassword');
                        }, 1000);
                    }
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
        <section className="bg-[#106F97] min-h-screen flex items-center justify-center">
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
          <div className='px-16'>
        <div className="flex items-center flex-col mt-5 px-5" id="verify">
        <h2 className='font-bold text-2xl text-[#106F97]'>Reset Password</h2>
            <p className=' mt-4 text-[#106F97]'>OTP has been sent to <span id="PartialEmail">{maskedEmail}</span></p>
            <div className='mt-5'>
            <div className="bg-[#106F97] pr-5 pl-5 py-5 gap-5 flex place-content-center">
                {[0, 1, 2, 3].map((i) => (
                    <input
                        key={i}
                        type="number"
                        className={`otp i${i + 1} rounded text-center h-10 w-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                        maxLength="1"
                        ref={el => { otpRefs.current[i] = el }}
                    />
                ))}
            </div>
            </div>
            <button className='mt-5 bg-[#106F97] rounded-xl text-white py-2 hover:scale-105 duration-300 Content-center w-1/2 ' onClick={checkOTP}>Verify OTP</button>
            <div className='mt-5'>
            <div id="successMessage" className="message success " style={{ display: 'none' }}>
                OTP verified successfully
            </div>
            <div id="errorMessage" className="message error" style={{ display: 'none' }}>
                Invalid OTP
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    );
};

export default OtpVerification;
