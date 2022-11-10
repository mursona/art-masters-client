import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/login.gif';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hook/UseTitle';

const Signup = () => {
    
    const {createUser} = useContext(AuthContext);
    useTitle('Register');

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }

    return (
    <div className="hero w-10/12 mx-auto my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 ml-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
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
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;