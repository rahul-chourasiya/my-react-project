import React from 'react';
import { Box, Button, Container,  Grid2, Stack, Typography } from '@mui/material';
import Iphoneimg from '../Assets/Iphone.png';
import PlayStation from '../Assets/PlayStation.png';
import headphone from '../Assets/headphone.png';
import gameconsole from '../Assets/gameconsole.png';
import MacBook from '../Assets/MacBook.png';
import PlayStationpro from '../Assets/PlayStationpro.png';
import Macbook1 from '../Assets/Macbook 1.png';
import phones from '../Assets/phones.png';
import phonetab from '../Assets/phonetab.png';
import headphonepro from '../Assets/headphonepro.png';
import br from '../Assets/br.png';
import MBook from '../Assets/MBook.png';
import png1 from '../Assets/png1.png';
import png2 from '../Assets/png2.png';
import Banner2 from '../Assets/Banner2.png';
import Homecarouselcategory from '../Component/Homecarouselcategory';
import ProductCard from '../Component/ProductCard/ProductCard';
import DiscountsCard from '../Component/ProductCard/DiscountsCard';




function Home() {

    return (
        <Box>
            <Box sx={{ width: '100%', backgroundColor: '#211C24', }}>
                <Grid2 container >
                    <Grid2 size={{ sm: 12, md: 7, xs: 12, xl: 6 }} >
                        <Stack
                            spacing={3}
                            sx={{
                                pl: "18%",
                                pt: '18%',
                                "@media(max-width:786px)": {
                                    pl: "0%",
                                    pt: '8%',
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            }}
                        >
                            <Typography variant="h6" sx={{ color: '#909090' }}>
                                Pro.Beyond.
                            </Typography>
                            <Typography variant="h2" sx={{ color: 'white', }}>
                                IPhone 14 <span style={{ fontWeight: 900 }}>Pro</span>
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#909090' }}>
                                Created to change everything for the better. For everyone
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '56px',
                                    width: '184px',
                                    color: 'white',
                                    borderColor: '#909090',
                                    '&:hover': { borderColor: 'white' },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ sm: 12, md: 5, xs: 12, xl: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{}}>
                            <img
                                src={Iphoneimg}
                                alt="iPhone 14 Pro"
                                style={{ width: '100%', height: 'auto', maxWidth: '406px', paddingTop: "40%" }}
                                className='homeifhoneimg'
                            />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
            <Box sx={{ width: '100%', }}>
                <Grid2 container size={{ sm: 12, md: 12, xs: 12, xl: 12 }}>
                    <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} >
                        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} >
                            <Box sx={{ backgroundColor: 'white', }}>
                                <Grid2 container sx={{ display: "flex", alignItems: "center" }}>
                                    <Grid2 size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
                                        <picture>
                                            <source srcSet={PlayStationpro} media="(max-width: 600px)" />
                                            <source srcSet={PlayStation} media="(min-width: 900px)" />
                                            <img
                                                src={PlayStation}
                                                alt="PlayStation 5"
                                                style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                                                className='PlayStation'
                                            />
                                        </picture>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 7, md: 7, lg: 7, xl: 7 }}>
                                        <Stack spacing={2}>
                                            <Typography variant="h2" component="h1">
                                                PlayStation 5
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#909090' }}>
                                                Incredibly powerful CPUs, GPUs, and an SSD with <br /> integrated I/O will redefine your PlayStation experience.
                                            </Typography>
                                        </Stack>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                            <Box
                                sx={{
                                    backgroundColor: '#EDEDED',
                                    height: window.innerWidth < 600 ? "350px" : '272px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Stack direction={{ xs: "column", sm: "row", }} alignItems="center" sx={{ width: "100%", }}>
                                    <picture>
                                        <source srcSet={headphonepro} media="(max-width: 600px)" />
                                        <source srcSet={headphone} media="(min-width: 900px)" />
                                        <img
                                            src={headphone}
                                            alt="Apple AirPods Max"
                                            style={{ height: '150px', width: 'auto', objectFit: 'contain', paddingRight: "10%" }}
                                        />
                                    </picture>

                                    <Stack>
                                        <Typography variant="h2" component="h2" sx={{ paddingBottom: '10px' }}>
                                            Apple <br /> AirPods <span style={{ fontWeight: "900" }}> Max</span>
                                        </Typography>
                                        <Typography variant="body1">
                                            Computational audio. <br />Listen, it's powerful
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                            <Box
                                sx={{
                                    backgroundColor: '#353535',
                                    height: window.innerWidth < 600 ? "350px" : '272px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Stack direction={{ xs: "column", sm: "row", }} alignItems="center" sx={{ width: "100%" }}>
                                    <picture>
                                        <source srcSet={br} media="(max-width: 600px)" />
                                        <source srcSet={gameconsole} media="(min-width: 900px)" />
                                        <img
                                            src={gameconsole}
                                            alt="Apple Vision Pro"
                                            style={{ height: '150px', width: 'auto', objectFit: 'contain', paddingRight: "10%" }}
                                        />
                                    </picture>
                                    <Stack>
                                        <Typography variant="h6" component="h1" sx={{ color: 'white', paddingBottom: '10px' }}>
                                            Apple <br /> Visio <span style={{ fontWeight: "900" }}>  Pro</span>
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'white' }}>
                                            An immersive way to <br />  experience entertainment
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid2>
                    </Grid2>
                    <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} sx={{ backgroundColor: '#EDEDED', display: "flex", justifyContent: "flex-end", alignContent: "center", alignItems: "center" }} >
                        <Box sx={{}}>
                            <Grid2 container alignItems="center">
                                <Grid2 size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
                                    <Stack spacing={2} pl={"8%"}>
                                        <Typography variant="h3" component="h1">
                                            Macbook  <span style={{ fontWeight: "900" }}> Air</span>
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#909090' }}>
                                            The new 15‑inch MacBook Air makes room for more of what <br /> you love with a spacious Liquid Retina display.
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                height: '56px',
                                                width: '184px',
                                                color: 'black',
                                                borderColor: 'black',
                                                '&:hover': { borderColor: 'black' },
                                            }}
                                        >
                                            Shop Now
                                        </Button>
                                    </Stack>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                                    <picture>
                                        <source srcSet={MBook} media="(max-width: 600px)" />
                                        <source srcSet={MacBook} media="(min-width: 900px)" />
                                        <img
                                            src={MacBook}
                                            alt="MacBook"
                                            style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                                        />
                                    </picture>

                                </Grid2>
                            </Grid2>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
            <Container >
                <Grid2 size={{ sm: 12, md: 12, xs: 12, xl: 12 }} >
                    <Homecarouselcategory />
                </Grid2>
                <Grid2 size={{ sm: 12, md: 12, xs: 12, xl: 12 }} pb={10} >
                    <Box component={"div"} >
                        <Stack direction={"row"} gap={5} sx={{ paddingBottom: "35px" }}>
                            <Typography
                                component={"a"}
                                sx={{
                                    fontWeight: "500",
                                    color: "black"
                                }}>New Arrival</Typography>
                            <Typography
                                component={"a"}
                                sx={{
                                    fontWeight: "500",
                                    color: "black"
                                }}>Bestseller</Typography>
                            <Typography
                                component={"a"}
                                sx={{
                                    fontWeight: "500",
                                    color: "black"
                                }}>Featured Products</Typography>
                        </Stack>
                        <ProductCard />
                    </Box>
                </Grid2>
            </Container>
            <Box component={"div"} sx={{ width: "100%" }}>
                <Grid2 container>
                    <Grid2 size={{ sm: 6, md: 3, xs: 12, xl: 3 }}>
                        <Stack direction={"column"} sx={{ height: "700px", pl: "32px", pr: "32px", pb:"56px", gap: "40px" }}>
                            <img src={png2} alt="MBook" style={{height:"400px",width:"280px" ,position:"absolute"}} />
                            <img src={png1} alt="MBook" style={{height:"348px",width:"280px",position:"relative",paddingTop:"25%"}} />
                            <Typography
                                component={"h4"}
                                variant='h4'
                                sx={{
                                    fontWeight: "600"
                                }}
                            >Popular Products</Typography>
                            <Typography
                                component={"p"}
                                variant='p'
                                sx={{
                                    fontWeight: "500",
                                    color: "#909090"
                                }}
                            >iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '56px',
                                    width: '184px',
                                    color: 'black',
                                    borderColor: 'black',
                                    '&:hover': { borderColor: 'black' },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ sm: 6, md: 3, xs: 12, xl: 3}}>
                        <Stack direction={"column"} sx={{ height: "700px", pl: "32px", pr: "32px", pb:"56px", gap: "40px",backgroundColor:"#F9F9F9" }}>
                            <img src={phonetab} alt="MBook" style={{height:"65%",width:"100%"}}/>
                            <Typography
                                component={"h4"}
                                variant='h4'
                                sx={{
                                    fontWeight: "600"
                                }}
                            >ipad Pro</Typography>
                            <Typography
                                component={"p"}
                                variant='p'
                                sx={{
                                    fontWeight: "500",
                                    color: "#909090"
                                }}
                            >iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '56px',
                                    width: '184px',
                                    color: 'black',
                                    borderColor: 'black',
                                    '&:hover': { borderColor: 'black' },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ sm: 6, md: 3, xs: 12, xl: 3}}>
                        <Stack direction={"column"} sx={{ height: "700px", pl: "32px", pr: "32px", pb: "56px", gap: "40px" , backgroundColor:"#EAEAEA"}}>
                            <img src={phones} alt="MBook" style={{height:"65%",width:"100%"}} />
                            <Typography
                                component={"h4"}
                                variant='h4'
                                sx={{
                                    fontWeight: "600"
                                }}
                            >Samsung Galaxy</Typography>
                            <Typography
                                component={"p"}
                                variant='p'
                                sx={{
                                    fontWeight: "500",
                                    color: "#909090"
                                }}
                            >iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '56px',
                                    width: '184px',
                                    color: 'black',
                                    borderColor: 'black',
                                    '&:hover': { borderColor: 'black' },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ sm: 6, md: 3, xs: 12, xl: 3 }}>
                        <Stack direction={"column"} sx={{ height: "700px", pl:"30px" ,pb:"56px" ,gap: "40px",backgroundColor:"#2C2C2C" }}>
                            <img src={ Macbook1} alt="MBook" style={{height:"80%",width:"70%",marginLeft:"30%"}} />
                            <Typography
                                component={"h4"}
                                variant='h4'
                                sx={{
                                    fontWeight: "600",
                                    marginTop:"-103px"
                                }}
                            >Macbook Pro</Typography>
                            <Typography
                                component={"p"}
                                variant='p'
                                sx={{
                                    fontWeight: "500",
                                    color: "#909090"
                                }}
                            >iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    height: '56px',
                                    width: '184px',
                                    color: 'black',
                                    borderColor: 'black',
                                    '&:hover': { borderColor: 'black' },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Stack>
                    </Grid2>
                </Grid2>

            </Box>
            <Container>
                <Grid2 size={{sm: 12, md: 12, xs: 12, xl: 12}} pt={10} >
                    <Box component={"div"} gap={3}>
                        <Typography
                        component={"h4"}
                        variant='h4'
                        sx={{
                            fontWeight:"500",
                            paddingBottom:"5%"
                        }}>
                            Discounts up to -50%
                        </Typography>
                        <DiscountsCard/>
                    </Box>
                </Grid2>
            </Container>
            <Box 
            component={"div"}
            sx={{
                width:"100%",
                height:"448px"
            }}>
                <img src={Banner2}  alt="Banner2" style={{ height:"448px",width:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"absolute"}} />
                <Stack 
                direction={"column"}
                sx={{
                    position:"relative",
                    height:"200px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    paddingTop:"140px"
                }}
                >
                     <Typography
                        component={"h1"}
                        variant='h1'
                        sx={{
                            fontWeight:"500",
                            color:"white"
                        }}>
                           Big Summer Sale
                        </Typography>
                        <Typography
                        component={"p"}
                        variant='p'
                        sx={{
                            fontWeight:"500",
                            color:"white",
                            paddingBottom:"3%"
                        }}>
                           Commodo fames vitae vitae leo mauris in. Eu consequat.
                        </Typography>
                        <Button
                                variant="outlined"
                                sx={{
                                    height: '56px',
                                    width: '184px',
                                    color: 'white',
                                    borderColor: '#909090',
                                    '&:hover': { borderColor: 'white' },
                                }}
                            >
                                Shop Now
                            </Button>
                </Stack>
            </Box>
        </Box >
    );
}

export default Home;