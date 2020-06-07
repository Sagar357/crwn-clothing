import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component.jsx';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SingIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'markushno357@gmail.com ',
            password:'123',
            
        }
    }

     handleEvent = (event)=>{
        event.preventDefault();
        this.setState({email:'' ,password:''})
    }

    handleChange= (event) =>{
       const {name ,value}=event.target;

       this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account </h1>
                <span>Sign In with your email and password </span>

                <form onSubmit={this.handleEvent}> 
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required 
                    label='Email'
                    />

                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required 
                    label='Password'
                    />

                    <div className='buttons'>

                    <CustomButton type="submit" > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true} > 

                    {' '}

                    Sign In With Google {' '}

                    </CustomButton>


                    </div>

                </form>
            </div>
        );
    }
}

export default SingIn;