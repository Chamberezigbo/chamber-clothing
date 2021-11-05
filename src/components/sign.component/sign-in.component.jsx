import React from "react";
import CustomButton from "../collection-item/custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle} from '../../firebase/firebase.uti'

import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email:'',password:''})
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className= 'sign-in'>
                <h2>I already has an account</h2>
                <span>sign in with your email and password</span>
                <form onClick = {this.handleSubmit}>
                    <FormInput
                        name='email'
                        handleChange={this.handleChange}
                        type='email' value={this.state.email} required
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type='password' handleChange={this.handleChange}
                        value={this.state.password} required
                        label= 'password'
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> sign in </CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle} isGoogleSignIn > sign in with Google
                        </CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn;