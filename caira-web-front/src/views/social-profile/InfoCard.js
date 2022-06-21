import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBuildingColumns, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import PurpleButton from 'ui-component/buttons/PurpleButton';

const InfoCard = () => {
  
  return (
    
    <div className='shadow p2 br'>

        <div className='flex mb1'>

            <div className='jcc'>
            
                <div style={{ width: "100%", textAlign: 'center' }}>
                    <span className='ff-poppins fs25' style={{ lineHeight: 1.3}}>
                        Universidad Complutense de Madrid
                    </span>

                    <div className='mt1'>
                        
                        <span>Madrid, España</span>

                    </div>

                </div>

            </div>

            <div className='mla pl1 ml1'>

                <EditIcon style={{ fontSize: 18}}/>

            </div>

        </div>

        <Divider />

        <div className='jcc'>

            <div className='mt2' style={{ width: 200 }}>

                <div className='faic'>
                    <b><FontAwesomeIcon icon={faAward}  style={{ marginRight: 5 }} />Founded:</b>
                    <span className='ml1'>1998</span>
                </div>

                <div className='faic mt1'>
                    <b><FontAwesomeIcon icon={faBuildingColumns}  style={{ marginRight: 5 }} />Type:</b>
                    <span className='ml1'>Public, College</span>
                </div>

                <div className='faic mt1'>
                    <b><FontAwesomeIcon icon={faUsers}  style={{ marginRight: 5 }} />Total Students:</b>
                    <span className='ml1'>15845+</span>
                </div>

                <div className='faic mt1'>
                    <b><FontAwesomeIcon icon={faUserGroup}  style={{ marginRight: 5 }} />Int. Students:</b>
                    <span className='ml1'>2000+</span>
                </div>

            </div>

        </div>

        <div className='mt2'>
            <PurpleButton>
                Contact Us
            </PurpleButton>
        </div>

    </div>

  );

};

export default InfoCard;