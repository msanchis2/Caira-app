import { Divider } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PurpleButton from 'ui-component/buttons/PurpleButton';
import config from '../../config';

import CustomInput from 'ui-component/inputs/CustomInput';
import CustomAlert from 'ui-component/Alert';

const { url } = config;

const SignIn = ({ goSignUp }) => {
  
    const [ loginCredentials, setLoginCredentials ] = useState({
        email: '',
        password: ''
    });

    const [ notFoundAlert, setNotFoundAlert ]       = useState( false );
    const [ missingDataAlert, setMissingDataAlert ] = useState( false );
    const [ wrongEmailAlert, setWrongEmailAlert ]   = useState( false );
    const [ redirect, setRedirect ] = useState( false );

    
    const onChange = ( _event ) => {

        setNotFoundAlert( false );
        setWrongEmailAlert( false );
        setMissingDataAlert( false );

        setLoginCredentials({
            ...loginCredentials,
            [ _event.target.name ] : _event.target.value
        });

    };


    const login = async ( _event ) => {
    
        _event.preventDefault();

        try {

            const response = await axios.post( `${ url }/login`, loginCredentials );

            const { status, result } = response?.data;

            switch ( status ) {

                case 200: 

                    if ( result?.token ) {
                        

                        window.localStorage.setItem( 'SESSION', JSON.stringify( result ) );
                        
                        setRedirect( true );

                    };

                break;


                case 400: 
                    setMissingDataAlert( true );
                break;

                case 404:
                    setNotFoundAlert( true );
                break;

                case 502:
                    setWrongEmailAlert( true );
                break;

                default:
                    console.log( "Error to login" );  
                break;
            };

        } catch ( _error ) {

            console.log( "Error login", `(${typeof _error}): `, _error);

        };
    
    };

    return (

        <div>
            {
                notFoundAlert
                &&
                <div className='animate__animated animate__fadeIn'>
                    <CustomAlert type='error' message='Wrong email or password.' />
                </div>
            }
            {
                
                missingDataAlert
                &&
                <div className='animate__animated animate__fadeIn'>
                    <CustomAlert type='error' message='Missing data.' />
                </div>
            }
            {
                wrongEmailAlert
                &&
                <div className='animate__animated animate__fadeIn'>
                    <CustomAlert type='error' message='Invalid email.' />
                </div>
            }
            {
                redirect
                &&
                <Redirect to='/dashboard' />
            }
            

            <form
                className='mt2'
                onSubmit={ login }
            >

                <div className='mt1'>
                    <CustomInput 
                        label={ <span className='ff-poppins fw-500' >Email</span>} 
                        id="custom-css-outlined-input" 
                        required
                        name='email'
                        style={{ width: '100%' }}
                        onChange={ onChange }
                    />
                </div>

                

                <div 
                    className='mt1'
                >
                    <CustomInput 
                        label={ <span className='ff-poppins fw-500' >Password</span>} 
                        id="custom-css-outlined-input" 
                        required
                        name='password'
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
                        <span className='ff-poppins fw-500'>Login</span>
                    </PurpleButton>
                </div>

                <div className='mt1'>
                
                    <Divider orientation="horizontal" flexItem>
                        <span className='ff-poppins fw-500'>Or</span>
                    </Divider>

                </div>

                <div className='mt1'>

                    <PurpleButton
                        onClick={ () => goSignUp() }
                    >
                        <span className='ff-roboto'>Register</span>
                    </PurpleButton>

                </div>

            </form>
        </div>

    );

};

export default SignIn