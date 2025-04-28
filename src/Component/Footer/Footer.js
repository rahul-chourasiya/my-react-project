import React from 'react'
import { Box, Container, Grid2, ListItem, Stack, Typography, List, ListItemButton, ListItemText } from '@mui/material'
import Logo from "../../Assets/footerlogo.png";
import Facebook from "../../Assets/Facebook.png";
import Instagram from "../../Assets/Instagram.png";
import Tiktok from "../../Assets/Tiktok.png";
import Twitter from "../../Assets/Twitter.png";


const linktextServices = ["Bonus program", "Gift cards", "Credit and payment", "Service contracts", "Non-cash account", "Payment"]
const linktextbuyer = ["Find an order", "Terms of delivery", "Exchange and return of goods", "Guarantee", "Frequently asked questions", "Terms of use of the site"]

function Footer() {
    return (
        <Box
            component={"footer"}
            sx={{
                // position:"fixed",
                backgroundColor: "#000000",
                padding: "104px 160px",
                "@media(max-width:1290px)": {
                    padding: "100px 50px !important",
                },
            }}>
            <Container maxWidth={false}>
                <Grid2 container
                    spacing={2}
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                        "@media(max-width:900px)": {
                            gap:"50px",
                        },
                    }}>
                    <Grid2 size={{ sm: 12, xs: 12, md: 6, lg: 6, xl: 6 }}>
                        <Stack direction={"column"} sx={{ height: '104px' , width:"100%", display:{sm:"flex",md:"block"}  ,justifyContent:"center",alignItems:"center"}}>
                            <img src={Logo} alt='//logo' style={{ height: "28px", width: "95px" }} />
                            <Typography
                                component={"p"}
                                sx={{
                                    color: "white",
                                    fontSize: "medium",
                                    fontWeight: "500",
                                    marginTop: "40px"
                                }}>
                                We are a residential interior design firm located in Portland.<br /> Our boutique-studio offers more than
                            </Typography>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ sm: 12, xs: 12, md: 3, lg: 3, xl: 3 }} sx={{ width:"100%", display:{sm:"flex",md:"block"}  ,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Typography
                            component={"h4"}
                            sx={{
                                fontSize:"20px",
                                fontWeight: "600",
                                color: "white",
                                paddingLeft: "16px"
                            }}>
                            Services
                        </Typography>
                        <List>
                            {linktextServices.map((item, index) => {
                                return (
                                    <ListItem disablePadding key={index}>
                                        <ListItemButton>
                                            <ListItemText primary={item} sx={{ color: "#CFCFCF" }} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid2>
                    <Grid2 size={{ sm: 12, xs: 12, md: 3, lg: 3, xl: 3 }} sx={{  width:"100%", display:{sm:"flex",md:"block"}  ,justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Typography
                            component={"h4"}
                            sx={{
                                fontSize:"20px",
                                fontWeight: "600",
                                color: "white",
                                paddingLeft: "16px"
                            }}>
                            Assistance to the buyer
                        </Typography>
                        <List>
                            {linktextbuyer.map((item, index) => {
                                return (
                                    <ListItem disablePadding key={index}>
                                        <ListItemButton>
                                            <ListItemText primary={item} sx={{ color: "#CFCFCF" }} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid2>
                </Grid2>
                <Stack
                    component={"div"}
                    direction={"row"}
                    sx={{
                        gap: "40px !important",
                        paddingTop: "40px",
                        display:{sm:"flex",md:"block"}  ,
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                    <img src={Facebook} alt='//icon' style={{ height: "16px", width: "16px" , paddingLeft:"20px"}} />
                    <img src={Instagram} alt='//icon' style={{ height: "16px", width: "16px" , paddingLeft:"20px"}} />
                    <img src={Twitter} alt='//icon' style={{ height: "16px", width: "16px" , paddingLeft:"20px"}} />
                    <img src={Tiktok} alt='//icon' style={{ height: "16px", width: "16px" , paddingLeft:"20px"}} />
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer