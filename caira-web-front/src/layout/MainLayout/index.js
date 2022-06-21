import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import { drawerWidth } from 'store/constant';
import { SET_MENU, SET_USER } from 'store/actions';
import config from 'config';
import validateSession from 'utils/validate-session';
import { store } from 'store';


const { url } = config;



// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = ({ children }) => {
    
    const theme = useTheme();

    const [ loading, setLoading ] = useState( true );
    const [ sidebarFix, setSidebarFix ] = useState( false );

    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };


    store.subscribe(() => {

        const { sidebarFixed } = store?.getState()?.customization;

        if ( sidebarFixed ) {
            setSidebarFix( true );
        } else {
            setSidebarFix( false );
        };

    });


    useEffect(() => {

        ( async () => {

            try {

                const session = validateSession();

                if ( session ) {

                    const config = {
                        headers: {
                            Authorization: `Bearer ${ session?.token }`
                        }
                    };

                    const response = await axios.get( `${ url }/user/${ session.userId }`, config );

                    const { status, result } = response?.data;

                    switch ( status ) {

                        case 200:
                            dispatch({ type: SET_USER, payload: result });
                        break;

                        default:
                            console.log( 'Error' );
                        break;

                    };


                }

            } catch ( _error ) {

                console.log( "Error try/catch ( get - user )", `(${typeof _error}): `, _error);

            };

        })();

        setLoading( false );

    }, []);


    return (
        <>
            {
                !loading
                &&
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    {/* header */}
                    <AppBar
                        enableColorOnDark
                        position="fixed"
                        color="inherit"
                        elevation={0}
                        sx={{
                            bgcolor: theme.palette.background.default,
                            transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                        }}
                    >
                        <Toolbar>
                            <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                        </Toolbar>
                    </AppBar>

                    {/* drawer */}
                    <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

                    {/* main content */}
                    {
                        sidebarFix
                        ?
                        <Main theme={theme}>
                            
                            <div>

                                { children }

                            </div>
                        
                        </Main>
                        :
                        <Main theme={theme} open={leftDrawerOpened}>
                            
                            <div>

                                { children }

                            </div>
                        
                        </Main>

                    }
                   
                </Box>

            }
        
        </>
    );
};

export default MainLayout;
