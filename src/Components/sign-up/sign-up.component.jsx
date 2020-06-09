import React from 'react';
import './sign-up.styles.scss';
import '../form-input/form-input.component';
import '../custom-button/custom-button.component';
import {auth  ,createUserProfileDocument} from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component
{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmedpassword:''
        }
    }

    handleSubmit =async event => 
    {
        event.preventDefault();
        const {displayName ,email ,password ,confirmedpassword}=this.state

        if(password !== confirmedpassword)
        {
            alert("Passwords Don't match ");
            return;
        }

        try 
        {
            const {user} =await auth.createUserWithEmailAndPassword(email ,password);
            await createUserProfileDocument(user ,{displayName});
            this.setState(
                {
                    displayName:'',
                    email:'',
                    password:'',
                    confirmedpassword:''
                }
            );
        }
        catch(error)
        {
        console.error(error);
        }
    }

    handleChange=event=>
    {
       const {name ,value}=event.target;
       this.setState(
           {
               [name]:value
           }
       );
    }

    render()
    {
        const {displayName ,email ,password ,confirmedpassword}=this.state
        return(

            <div className='sign-up'>
                
                <h2>
                    I do not have a account.
                </h2>

                <span>
                    Sign Up with your Email and Password
                </span>
                
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    name='confirmedpassword'
                    type='password'
                    value={confirmedpassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit' > SIGN UP </CustomButton>
                </form>
            </div>
        );
    }
}


export default SignUp;
