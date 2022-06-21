import React from 'react';
import { Link } from 'react-router-dom';
import PurpleButton from 'ui-component/buttons/PurpleButton';
import notAuthorized from '../../assets/images/illustrations/not-authorized.svg';

const NotAuthorized = () => {

  return (

        <div className='center-absolute'>

            <h2 classname='ff-poppins'>
                No tienes privilegios para acceder a esta página
            </h2>
            
            <img 
                alt='Secure Files - Not Authorized'
                src={ notAuthorized }
                width='80%'
            />

            <div className='jcc mt2'>

                <Link to='/' style={{ width: '50%', textDecoration: 'none' }}>

                    <PurpleButton>
                        Volver al login
                    </PurpleButton>

                </Link>

            </div>

        </div>


  
  );

};

export default NotAuthorized;