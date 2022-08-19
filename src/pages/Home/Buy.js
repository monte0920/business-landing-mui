import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { XButton } from "../../components/Styled";

const Buy = () => {
    const tablet = useMediaQuery('(min-width:1400px)');

    return (
        <Stack
            direction="row"
            sx={{
                pb: '0px !important',
                borderBottomRightRadius: 300,
                overflow: 'hidden'
            }}
        >
            <Stack
                sx={{
                    width: '50%',
                }}
                justifyContent="end"
                alignItems='start'
            >
                <img src={require('../../assets/imgs/bg/pngwing 3.png').default} width="90%" style={{ marginLeft: tablet ? -50 : -20 }} />
            </Stack>
            <Stack justifyContent='center' sx={{ width: '50%', mb: 15 }} spacing={8}>
                <Stack spacing={2}>
                    <Typography
                        sx={{
                            fontSize: theme => theme.fontSize.xl,
                            fontWeight: 700,
                            color: theme => theme.colors.darkBlue
                        }}
                    >
                        Do you want to buy a Self Storage?
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: theme => theme.fontSize.md
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.
                    </Typography>
                </Stack>
                <XButton
                    sx={{
                        color: theme => theme.colors.white,
                        background: theme => theme.colors.blue,
                        width: 'fit-content !important',
                        '&:hover': {
                            background: theme => theme.colors.blue
                        }
                    }}
                >
                    Buy a Self Storage
                </XButton>
            </Stack>
        </Stack>
    )
}

export default Buy;