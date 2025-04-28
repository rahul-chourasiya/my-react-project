import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Stack, Typography } from '@mui/material';
import Arrow1 from '../Assets/Arrow1.png';
import Arrow2 from '../Assets/Arrow2.png';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

function Homecarouselcategory() {
    const sliderRef = useRef(null);
    const products = [
        { name: "Phone", icon: <PhoneIphoneOutlinedIcon /> },
        { name: "Computer", icon: <ComputerOutlinedIcon /> },
        { name: "Videogame", icon: <VideogameAssetOutlinedIcon /> },
        { name: "Camera", icon: <CameraAltOutlinedIcon /> },
        { name: "Headphone", icon: <HeadphonesOutlinedIcon /> },
        { name: "Headphone", icon: <HeadphonesOutlinedIcon /> },
        { name: "Camera", icon: <CameraAltOutlinedIcon /> },
        { name: "Headphone", icon: <HeadphonesOutlinedIcon /> },
        { name: "Headphone", icon: <HeadphonesOutlinedIcon /> },
        { name: "Phone", icon: <PhoneIphoneOutlinedIcon /> },
        { name: "Computer", icon: <ComputerOutlinedIcon /> },
        { name: "Videogame", icon: <VideogameAssetOutlinedIcon /> },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 6,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 6,
                    justifyContent:"center"
                },
            },
        ],
    };

    const goToPrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', padding: '80px 0px' }}>
            <Stack direction={"row"} sx={{ paddingBottom: "30px" }}>
                <Typography
                    component={"h5"}
                    variant='h5'
                    sx={{
                        marginRight: "auto",
                        fontWeight: "600"
                    }}
                >
                    Browse By Category
                </Typography>
                <Button
                    variant="contained"
                    onClick={goToPrevious}
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        '&:hover': { backgroundColor: "#f0f0f0" },
                    }}
                >
                    <img src={Arrow1} alt='Arrow1' />
                </Button>
                <Button
                    variant="contained"
                    onClick={goToNext}
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        '&:hover': { backgroundColor: "#f0f0f0" },
                    }}
                >
                    <img src={Arrow2} alt='Arrow2' />
                </Button>
            </Stack>
            <Slider ref={sliderRef} {...settings}>
                {products.map((product, index) => (
                    <Box
                        key={index}
                        sx={{
                            padding: "0 10px", 
                        }}
                    >
                        <Box
                            sx={{
                                height: "128px",
                                width: "160px",
                                backgroundColor: "#EDEDED",
                                display: "flex",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                gap: "8px",
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "600",
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6
                                }
                            }}
                        >
                            <Typography component={"h6"} variant="body1">
                                {product.name}
                            </Typography>
                            {product.icon}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Homecarouselcategory;