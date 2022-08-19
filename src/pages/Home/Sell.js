import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { XButton } from "../../components/Styled";

const Sell = () => {
    const tablet = useMediaQuery('(min-width:1400px)');

    return (
        <Stack
            direction="row"
            sx={{
                background: theme => theme.colors.sellBg,
                pb: '0px !important',
                borderBottomRightRadius: 300,
                overflow: 'hidden'
            }}
        >
            <Stack justifyContent='center' sx={{ width: '50%', mb: 10 }} spacing={8}>
                <Stack spacing={2}>
                    <Typography
                        sx={{
                            fontSize: theme => theme.fontSize.xl,
                            fontWeight: 700,
                            color: theme => theme.colors.darkBlue
                        }}
                    >
                        Do you have a Self Storage for Sale?
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
                    Sell Your Self Storage
                </XButton>
            </Stack>
            <Stack
                sx={{
                    width: '50%',
                }}
                justifyContent="end"
                alignItems='end'
            >
                <img src={require('../../assets/imgs/bg/pngwing.png').default} width="80%" style={{ marginRight: 10 }} />
                <img src={require('../../assets/imgs/bg/pngwing2.png').default} height={tablet ? 430 : 320} width="100%" style={{ marginTop: tablet ? -430 : -320 }} />
            </Stack>
            <img width={120} height={172} src={require('../../assets/imgs/circles/Ellipse3.png').default} style={{ position: 'absolute', left: 0, marginTop: tablet ? 590 : 370 }} />
        </Stack>
    )
}

export default Sell;