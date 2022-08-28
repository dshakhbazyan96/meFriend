/* eslint-disable prettier/prettier */
// material-ui
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { GET_LOGIN_POPUP, SET_BORDER_RADIUS } from 'store/actions';

// project imports
import FirebaseLogin from 'views/pages/authentication/auth-forms/AuthLogin';
import FirebaseRegister from 'views/pages/authentication/auth-forms/AuthRegister';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    // const showLoginModal = useSelector((state) => state.customization.showLoginModal);
    // const showRegisterModal = useSelector((state) => state.customization.showRegisterModal);
    // const dispatch = useDispatch()

    // useEffect(() => {

    //     dispatch({ type: GET_LOGIN_POPUP, showLoginModal: true })
    // }, [])
    return (
        <div>
            {isMobile ? (
                <div style={{ backgroundColor: '#f8f8f4', zIndex: 35 }}>
                   <FirebaseLogin />
                   
                </div>
            ) : (
                <div style={{ backgroundColor: '#f8f8f4', zIndex: 3, width: 500, height: 300, marginLeft: 450, zIndex: 14600 }}>
                    <FirebaseLogin />
                    {/* {showRegisterModal && <FirebaseRegister />} */}
                </div>
            )}
        </div>
    )
};




export default SamplePage;
