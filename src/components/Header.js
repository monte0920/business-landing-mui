import React from "react";
import Stack from "@mui/material/Stack";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as HeaderIcon } from '../assets/imgs/header_icon.svg';
import { HeaderButton } from "./Styled";

const Header = () => {
    return (
        <Stack>
            <AppBar
                position="static"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    '& > div': {
                        px: 0,
                        py: 5
                    }
                }}
            >
                <Toolbar>
                    <Stack sx={{ flexGrow: 1 }} direction='row' spacing={1} alignItems='center'>
                        <HeaderIcon />
                        <Typography sx={{ fontSize: theme => theme.fontSize.lg, fontWeight: 600, fontFamily: 'Inter' }}>
                            StorageConnect
                        </Typography>
                    </Stack>
                    <Stack direction='row' spacing={3}>
                        <HeaderButton>Active Listings</HeaderButton>
                        <HeaderButton>Sell your Self Storage</HeaderButton>
                        <HeaderButton>Free Evaluation</HeaderButton>
                        <HeaderButton>Learn</HeaderButton>
                        <HeaderButton>Contact</HeaderButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Stack>
    )
}

export default Header;