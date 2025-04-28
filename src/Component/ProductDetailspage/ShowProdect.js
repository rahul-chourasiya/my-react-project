import { Button, Grid2, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import {  AddtoCardFunction } from '../../redux/slices/CardFeatures/CardFeaturesSlice';
import { addprice } from '../../redux/slices/addtocard/AddtoCardFeatures';
import { useDispatch } from 'react-redux';

function ShowProdect({ item, index }) {
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState();
    const dispatch = useDispatch()
    useEffect(() => {
        setImages([item.image, item.image, item.image, item.image]);
        setMainImage(item.image);
    }, [item]);
    const swapImage = (index) => {
        let newImages = [...images];
        let temp = newImages[index];
        newImages[index] = mainImage;
        setMainImage(temp);
        setImages(newImages);
    };
    const Addtocard = () =>{
        dispatch(AddtoCardFunction([item]))
        dispatch(addprice(item.price))
    }
    return (
        <>
            <Grid2 size={{ sm: 12, md: 6, xs: 12, xl: 6 }} key={item.id || index}>
                <Stack
                direction={{ xs: "column", sm:"column", md:"row" }}
                    sx={{
                        paddingTop: "20%",
                        display: "flex",
                        width:"100%",
                        height:"100%",
                        "@media (max-width: 900px)":{
                            flexDirection:"column-reverse",
                            paddingTop:"5%",
                            alignItems:"center",
                            justifyContent:"center"
                        }
                    }}
                    >
                    <Stack direction={{ xs: "row", sm: "row", md:"column", }} sx={{ gap: "0px",  height:"auto" ,"@media (min-width: 900px)":{gap: "30px"}  }}>
                        {images.map((img, index) => {
                            return (
                                <Stack sx={{  width: "100%" }} key={index} onClick={() => swapImage(index)} onMouseOver={() => swapImage(index)}>
                                    <img
                                        src={img}
                                        alt="mbook" 
                                        style={{ height: "100%", width: "100%" }}
                                    />
                                </Stack>
                            )
                        })}
                    </Stack>
                    <Stack direction={"column"} sx={{ width:"80%", "@media (max-width: 900px)":{ flexDirection:"column-reverse",  width:"none"  }}}>
                        <img src={mainImage}  alt="mbooks" />
                    </Stack>
                </Stack>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 6, xs: 12, xl: 6 }} pt={5} >
                <Stack direction={"column"} sx={{ gap: "20px" }}>
                    <Typography
                        component={"h3"}
                        variant='h1'
                        sx={{
                            fontWeight: "600",
                            color: "black",
                            fontSize:"2rem"
                        }}>

                        {item.model}
                    </Typography>
                    <Typography
                        component={"span"}
                        variant='span'
                        sx={{
                            fontSize: "22px",
                            fontWeight: "700",
                            color: "black",
                        }}>
                        ${item.price}
                    </Typography>
                    <Stack direction={"row"} sx={{ gap: "10px" }}>
                        <Typography
                            component={"label"}
                            variant='label'
                            sx={{
                                fontSize: "17px",
                                fontWeight: "600",
                                color: "black",
                                pt: "8px"
                            }}
                        >
                            Select color :
                        </Typography>
                        <Button sx={{ height: "40px", width: "40px", borderRadius: "20px", backgroundColor: "black", minWidth: "0px", "&:hover": { border: "1px solid white" }, }}></Button>
                        <Button sx={{ height: "40px", width: "40px", borderRadius: "20px", backgroundColor: "red", minWidth: "0px", "&:hover": { border: "1px solid black" }, }}></Button>
                        <Button sx={{ height: "40px", width: "40px", borderRadius: "20px", backgroundColor: "gold", minWidth: "0px", "&:hover": { border: "1px solid black" }, }}></Button>
                        <Button sx={{ height: "40px", width: "40px", borderRadius: "20px", backgroundColor: "blue", minWidth: "0px", "&:hover": { border: "1px solid black" }, }}></Button>
                        <Button sx={{ height: "40px", width: "40px", borderRadius: "20px", backgroundColor: "pink", minWidth: "0px", "&:hover": { border: "1px solid black" }, }}></Button>
                    </Stack>
                    <Stack direction={"row"} gap={2}>
                        <Button sx={{ height: "48px", width: "20%", backgroundColor: "transparent", borderRadius: "5px", color: "#D5D5D5", border: "1px solid", "&:hover": { border: "1px solid black", color: "black" }, }}> 128GB</Button>
                        <Button sx={{ height: "48px", width: "20%", backgroundColor: "transparent", borderRadius: "5px", color: "#D5D5D5", border: "1px solid", "&:hover": { border: "1px solid black", color: "black" }, }}> 256GB</Button>
                        <Button sx={{ height: "48px", width: "20%", backgroundColor: "transparent", borderRadius: "5px", color: "#D5D5D5", border: "1px solid", "&:hover": { border: "1px solid black", color: "black" }, }}> 512GB</Button>
                        <Button sx={{ height: "48px", width: "20%", backgroundColor: "transparent", borderRadius: "5px", color: "#D5D5D5", border: "1px solid", "&:hover": { border: "1px solid black", color: "black" }, }}> 1TB</Button>
                    </Stack>
                    <Stack
                        direction={"row"}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "20px"
                        }}>
                        <Stack sx={{
                            height: "60px",
                            width: "26%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "2px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center"
                        }}>siuasgo</Stack>
                        <Stack sx={{
                            height: "60px",
                            width: "26%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "2px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center"
                        }}>siuasgo</Stack>
                        <Stack sx={{
                            height: "60px",
                            width: "26%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "2px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center"
                        }}>siuasgo</Stack>
                        <Stack sx={{
                            height: "60px",
                            width: "26%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "2px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center"
                        }}>siuasgo</Stack>
                        <Stack sx={{
                            height: "60px",
                            width: "26%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "2px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center"
                        }}>siuasgo</Stack>
                        <Stack sx={{
                            height: "60px",
                            width: "26%",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "2px",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center"
                        }}>siuasgo</Stack>
                    </Stack>
                    <Typography
                        component={"p"}
                        variant='p'
                        sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            letterSpacing: "1px",
                            textTransform: "capitalize"
                        }}
                    >
                        {item.description}
                    </Typography>
                    <Stack direction={"row"} sx={{ gap: "20px" }}>
                        <Button
                            sx={{
                                height: "56px",
                                width: "47%",
                                border: "1px solid black",
                                color: "black",
                                fontWeight: "600"
                            }}
                            >
                                Add To Wishlist
                            </Button>
                        <Button
                            sx={{
                                height: "56px",
                                width: "47%",
                                backgroundColor: "black",
                                color: "white",
                                fontWeight: "600"
                            }}
                            onClick={Addtocard}
                            >Add To Cart</Button>
                    </Stack>
                    <Stack direction={"row"}>

                    </Stack>
                </Stack>
            </Grid2>
        </>

    )


}

export default ShowProdect