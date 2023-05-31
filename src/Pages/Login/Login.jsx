import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {


  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState('')
  const { logInUser } = useContext(AuthContext)
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || '/';


  useEffect(() => {
    loadCaptchaEnginge(6);

  }, [])


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire('User Login Successfully Done')
navigate(from, {replace:true});
         
      })
      .catch(error => {
        setError(error.message)
      })
  }


  const handleValidateCaptcha = (e) => {

    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      alert('Captcha Matched');
      setDisabled(false)
    }

    else {
      alert('Captcha Does Not Match');
      setDisabled(true)
    }
  }

  return (
    <div>
      <Helmet>
        <title> Bistro Boss || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />

                </label>
                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type the above captcha" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
              <p className="text-red-600">{error}</p>
              <p>new to Bistro boss ? <Link to="/register">Signup</Link></p>
              <div className="divider">OR</div>

            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;