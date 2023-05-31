import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Register = () => {


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const { createUser, updateUser } = useContext(AuthContext)
  const navigate = useNavigate();


  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUser(data.name, data.photo)
          .then(() => {
            const savedUser = { name: data.name, email: data.email }
            fetch('http://localhost:5000/users', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  navigate('/')
                  alert('user created succesfully done')
                }
              })

          })
          .catch(error => console.log(error.message))
      })
  }

  return (
    <div>
      <Helmet>
        <title> Bistro Boss || Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <p className="text-red-600">Please enter a name.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="name" {...register('photo', { required: true })} name="photo" placeholder="photo url" className="input input-bordered" />
                {errors.photo && <p className="text-red-600">Please enter a photo url.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <p className="text-red-600">Please enter a valid email.</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" {...register('password',
                  {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern: /^(?=.*[a-z]).*$/
                  })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password  is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password  Must Be 6 character Long </p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have at least one Lowercase Character.</p>}

              
              </div>

              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="signup" />
              </div>
              <p>Already Have an Account ? <Link to="/login">Login</Link></p>

            </form>
            <SocialLogin></SocialLogin>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;