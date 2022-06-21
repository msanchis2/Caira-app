// material-ui
import logo from '../assets/images/logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

    return (
        <div className='jcc'>

            <img 
                alt='logo' 
                src={ logo } 
                width='100px'
    
            />
        </div>
    );
};

export default Logo;
