import { Link } from 'react-router-dom';

// material-ui
import { Avatar, ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import logoMy from 'assets/images/logoMy.png';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    return (
        <div>
            <Avatar src={logoMy} style={{ width: 180 }} />
        </div>
    );
};

export default LogoSection;
