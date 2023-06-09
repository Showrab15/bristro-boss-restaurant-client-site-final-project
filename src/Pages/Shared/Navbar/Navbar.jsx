import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const { user, logOut } = useAuth();

const [isAdmin] = useAdmin()
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li>
            <Link
                to='/'
                aria-label='Home'
                title='Home'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Home
            </Link>
        </li>

        <li>
            <Link
                to='/ContactUs'
                aria-label='ContactUs'
                title='ContactUs'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Contact Us
            </Link>
        </li>

     

        <li>
            <Link
                to='/menu'
                aria-label='menu'
                title='menu'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Our Menu
            </Link>
        </li>


        <li>
            <Link
                to='/dashboard/myCart'
                aria-label=''
                title=''
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length}</div>
                </button>
            </Link>
        </li>

        <li>
            <Link
                to='/order/salad'
                aria-label='order'
                title='order'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Order Food
            </Link>
        </li>

        <li>
        {isAdmin ? <Link
                to='/dashboard/adminhome'
                aria-label=''
                title=''
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Dashboard 
            </Link> :<Link
                to='/dashboard/userhome'
                aria-label=''
                title=''
                className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
                Dashboard 
            </Link>
            }
        </li>

{
    user &&    <li>
    <Link
        to='/'
        aria-label=''
        title=''
        className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
        {user.displayName}
    </Link>
</li>

}
        <li>
            {
                user ? <Link
                    onClick={handleLogOut}
                    aria-label='logout'
                    title='logout'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                >
                    <button className="btn btn-secondary">Logout</button>
                </Link> :
                    <Link
                        to='/login'
                        aria-label='login'
                        title='login'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        <button className="btn btn-secondary">Login</button>
                    </Link>
            }
        </li>
    </>

    return (
        <div className=''>
            <div className='fixed text-white navbar max-w-screen-xl   z-10 px-4 py-4 glass flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='Bristro Boss'
                    title='Bristro Boss'
                    className='inline-flex items-center'
                >
                    <div className='flex items-center justify-center '>
                        <h1 className="text-2xl font-bold">Bristro Boss</h1>

                    </div>

                </Link>
                <ul className='items-center text-base font-medium hidden space-x-8 lg:flex'>
                    {navOptions}
                </ul>

                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-black bg-opacity-25 border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>

                                    <h1 className="text-2xl font-bold">Bristro Boss</h1>
                                    <div>
                                        <Link
                                            to='/'
                                            aria-label='Bristro Boss'
                                            title='Bristro Boss'
                                            className='inline-flex items-center'
                                        >
                                            <div className='flex items-center justify-center '>
                                                <img src="https://ibb.co/JKBmD8g" alt="" />
                                            </div>

                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        {navOptions}


                                    </ul>

                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;