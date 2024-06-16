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
                        <span className='text-white text-2xl font-[poppins]'>
                            <img className='mr-2 h-10 inline rounded-full' src='assets/logo.png ' alt='logo' />
                            OneShop
                        </span>
                    </div>
                )}
                <button onClick={home}>Home</button>
                <input type="text" placeholder='search' />
                <button onClick={wishList}>wishList</button>
                <button onClick={Cart}>Cart</button>
                <button onClick={Profile}>Profile</button>
                <button onClick={logout}>Logout</button>
            </nav>
        </div>
    );
}

export default Nav;
