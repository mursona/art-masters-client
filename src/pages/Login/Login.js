import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../../assets/login.gif'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

const {login} = useContext(AuthContext);

const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
    .then( result => {
        const user = result.user;
        console.log(user);
    })
    .catch(err => console.error(err));
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
                    <input type="submit" className="btn btn-primary" value="Login" />
                </div>
                </form>
                <p className='text-center mb-4'>New to here! <Link className='text-indigo-500 font-bold' to='/signup'>Sign up</Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Login;