import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import Banner from './Banner.js';
import InfoCard from './InfoCard.js';
import TextEditorPost from '../../ui-component/shared/TextEditorPost.js';
import validateSession from '../../utils/validate-session';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SIDEBAR_UNFIXED } from 'store/actions.js';

const SocialProfile = () => {

    const { rol } = useSelector(( _state ) => _state?.user );
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch({ type: SET_SIDEBAR_UNFIXED });

    }, []);


    return (
        
        <div>

            {
                validateSession()
                ?
                <div>

                    <Grid  container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item lg={12} md={6} sm={6} xs={12}>

                                    <Banner />
                                
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                
                                <Grid item lg={3} xs={12} md={8}>
                                    <InfoCard />
                                </Grid>

                                <Grid item lg={9} xs={12} md={8}>
                                    {
                                        rol !== 'Student'
                                        &&
                                        <div>
                                            <h3>Post your publications</h3>
                                            <div>
                                                <TextEditorPost />
                                            </div>

                                        </div>
                                    }
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>

                </div>
                :
                <Redirect to='/not-authorized' />
            }

        </div>

    );

};

export default SocialProfile;