import React, {  useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import validateSession from 'utils/validate-session';

import logo from '../assets/images/logo.png'
import SignIn from '../views/login/signIn';
import SignUp from '../views/login/signUp';


const Authentication = () => {

  const [ view, setView ] = useState( 'signIn' );
  const [ redirect, setRedirect ] = useState( false );

  useEffect(() => {

    const session = validateSession();

    if ( session ) setRedirect( true );

  }, []);

  return (
    
    <div>

      {
        redirect
        ? 
        <Redirect to='/dashboard' />
        :
        <div className='jcc center-absolute' style={{ width: '100%'}}>
          
            <div className='wrap'>

                <div>

                  <img 
                    alt='logo-caira' 
                    src={ logo } 
                    width='436px'
                    height='196px'  
                  />

                </div>

                <div style={{ width: '300px' }} className='p2 br shadow ml4'>
                  
                  {
                    view === 'signIn'
                    ?
                      <SignIn 
                        goSignUp={ () => setView( 'signUp' ) }
                      />
                    :
                      <SignUp 
                        goSignIn={ () => setView( 'signIn' ) }
                      />
                  }

                </div>

            </div>

          </div>

      }

    </div>

  );

};

export default Authentication;