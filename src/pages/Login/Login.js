import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/login.gif'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/UseTitle';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Audio } from 'react-loader-spinner';

const Login = () => {

const {login, loading} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();
useTitle('Login');

const from = location.state?.from?.pathname || '/';

const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
        .then(result => {
            const user = result.user;


            const currentUser = {
                email: user.email
            }

            console.log(currentUser);

            // get jwt token
            fetch('https://art-masters-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem('art-token', data.token);
                    navigate(from, { replace: true });
                });
            
        })
        .catch(error => console.log(error));

}    
if(loading){
    return <Audio
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
}

    return (
        <div className="hero w-10/12 mx-auto my-20">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 text-center lg:text-left">
                <img src={loginimg} alt=''/>
            </div>
            <div className="w-1/2 ml-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                <h4 className="text-4xl font-bold mb-4">Login now!</h4>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <input type="submit" className="btn btn-gray-500" value="Login" />
                </div>
                <SocialLogin></SocialLogin>
                </form>
                <p className='text-center mb-4'>New to here! <Link className='text-sky-500 font-bold' to='/signup'>Sign up</Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Login;