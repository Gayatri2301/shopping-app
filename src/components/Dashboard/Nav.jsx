import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const Nav = () => {
    const { data, logout } = useAuth();
    const nav = useNavigate();
    

    const wishList = () => {
        nav('/wishList')
    }
    const Profile = () => {
        nav('/profile')
    }
    const Cart = () => {
        nav('/cart')
    }
    const home = ()=>{
        nav('/Dashboard')
    }
    return (
        <div>
            <nav className='p-5 bg-[#106F97] shadow md:flex md:items-center md:justify-between'>
                {true && (
                    <div>
                        <span className='text-white text-4xl font-[poppins] font-bold'>
                            <img className='mr-2 h-10 inline rounded-full' src='assets/logo.png ' alt='logo' />
                            OneShop
                        </span>
                    </div>
                )}
                <div className='md:flex md:items-center z-[-1] md:z-auto w-full left-0 md:w-auto ms:py-0 py-4 md:pl-0 pl-7'>
                <input className="p-2 mt-2 rounded-xl border"type="text" placeholder='search' />
                <button className='mx-4 text-white my-6 md:my-0' onClick={home}>Home</button>
                <button className='mx-4 text-white my-6 md:my-0' onClick={wishList}>wishList</button>
                <button className='mx-4 text-white my-6 md:my-0' onClick={Cart}>Cart</button>
                <button className='mx-4 text-white my-6 md:my-0' onClick={Profile}>Profile</button>
                <button className='mx-4 text-white my-6 md:my-0' onClick={logout}>Logout</button>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
