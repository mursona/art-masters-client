import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSIgnIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSIgnIn} className='btn btn-outline btn-gray'>
                <FaGoogle className='mx-4'></FaGoogle> Google Login</button>
            </p>
        </div>
    );
};

export default SocialLogin;