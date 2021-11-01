import React from "react";
import CustomButton from "../collection-item/custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

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
                    <CustomButton type='submit' value='submit form' > sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;