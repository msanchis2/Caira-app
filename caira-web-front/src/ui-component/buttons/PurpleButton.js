import { Button } from '@mui/material';
import { purple, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const PurpleButton = styled(Button)(({ theme, width='100%', customColor=purple[500], customColorHover=purple[700], size='medium' }) => ({
    color: theme.palette.getContrastText(purple[500]),
    size: size,
    width: width,
    height: '45px',
    fontFamily: 'Poppins',
    backgroundColor: customColor,
    '&:hover': {
      backgroundColor: customColorHover,
    },
    '&:disabled': {
      backgroundColor: grey[300]
    }
}));

export default PurpleButton;
  