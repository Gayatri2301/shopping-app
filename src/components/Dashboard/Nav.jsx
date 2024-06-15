import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const Nav = () => {
    const {data,logout} = useAuth();

    return (
        <div>
            <nav className='bg-[#106F97] flex justify-between'>
                {true && (
                    <p className="text-white">
                        One shop
                    </p>
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
