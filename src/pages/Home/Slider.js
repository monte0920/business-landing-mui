import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Import Swiper styles
import "swiper/swiper.scss";
import 'swiper/modules/pagination/pagination.scss';
import { CardC } from "../../components/Card";
import { CardA_info } from "../../config";

const Slider = () => {
    return (
        <Stack
            sx={{
                pb: '50px !important'
            }}
        >
            <Stack alignItems='center' spacing={1}>
                <Typography
                    sx={{
                        fontSize: theme => theme.fontSize.xl,
                        color: theme => theme.colors.black,
                        fontWeight: 600,
                    }}
                >Featured Self Storages</Typography>
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
                    width: '100%'
                }}
            >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        CardA_info.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardC data={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Stack>
        </Stack>
    )
}

export default Slider;