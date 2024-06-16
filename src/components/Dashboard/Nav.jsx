import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const Nav = () => {
    const {data,logout} = useAuth();

    return (
        <div>
            <nav className='p-5 bg-[#106F97] shadow md:flex md:items-center md:justify-between'>
                {true && (
                    <div>
                        <span className='text-white text-2xl font-[poppins]'>
                            <img className='mr-2 h-10 inline rounded-full' src='assets/logo.png ' alt='logo'/>
                        OneShop
                        </span>
                    </div>
                )}
                <input type="text" placeholder='search' />
                <Link to={'/wishList'}>wishlist</Link>
                <Link to={'/Cart'} >cart</Link>
                <Link to={'/profile'} >Profile</Link>
                <button onClick={logout}>Logout</button>
            </nav>
        </div>
    );
}

export default Nav;
