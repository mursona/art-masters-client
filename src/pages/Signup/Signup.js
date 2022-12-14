import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import img from '../../assets/login.gif';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/UseTitle';
import { Audio } from 'react-loader-spinner';

const Signup = () => {
    
    const {createUser, loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('SignUp');

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user);
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err));
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
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 ml-auto mb-12 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <h4 className="text-4xl font-bold my-4 text-center">SignUp Now!</h4>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-gray-500" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='text-center mb-11'>
                    <p>Already have an account? <Link className='text-sky-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;