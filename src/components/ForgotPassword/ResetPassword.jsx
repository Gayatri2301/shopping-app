import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const nav = useNavigate();
    const reset = () => {
        if (password === confirmPassword) {
            if (password.length >= 8) {
                alert("Sucessfully changed");
                nav('/');
            } else {
                alert("Password should be atleast 8 characters")

            }
        } else {
            alert("NewPassword confirm Password doesn't match")
        }
    }
    return (
        <div>
            <p>Password must contain 8 characters</p>
            <input type="password" placeholder='New Password' value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder='Re-enter password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <button onClick={reset} >Reset </button>
        </div>
    )
}

export default ResetPassword
