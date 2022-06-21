import * as React from 'react';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert /* elevation={6} */ ref={ref} variant="filled" {...props} />;
});

export default function CustomAlert({ type, message }) {

  return <div style={{ position: 'relative', top: 0, left: 0 }}>

        <Alert /* onClose={handleClose} */ severity={ type }>
            { message }
        </Alert>

    </div>

};