import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';
import { isMobile } from 'react-device-detect';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //
import { useRoutes } from 'react-router-dom';

// routes

// ==============================|| ROUTING RENDER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                {!isMobile && (
                    <div style={{ width: 200 }}>
                        <LogoSection />
                    </div>
                )}

                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
            </Box>
            {/* header search */}
            <SearchSection />
            {/* notification & profile */}
            {/* <NotificationSection /> */}
            <ProfileSection />
            {/* {!isMobile && (
                <div>
                    <LogoSection />
                </div>
            )} */}
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
