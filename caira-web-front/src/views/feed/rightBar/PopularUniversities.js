import { Avatar, Divider } from '@mui/material';
import React from 'react';

const PopularUniversities = () => {

    return (

        <div className='br shadow p1 mt4 fixedTop' style={{ width: '25%' }}>
            
            <div className='jcc mb1'>
                <span className='ff-poppins fw-500 fs18' style={{ textDecoration: 'underline'}}>Most Liked Universities</span>
            </div>
            
            <div className='p1'>
                <div className='flex mb1'>

                    <Avatar src='' alt='avatar' />

                    <div className='ml1'>

                        <span className='ff-poppins'>Universidad de Stanford</span>
                        <div className='ff-poppins'>
                            1 Like
                        </div>

                    </div>

                </div>
                <Divider />

                <div className='flex mb1 mt1'>

                    <Avatar src='' alt='avatar' />

                    <div className='ml1'>

                        <span className='ff-poppins'>Universidad de Stanford</span>
                        <div className='ff-poppins'>
                            1 Like
                        </div>

                    </div>

                </div>
                <Divider />

                <div className='flex mb1 mt1'>

                    <Avatar src='' alt='avatar' />

                    <div className='ml1'>

                        <span className='ff-poppins'>Universidad de Stanford</span>
                        <div className='ff-poppins'>
                            1 Like
                        </div>

                    </div>

                </div>
                <Divider />

                <div className='flex mb1 mt1'>

                    <Avatar src='' alt='avatar' />

                    <div className='ml1'>

                        <span className='ff-poppins'>Universidad de Stanford</span>
                        <div className='ff-poppins'>
                            1 Like
                        </div>

                    </div>

                </div>
                <Divider />
                <div className='jcc mt1'>
                    <span className='ff-poppins fw-500 cp' style={{ color: '#1e88e5' }}>
                        View more...
                    </span>
                </div>
            </div>

        </div>
    );

};

export default PopularUniversities;