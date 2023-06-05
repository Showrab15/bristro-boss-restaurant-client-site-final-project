import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Hi, Welcome Back {user.displayName} </h2>
        </div>
    );
};

export default UserHome;