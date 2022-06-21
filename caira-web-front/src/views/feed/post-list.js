import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import config from 'config';
import validateSession from 'utils/validate-session';
import CardPost from '../../ui-component/cards/CardPost';
import { store } from 'store';
import { useSelector } from 'react-redux';

const { url } = config;

const PostList = () => {
    const refresh = useSelector(( _state ) => _state.refresh );
    const [ posts, setPosts ] = useState( [] );
    
    useEffect(() => {
        
        const { token } = validateSession();

        if ( token ) {
       
            try {
    
                ( async () => {
    
        
                    const config = {
                        headers: {
                            Authorization: `Bearer ${ token }`
                        }
                    };
    
                    const response = await axios.get( `${ url }/posts`, config );


                    const { status, result } = response?.data;

                    switch ( status ) {

                        case 200:
                            setPosts( result );
                        break;
                        
                        case 401:
                            <Redirect to='/not-authorized' />
                        break;

                        case 404:

                        break;

                        default: 
                            <Redirect to='/not-authorized' />
                        break;
                    };
        
                })();
    
            } catch ( _error ) {
    
                console.log( "Error try/catch ( useEffect - feed )", `(${typeof _error}): `, _error);
    
            };

        };

    }, [ refresh ]);

    return (
        
        <div>
            {
                <div>
                    {
                        posts.map( _post => {

                            return <div>
                                <CardPost info={ _post } />
                            </div>

                        })
                    }
                </div>
            
            }
            <CardPost />

        </div>

    );

};

export default PostList;