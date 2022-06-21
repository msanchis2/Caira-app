import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Divider, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa5, faA, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'


const ActivePrograms = () => {
  
  return (
    
    <div className='shadow br p1 pl2'>

        <div className='faic'>
          
          <span className='ff-poppins fw500'>Active Programs</span>
          <div className='mla mr2'>
            
            <IconButton>
              <MoreHorizIcon />
            </IconButton>

          </div>

        </div>

        <Divider />

        {/* EJEMPLO 1 */}
        <div className='mt2 mb2'>

          <div className='flex'>

            <img 
              src='http://assets.stickpng.com/images/5842f8afa6515b1e0ad75b2b.png' alt='logo-oxford.png' 
              width="100"
            />

            <div className='ml2'>

              <Button variant='contained' color='secondary' >MASTER OF COMPUTER SCIENCE</Button>

              <p className='ff-poppins'>University of Upstate at Brookstone</p>

            </div>

          </div>

        </div>
        <Divider />
        {/* EJEMPLO 2 */}
        <div className='mt2'>

          <div className='flex'>

            <img 
              src='https://www.freelogovectors.net/wp-content/uploads/2022/01/University-of-Massachusetts-Dartmouth-Seal.png' alt='logo-oxford.png' 
              width="100"
            />

            <div className='ml2'>

              <Button variant='contained' color='secondary' >MASTER OF MEDICINE</Button>

              <p className='ff-poppins'>University of Upstate at Massachusetts</p>

            </div>

          </div>

        </div>

    </div>

  );

};

export default ActivePrograms;