import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmPassword,setConfirmPassword] = useState("");
    const Register = true;
    const nav = useNavigate();

    const sendOtp = (e) => {
        e.preventDefault()
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
                        nav('/otpVerification', { state: { email, password,Register } });
                        console.log("OTP sent");
                    } else {
                        alert("Check network connection");
                        setLoading(false)
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("Enter a valid email");
        }
    };
    if (loading) {
        return (
            <h1>Loading,please wait</h1>
        )
    } else {
        return (
            <div className="min-h-screen py-20 bg-[#106F97] ">
                <div className="container mx-auto ">
                    <div className="w-8/12 bg-white rounded-xl mx-auto">
                        <div className="py-16 px-12">
                            <h2 className="text-3xl mb-4 font-bold text-2xl text-[#106F97]">Register</h2>
                            <p className="mb-4">Create your account.</p>
                            <form action="" onSubmit={sendOtp}>
                                <div className="grid grid-cols-2 gap-5">
                                    <input type="text" name="firstname" id="firstname" placeholder="Firstname" className="border border-gray-400 py-1 px-2" required />
                                    <input type="text" name="lastname" id="lastname" placeholder="Lastname" className="border border-gray-400 py-1 px-2" required />
                                </div>
                                <div className="mt-5">
                                    <input type="mobile" name="mobile" id="mobile" placeholder="Mobile" className="border border-gray-400 py-1 px-2 w-full" required />
                                </div>
                                <div className="mt-5">
                                    <input type="email" name="email" id="email" placeholder="Email" value={email} className="border border-gray-400 py-1 px-2 w-full" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="mt-5">
                                    <input type="password" name="password" id="password" placeholder="Password" value={password} className="border border-gray-400 py-1 px-2 w-full" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="mt-5">
                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} className="border border-gray-400 py-1 px-2 w-full" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </div>
                                <div className="mt-5">
                                    <label>Date of Birth </label>
                                    <input type="date" name="dob" className="border border-gray-400 py-1 px-2" required></input>
                                </div>
                                <div className="mt-5 flex items-center" required>
                                    <p className="mr-2">Gender : </p>
                                    <input type="radio" id="male" name="gender" value="male" className="mr-1" />
                                    <label htmlFor="male" className="mr-4">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" className="mr-1" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className="mt-5">
                                    <p>Address</p>
                                    <textarea id="address" name="address" placeholder="Your address here.." className="h-full max-h-32 w-full border border-gray-400 py-1 px-2" required></textarea>
                                </div>
                                <div className="mt-5">
                                    <input type="checkbox" className="border border-gray-400" required />
                                    <span> I accept the <a href="#" className="text-blue-500 font-semibold">Terms of Use</a> & <a href="#" className="text-blue-500 font-semibold">Privacy Policy</a></span>
                                </div>
                                <div className="mt-5">
                                    <button type="submit" className="w-1/2 bg-[#106F97] text-center text-white" >Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Register;
