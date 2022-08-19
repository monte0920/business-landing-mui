import React from "react";
import Menu from '@mui/material/Menu';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ReactComponent as FooterIcon } from '../assets/imgs/footer_icon.svg';
import { ReactComponent as FaceBookIcon } from '../assets/imgs/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../assets/imgs/icons/social-linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/imgs/icons/social-twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/imgs/icons/social-instagram.svg';
import { ReactComponent as GlobeIcon } from '../assets/imgs/icons/android-globe.svg';
import { CIconButton, MButton } from "./Styled";
import { MultiLanguage } from "../config";

const ITEM_HEIGHT = 48;

const Footer = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [language, setLanguage] = React.useState(MultiLanguage[0]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSelect = (lan) => {
        setLanguage(lan);
        handleClose();
    }

    return (
        <Stack
            sx={{
                p: theme => theme.custom.containerPadding,
                pb: 8
            }}
            direction='row'
            spacing={5}
        >
            <Stack
                spacing={1.5}
                sx={{
                    height: 'fit-content',
                    width: '30%'
                }}
            >
                <Stack sx={{ flexGrow: 1 }} direction='row' spacing={1} alignItems='center'>
                    <FooterIcon />
                    <Typography sx={{ fontSize: 22, fontWeight: 700, fontFamily: 'Inter' }}>
                        StorageConnect
                    </Typography>
                </Stack>
                <Stack
                    spacing={5}
                    sx={{
                        '& > p': {
                            fontSize: theme => theme.fontSize.sm,
                            color: theme => theme.colors.inActive
                        }
                    }}
                >
                    <Typography>
                        Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
                    </Typography>
                    <Typography>
                        © StorageConnect 2022, All Rights Reserved
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                spacing={2}
                sx={{
                    height: 'fit-content',
                    width: '18%'
                }}
            >
                <Typography sx={{ fontSize: theme => theme.fontSize.md, fontWeight: 700, textTransform: 'uppercase' }}>
                    Quick Links
                </Typography>
                <Stack
                    sx={{
                        '& > p': {
                            fontSize: theme => theme.fontSize.sm,
                            color: theme => theme.colors.inActive
                        }
                    }}
                    spacing={2}
                >
                    <Typography>
                        Active Listings
                    </Typography>
                    <Typography>
                        Self your Self Storage
                    </Typography>
                    <Typography>
                        Free Evaluation
                    </Typography>
                    <Typography>
                        Learn
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                spacing={2}
                sx={{
                    height: 'fit-content',
                    width: '25%'
                }}
            >
                <Typography sx={{ fontSize: theme => theme.fontSize.md, fontWeight: 700, textTransform: 'uppercase' }}>
                    Newsleter
                </Typography>
                <Stack
                    sx={{
                        '& > p': {
                            fontSize: theme => theme.fontSize.sm,
                            color: theme => theme.colors.inActive
                        }
                    }}
                    spacing={1}
                >
                    <Typography>
                        Get latest updates right in your inbox
                    </Typography>
                    <FormControl>
                        <OutlinedInput sx={{ width: 250, height: 50, borderColor: '#E8EFFF', borderRadius: 2.5 }} placeholder="Enter your emaill" />
                    </FormControl>
                    <MButton sx={{ width: 'fit-content' }}>
                        Subscribe Now
                    </MButton>
                </Stack>
            </Stack>
            <Stack
                spacing={2}
                sx={{
                    height: 'fit-content'
                }}
            >
                <Typography sx={{ fontSize: theme => theme.fontSize.md, fontWeight: 700, textTransform: 'uppercase' }}>
                    Let’s get social
                </Typography>
                <Stack
                    sx={{
                        '& > p': {
                            fontSize: theme => theme.fontSize.sm,
                            color: theme => theme.colors.inActive
                        }
                    }}
                    spacing={5}
                >
                    <Stack direction="row" spacing={2}>
                        <CIconButton>
                            <FaceBookIcon />
                        </CIconButton>
                        <CIconButton>
                            <LinkedInIcon />
                        </CIconButton>
                        <CIconButton>
                            <TwitterIcon />
                        </CIconButton>
                        <CIconButton>
                            <InstagramIcon />
                        </CIconButton>
                    </Stack>
                    <Button
                        id="language-button"
                        aria-controls={open ? 'language-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="outlined"
                        disableElevation
                        onClick={handleClick}
                        startIcon={<GlobeIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            width: 210,
                            color: theme => theme.colors.black,
                            fontSize: theme => theme.fontSize.md,
                            fontWeight: 500
                        }}
                    >
                        {language.name}
                    </Button>
                    <Menu
                        id="language-menu"
                        MenuListProps={{
                            'aria-labelledby': 'language-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 210,
                            },
                        }}
                    >
                        {MultiLanguage.map((lan, index) => (
                            <MenuItem key={index} selected={lan.id === language.id} onClick={() => handleSelect(lan)}>
                                {lan.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </Stack>
            </Stack>
            <img width={190} height={190} src={require('../assets/imgs/circles/Rectangle.png').default} style={{ position: 'absolute', left: 30 }} />
            <img width={190} height={190} src={require('../assets/imgs/circles/Rectangle.png').default} style={{ position: 'absolute', right: 30 }} />
        </Stack>
    )
}

export default Footer;