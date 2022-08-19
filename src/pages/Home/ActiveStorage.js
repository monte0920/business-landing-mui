import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OutlinedInput from '@mui/material/OutlinedInput';
import useMediaQuery from "@mui/material/useMediaQuery";

import { CardD } from "../../components/Card";
import { XButton, XLButton } from "../../components/Styled";
import { CardB_info } from "../../config";
import { ReactComponent as LocationIcon } from '../../assets/imgs/icons/location.svg';
import { ReactComponent as OfficeIcon } from '../../assets/imgs/icons/office.svg';
import { ReactComponent as OccIcon } from '../../assets/imgs/icons/occ.svg';

const ActiveStorage = () => {
    const tablet = useMediaQuery('(min-width:1400px)');
    return (
        <Stack
            sx={{
                p: '0px !important'
            }}
        >
            <Stack
                sx={{
                    backgroundImage: `url(${require('../../assets/imgs/bg/Rectangle_8.png').default})`,
                    backgroundSize: '100% 100%',
                }}
            >
                <Stack
                    sx={{
                        background: theme => theme.colors.white,
                        pl: 10,
                        mr: 20,
                        pb: 6
                    }}
                    spacing={tablet ? 15 : 10}
                >
                    <Stack alignItems='center' spacing={1}>
                        <Typography
                            sx={{
                                fontSize: theme => theme.fontSize.xl,
                                color: theme => theme.colors.black,
                                fontWeight: 600,
                            }}
                        >Active Listing Self Storages</Typography>
                        <Typography
                            sx={{
                                fontSize: theme => theme.fontSize.md,
                                color: theme => theme.colors.gray,
                                textAlign: 'center',
                                fontWeight: 400,
                                width: '60%',
                            }}
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare</Typography>

                    </Stack>
                    <Stack
                        sx={{
                            background: theme => theme.colors.white,
                            boxShadow: '0px 5px 50px rgba(1, 31, 109, 0.1)',
                            borderRadius: '20px',
                            p: 4.5,
                            ml: '40px !important',
                            width: '100%'
                        }}
                        direction='row'
                        justifyContent='space-between'
                        spacing={tablet ? 15 : 5}
                    >
                        <Stack spacing={2} flexGrow={1}>
                            <Typography sx={{ fontSize: theme => theme.fontSize.lg }}>Location</Typography>
                            <OutlinedInput
                                sx={{
                                    width: '100%',
                                    height: 60,
                                    borderColor: '#D9D9D9',
                                    borderRadius: 2.5,
                                    '& svg': {
                                        mr: 1.5,
                                        '& path': {
                                            fill: theme => theme.colors.gray,
                                        }
                                    }
                                }}
                                type="email"
                                placeholder="Search location"
                                startAdornment={
                                    <LocationIcon />
                                }
                            />
                        </Stack>
                        <Stack spacing={2}>
                            <Typography sx={{ fontSize: theme => theme.fontSize.lg }}>Location</Typography>
                            <Stack direction='row' alignItems='center' spacing={3}>
                                <OutlinedInput
                                    sx={{
                                        width: tablet ? '100%' : 200,
                                        height: 60,
                                        borderColor: '#D9D9D9',
                                        borderRadius: 2.5,
                                        '& svg': {
                                            mr: 1.5,
                                            width: 22,
                                            height: 22,
                                            '& path': {
                                                stroke: theme => theme.colors.gray,
                                            }
                                        }
                                    }}
                                    type="email"
                                    placeholder="Unit Count"
                                    startAdornment={
                                        <OfficeIcon />
                                    }
                                />
                                <OutlinedInput
                                    sx={{
                                        width: tablet ? '100%' : 200,
                                        height: 60,
                                        borderColor: '#D9D9D9',
                                        borderRadius: 2.5,
                                        '& svg': {
                                            mr: 1.5,
                                            width: 22,
                                            height: 22,
                                            '& path': {
                                                fill: theme => theme.colors.gray,
                                            }
                                        }
                                    }}
                                    type="email"
                                    placeholder="Occupancy"
                                    startAdornment={
                                        <OccIcon />
                                    }
                                    endAdornment={
                                        <Typography sx={{ color: theme => theme.colors.gray }}>%</Typography>
                                    }
                                />
                            </Stack>
                        </Stack>
                        <Stack justifyContent='end'>
                            <XButton sx={{ color: theme => theme.colors.gray }} startIcon={<img src={require('../../assets/imgs/icons/search.svg').default} />}>Search</XButton>
                        </Stack>
                    </Stack>
                    <Stack
                        sx={{
                            width: '100%',
                            flexWrap: 'wrap',
                            gap: 3,
                        }}
                        direction='row'
                    >
                        {
                            CardB_info.map((item, index) => (
                                <Stack
                                    key={index}
                                    sx={{
                                        width: 'calc(100% / 3 - 16px)'
                                    }}
                                >
                                    <CardD data={item} />
                                </Stack>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                alignItems='center'
                sx={{
                    background: theme => theme.colors.sellBg,
                    pt: 5,
                    pb: 10
                }}
            >
                <XLButton>View More Listings</XLButton>
            </Stack>
        </Stack >
    )
}

export default ActiveStorage;