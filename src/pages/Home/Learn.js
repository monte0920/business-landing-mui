import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardC_info } from "../../config";
import { CardB } from "../../components/Card";
import { XLButton } from "../../components/Styled";

const Learn = () => {
    return (
        <Stack
            sx={{
                background: theme => theme.colors.blue,
                backgroundImage: `url(${require('../../assets/imgs/bg/pngwing_4.png').default})`,
                backgroundSize: '100% 100%',
                borderTopLeftRadius: 300,
                overflow: 'hidden',
                mt: -10
            }}
            spacing={10}
        >
            <Stack alignItems='center' spacing={2}>
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.xl,
                        color: theme => theme.colors.white,
                        fontWeight: 600,
                        textAlign: 'center'
                    }}
                >Learn Everything About Buying, Selling, and<br />Operating a Self Storage</Typography>
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.md,
                        color: theme => theme.colors.white,
                        textAlign: 'center',
                        fontWeight: 400,
                        width: '60%',
                    }}
                >Learn about literally anything to know about Selling or<br />
                    Buying a Self Storage</Typography>

            </Stack>
            <Stack
                direction='row'
                spacing={4}
            >
                {
                    CardC_info.map((item, index) => (
                        <Stack key={index}><CardB data={item} /></Stack>
                    ))
                }
            </Stack>
            <Stack alignItems='center'>
                <XLButton>Explore the Learning Section</XLButton>
            </Stack>
            <img width={80} height={172} src={require('../../assets/imgs/circles/Ellipse4.png').default} style={{ position: 'absolute', right: 0, marginTop: 100 }} />
            <img width={70} height={250} src={require('../../assets/imgs/circles/Ellipse5.png').default} style={{ position: 'absolute', left: 0, marginTop: 500 }} />
        </Stack>
    )
}

export default Learn;