import React from "react";
import Stack from "@mui/material/Stack";

import Buy from "./Buy";
import Main from "./main";
import Sell from "./Sell";
import Slider from "./Slider";
import ActiveStorage from "./ActiveStorage";

import './index.css';
import Learn from "./Learn";
import Contact from "./Contact";

const Home = () => {
    return (
        <Stack
            sx={{
                '& > div': {
                    p: theme => theme.custom.containerPadding
                }
            }}
        >
            <Main />
            <Slider />
            <ActiveStorage />
            <Sell />
            <Buy />
            <Learn />
            <Contact />
        </Stack>
    )
}

export default Home;