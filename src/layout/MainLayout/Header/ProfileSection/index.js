/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
    Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third-party

// project imports

// assets
import { GET_LOGIN_POPUP, GET_REGISTER_POPUP } from 'store/actions';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();

    const [sdm, setSdm] = useState(true);
    const [value, setValue] = useState('');
    const [notification, setNotification] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const [userToken, setUserToken] = useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef(null);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showRegisterPopup, setShowRegisterPopup] = useState(false);
    const handleLogout = async () => {
        console.log('Logout');
    };
    const showLoginModal = useSelector((state) => state.customization.showLoginModal);
    const showRegisterModal = useSelector((state) => state.customization.showRegisterModal);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: GET_LOGIN_POPUP, showLoginModal: !showLoginModal });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showLoginPopup]);
    useEffect(() => {
        dispatch({ type: GET_REGISTER_POPUP, showRegisterModal: !showRegisterModal });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showRegisterPopup]);
    const handleShowLoginPopup = () => {
        navigate('/login')
    

    };
    const handleShowRegistrationPopup = () => {
        navigate('/registration')
       

    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListItemClick = (event, index, route = '') => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== '') {
            navigate(route);
        }
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            {userToken ? (
                <div style={{ marginLeft: 300 }}>
                    <Button variant="contained">logOut</Button>
                </div>
            ) : (
                <div style={{ marginLeft: 50, display: 'block' }}>

                    <Button style={{ marginRight: 10 }} onClick={handleShowLoginPopup} variant="contained" >
                        login
                    </Button>
                    <Button onClick={handleShowRegistrationPopup} variant="contained">registration</Button>
                </div>
            )}
        </div>
    );
};

export default ProfileSection;
