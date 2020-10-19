import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import Details from "../details";
import history from '../../history';

class SignUpForm extends Component {
    render() {

        const { className, handleSubmit } = this.props;
        const links = [
            {
                id: 0,
                title: 'Not registered? Create account here.',
                onClick: () => history.push('/signup')
            },
            {
                id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },
            {
                id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name'
                    type='name'
                    title='Name'
                    placeholder='Name'
                    name='name'
                    component={FormInput} />
                <Field className='sign-up-form__email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    name='email'
                    component={FormInput} />
                <Field className='sign-up-form__password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    name='password'
                    component={FormInput} />
                <Field className='sign-up-form__confirm-password'
                    type='password'
                    title='Confirm Password'
                    placeholder='Confirm Password'
                    name='confirm'
                    component={FormInput} />

                <div className="sign-up-form__line"></div>
                <Field className='sign-up-form__back'
                    onClck={() => console.log('Going back...')}
                    type='button'
                    title='Back'
                    name='back'
                    short={true}
                    component={FormButton} />

                <Field className='sign-up-form__login'
                    onClck={() => console.log('Submitting...')}
                    type='submit'
                    title='Login'
                    name='login'
                    component={FormButton} />

                <Details className='sign-up-form__details' title='Password Requirements' links={links} />
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;