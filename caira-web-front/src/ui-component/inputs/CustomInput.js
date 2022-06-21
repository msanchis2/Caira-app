import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomInput = styled(TextField)({

    '& label.Mui-focused': {
      color: '#9c27b0',
      fontFamily:'Poppins'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#9c27b0',
      transitionDuration: "150ms",
      fontFamily:'Poppins'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f3e5f5',
        transitionDuration: "150ms",
        fontFamily:'Poppins'
      },
      '&:hover fieldset': {
        borderColor: '#ce93d8',
        transitionDuration: "150ms",
        fontFamily:'Poppins'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9c27b0',
        fontFamily:'Poppins'
      },
    },
});

export default CustomInput;