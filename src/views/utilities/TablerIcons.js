import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { GET_REGISTER_POPUP } from 'store/actions';
import { isMobile } from 'react-device-detect';
import FirebaseRegister from 'views/pages/authentication/auth-forms/AuthRegister';
import { useEffect } from 'react';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// =============================|| TABLER ICONS ||============================= //

function TablerIcons() {
    // const showLoginModal = useSelector((state) => state.customization.showLoginModal);
    // const showRegisterModal = useSelector((state) => state.customization.showRegisterModal);

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: GET_REGISTER_POPUP, showRegisterModal: true });
    // }, []);
    return (
        <div>
            {isMobile ? (
                <div style={{ backgroundColor: '#f8f8f4', zIndex: 35 }}>
                    <FirebaseRegister />
                </div>
            ) : (
                <div style={{ backgroundColor: '#f8f8f4', zIndex: 3, width: 500, height: 300, marginLeft: 450, zIndex: 14600 }}>
                    <FirebaseRegister />
                </div>
            )}
        </div>
    );
}

export default TablerIcons;
