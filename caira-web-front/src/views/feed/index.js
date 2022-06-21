import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import TextEditorPost from '../../ui-component/shared/TextEditorPost';
import { useDispatch, useSelector } from 'react-redux';
import validateSession from 'utils/validate-session';
import { Redirect } from 'react-router-dom';
import PostList from './post-list';
import { RigthBar } from './rightBar';
import { SET_SIDEBAR_FIXED } from '../../store/actions';

const Feed = () => {

    const userSession = useSelector(( _state ) => _state.user );
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({ type: SET_SIDEBAR_FIXED });

    }, []);
  
    return (

        <div>
            {
                validateSession()
                ?
                <div className='jcc'>

                    <div style={{ paddingLeft: 24, width:'540px' }}>
                        {
                            ( 
                                userSession?.rol === 'Project Admin'
                                || userSession?.rol === 'Partner'
                                || userSession?.rol === 'University' 
                            )
                            &&
                            <div>
                                <h5>Post</h5>
                                <TextEditorPost />
                            
                            </div>
                        }
                        <PostList />
                    </div>

                    <div className='mt2 ml5'>
                        <RigthBar />
                    </div>

                </div>
                :
                <Redirect to='/not-authorized' />
            }

        </div>

    );

};

export default Feed;