import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ maxWidth: 500, position: 'fixed', bottom: 0, right: 0, left: 0 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Recents"
                    icon={<HomeIcon />}
                    component={Link}
                    to="/home"
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                    component={Link}
                    to="/favorites"
                />
                <BottomNavigationAction
                    label="Soqqa"
                    icon={<CurrencyExchangeIcon />}
                    component={Link}
                    to="/cash"
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
