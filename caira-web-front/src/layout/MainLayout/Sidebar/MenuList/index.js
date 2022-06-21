// material-ui
import { List, ListItem, ListItemIcon } from '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PeopleIcon from '@mui/icons-material/People';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssistantIcon from '@mui/icons-material/Assistant';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HelpIcon from '@mui/icons-material/Help';

// project imports
import { Link } from 'react-router-dom';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {

    return <List>

                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                    <ListItem button key='dashboard'>
                        <ListItemIcon>
                            <DashboardRoundedIcon />
                        </ListItemIcon>
                        <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                            Dashboard
                        </span>
                    </ListItem>
                </Link>
                
                <ListItem style={{ paddingTop: 10, paddingBottom: 10 }} button key='opportunities'>
                    <ListItemIcon>
                        <TravelExploreIcon />
                    </ListItemIcon>
                    <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                        Opportunities
                    </span>
                </ListItem>

                <ListItem  style={{ paddingTop: 10, paddingBottom: 10 }} button key='contacts'>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                        Contacts
                    </span>
                </ListItem>

                <ListItem style={{ paddingTop: 10, paddingBottom: 10 }} button key='test'>
                    <ListItemIcon>
                        <PsychologyIcon />
                    </ListItemIcon>
                    <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                        Tests
                    </span>
                </ListItem>

                <Link to='/feed' style={{ textDecoration: 'none' }}>
                    <ListItem style={{ paddingTop: 10, paddingBottom: 10 }} button key='feed'>
                        <ListItemIcon>
                            <AssistantIcon />
                        </ListItemIcon>
                        <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                            Feed
                        </span>
                    </ListItem>
                </Link>

                <ListItem style={{ paddingTop: 10, paddingBottom: 10 }} button key='P2P'>
                    <ListItemIcon>
                        <ConnectWithoutContactIcon />
                    </ListItemIcon>
                    <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                        P2P
                    </span>
                </ListItem>

                <ListItem style={{ paddingTop: 10, paddingBottom: 10 }} button key='help'>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <span className='ff-poppins fw-500' style={{ color: 'black'}}>
                        Help
                    </span>
                </ListItem>


    </List>;
};

export default MenuList;
