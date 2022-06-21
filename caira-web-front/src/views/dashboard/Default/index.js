import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports

import MessagingCard from './MessagingCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import ActivePrograms from './ActivePrograms';
import { Redirect } from 'react-router-dom';
import validateSession from 'utils/validate-session';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SIDEBAR_UNFIXED } from '../../../store/actions';


// ==============================|| DASHBOARD ||============================== //

const Dashboard = () => {
    
    const [ isLoading, setLoading ] = useState( true );
    const [ session, setSession ] = useState( false );
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch({ type: SET_SIDEBAR_UNFIXED });
        
        const existSession = validateSession();

        if ( existSession ) setSession( existSession );
        
        setLoading(false);


    }, [ user ]);

    return (
        <>
        
            {
                !isLoading
                &&
                <div>
                    {
                        session
                        ?
                            <Grid  container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item lg={8} md={6} sm={6} xs={12}>

                                            <ActivePrograms />
                                        
                                        </Grid>
                                        <Grid item xs={12} md={4}>

                                            <MessagingCard isLoading={isLoading} />
                                        
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12} md={8}>
                                            <TotalGrowthBarChart isLoading={isLoading} />
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        :
                            <Redirect to='/not-authorized' />
                    }
                </div>
            }

        
        </>
    );
};

export default Dashboard;
