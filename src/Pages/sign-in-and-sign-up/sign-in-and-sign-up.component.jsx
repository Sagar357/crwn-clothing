import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import '../../Components/Sign-in/sign-in.component.jsx'
import SingIn from '../../Components/Sign-in/sign-in.component.jsx';
import SignUp from '../../Components/sign-up/sign-up.component'

const SignInAndSignUp=() => (
    <div className='sign-in-and-sign-up'>
        <SingIn />
        <SignUp />
    </div>
);

export default SignInAndSignUp;