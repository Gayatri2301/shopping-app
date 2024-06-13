import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            fetch("https://shopping-app-45uk.vercel.app/sendOtp", {
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
            <section className="bg-[#106F97] min-h-screen flex items-center justify-center ">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="px-2 text-white">Loading, Please wait..</span>
</section>
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
