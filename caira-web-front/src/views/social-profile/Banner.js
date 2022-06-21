import React from 'react'
import Avatar from '@mui/material/Avatar';

const Banner = () => {

  return (

    <div>

        <img
            alt='banner'
            src='https://wallpaperaccess.com/full/1209573.jpg'
            style={{ height: 300, width: '100%', objectFit: 'cover' }}
        />

        <div className='profile-picture'>

            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "180px", height: "180px" }}
            />

        </div>

    </div>

  );

};

export default Banner;