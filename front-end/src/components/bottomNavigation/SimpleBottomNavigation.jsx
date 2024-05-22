import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ maxWidth: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Recents"
                    icon={<RestoreIcon />}
                    component={Link}
                    to="/recents"
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                    component={Link}
                    to="/favorites"
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<LocationOnIcon />}
                    component={Link}
                    to="/auth/login"
                />
                <BottomNavigationAction
                    label="Profile"
                    icon={<AccountCircleIcon />}
                    component={Link}
                    to="/profile"
                />
            </BottomNavigation>
        </Box>
    );
}
