import React, { useState } from 'react';
import { Divider } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import CustomTextField from 'ui-component/inputs/CustomInput';
import CustomAlert from 'ui-component/Alert';
import { Redirect } from 'react-router-dom';
import PurpleButton from '../../ui-component/buttons/PurpleButton';

const { url } = config;

const SignUp = ({ goSignIn }) => {

    /* 
        STATES
    */
    const [ signUpCredentials, setSignUpCredentials ] = useState({
        name: '',
        email: '',
        password: '',
        rpassword: ''
    });
    const { email, password } = signUpCredentials;

    const [ passwordAlert, setPasswordAlert ] = useState( false );
    const [ wrongEmailAlert, setWrongEmailAlert ] = useState( false );
    const [ nameAlert, setNameAlert ] = useState( false ); 
    const [ redirect, setRedirect ] = useState( false );


    /* 
        FUNCTIONS
    */
    const onChange = ( _event ) => {

        const name = _event.target.name;

        setWrongEmailAlert( false );

        if ( passwordAlert ) {

            if ( name === 'password' || name === 'rpassword' ) {
    
                setPasswordAlert( false );
            };
            
        };

        if ( nameAlert ) {

            if ( name === 'name' ) {

                setNameAlert( false );
            };

        }

        setSignUpCredentials({
            ...signUpCredentials,
            [ name ] : _event.target.value
        });

    };

    const signUp = async ( _event ) => {

        _event.preventDefault();

        try {

            const response = await axios.post( `${ url }/user`, signUpCredentials );

            const { status } = response?.data;

            switch ( status ) {

                case 201:
                    
                    const payload = {
                        email,
                        password
                    };
                    const loginResponse = await axios.post( `${ url }/login`, payload );

                 

                    const loginStatus = loginResponse?.data?.status;
                    const loginResult = loginResponse?.data?.result;

                    switch ( loginStatus ) {

                        case 200: 
                        
                            if ( loginResult?.token ) {

                                window.localStorage.setItem( 'SESSION', JSON.stringify( loginResult ) );
                                setRedirect( true );
                            };

                        break;


                        default:
                            console.log( "Error to login" );
                        break;

                    }

                break;

                case 403: // The passwords don't match
                    setPasswordAlert( true );
                break;

                case 422: 
                    setNameAlert( true );
                break;

                case 502: // The passwords don't match
                    setWrongEmailAlert( true );
                break;

                default:
                    console.log( "Error to create user" );
                break;

            };
            
        } catch ( _error ) {

            console.log( "Error try/catch ( signUp )", `(${typeof _error}): `, _error);

        };
        

    };

    return (

        <div>
            {
                redirect
                &&
                <div className='mt2'>
                    <Redirect to='/dashboard' />
                </div>
            }

            {
                nameAlert
                &&
                <div className='mb1'>
                    <CustomAlert type='error' message='Invalid name.' />
                </div>
            }


            {
                wrongEmailAlert
                &&
                <div className='mb1'>
                    <CustomAlert type='error' message="Invalid Email." />
                </div>
            }

            {
                passwordAlert
                &&
                <div className='mb1'>
                    <CustomAlert type='error' message="Passwords don't match." />
                </div>
            }

            
            <form
                onSubmit={ signUp }
            >
                <div className='jcc'>
                    <span className='ff-roboto fs25 fw-500'>Register</span>
                </div>
                <div className='mt1'>
                    <Divider />
                </div>

                <div className='mt1'>
                    <CustomTextField 
                        label={ <span className='ff-poppins fw-400' >Name</span>} 
                        id="custom-css-outlined-input" 
                        required
                        name='name'
                        style={{ width: '100%' }}
                        onChange={ onChange }
                    />
                </div>

                <div
                    className='mt1'
                >
                    <CustomTextField 
                        label={ <span className='ff-poppins fw-400' >Email</span>} 
                        id="custom-css-outlined-input" 
                        required
                        name='email'
                        type='email'
                        style={{ width: '100%' }}
                        onChange={ onChange }
                    />
                </div>

                <div 
                    className='mt1'
                >
                    <CustomTextField 
                        label={ <span className='ff-poppins fw-400' >Password</span>} 
                        id="custom-css-outlined-input" 
                        required
                        name='password'
                        type='password'
                        style={{ width: '100%' }}
                        onChange={ onChange }
                    />
                </div>

                <div 
                    className='mt1'
                >
                    <CustomTextField 
                        label={ <span className='ff-poppins fw-400' >Repeat password</span>} 
                        id="custom-css-outlined-input" 
                        required
                        name='rpassword'
                        type='password'
                        style={{ width: '100%' }}
                        onChange={ onChange }
                    />
                </div>

                <div 
                    className='mt2'
                >    
                    <PurpleButton
                        type='submit'
                    >
                        <span className='ff-roboto'>Register</span>
                    </PurpleButton>
                </div>

                <div className='mt1'>
                
                    <Divider orientation="horizontal" flexItem>
                        <span className='ff-poppins fw-500'>Or</span>
                    </Divider>

                </div>

                <div className='mt1'>

                    <PurpleButton
                        onClick={ () => goSignIn() }
                    >
                        <span className='ff-poppins fw-500'>Login</span>
                    </PurpleButton>

                </div>

            </form>

        </div>

    );

};

export default SignUp;