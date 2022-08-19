import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from "@mui/material/useMediaQuery";

import "../assets/scss/index.scss";

// ** Declare Theme Provider
const MaterialThemeProvider = ({ children }) => {
    const mobile = useMediaQuery('(min-width:800px)');
    const tablet = useMediaQuery('(min-width:1400px)');

    const themeConfig = {
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: 10,
                        fontFamily: 'Poppins'
                    }
                }
            },
        },
        custom: {
            containerPadding: !tablet ? 10 : 15
        },
        typography: {
            fontFamily: 'Poppins'
        },
        fontSize: {
            xxl: 60,
            xl: 35,
            lxl: 25,
            lg: 20,
            md: 18,
            sm: 16,
            xm: 14
        },
        colors: {
            white: '#ffffff',
            black: '#000000',
            yellow: '#FFCE31',
            gray: 'rgba(0, 1, 3, 0.7)',
            cardBg: '#F6F8FD',
            blue: '#1849C6',
            darkBlue: '#021850',
            sellBg: '#E8EFFF',
            inActive: '#4A4A4A'
        },
        isMobile: !mobile,
        isTablet: !tablet
    }

    const theme = createTheme(themeConfig);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MaterialThemeProvider;
