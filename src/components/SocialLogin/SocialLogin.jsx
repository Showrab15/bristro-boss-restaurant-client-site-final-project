import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://bristro-boss-restaurant-server-site-final-project.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(()=>{
                        navigate(from, { replace: true });
alert('user login successfull by google')
                    }
                     )
            })
    }
    return (
        <div className="text-center my-8">
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-sm"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;