import React, { useEffect, useState } from 'react';
import { Avatar, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dayjs from 'dayjs';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';


const CardPost = ({ info }) => {

    const [ postInfo, setPostInfo ] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {

        if ( typeof( info ) === 'object' && Object.keys( info ).length > 0 ) setPostInfo( {...info} );

    }, [ info ]);

    return (
        <div /* style={{ width: '500px' }} */>
            {
                info
                &&
                <div className='mt2 br shadow p2'>
                    
                    {/* HEADER */}
                    <div className='flex'>
    
                        <div className='flex'>
                        
                            <Avatar src='' alt='avatar' />
    
                            <div>
    
                                <div>
                                    <span className='pl2'>
                                        <b>
                                        { postInfo?.user?.name } { postInfo?.user?.surnames }
                                        </b>
                                    </span>
                                </div>
                                <div>
                                    <span className='pl2'>
                                        { dayjs( postInfo?.createdAt * 1000 ).format('ddd, DD MMMM YYYY') }
                                    </span>
                                </div>
    
                            </div>
    
                        </div>
    
                        <div className='mla'>

                            <IconButton
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </IconButton>
                           
                        </div>
    
                    </div>

                    <div className='mt1'>
                        <Divider />
                    </div>

                    {/* BODY */}
                    <div className='p1' style={{ overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: postInfo?.content }} />


                    
    
                </div>
            }

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
        <MenuItem onClick={handleClose}>
            <IconButton>
                <ThumbUpIcon />
            </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <IconButton>
                <ThumbDownAltIcon />
            </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <IconButton>
                <ModeCommentIcon />
            </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <IconButton>
                <SendIcon />
            </IconButton>
        </MenuItem>
      </Menu>
        </div>


    );

};

export default CardPost;