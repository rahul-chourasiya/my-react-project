import React from 'react';
import { useSelector } from 'react-redux';
import DiscountsCard from '../Component/ProductCard/DiscountsCard';
import StarIcon from "@mui/icons-material/Star";
import { LinearProgress } from "@mui/material";
import ShowProdect from '../Component/ProductDetailspage/ShowProdect';
import { Box,  Container, Grid2, Typography } from '@mui/material'
const ratings = [
    { label: "Excellent", value: 100 },
    { label: "Good", value: 11 },
    { label: "Average", value: 3 },
    { label: "Below Average", value: 8 },
    { label: "Poor", value: 1 },
];
const totalReviews = 125;
function ProductDetailspage() {
    const { productdata } = useSelector((state) => state.cardfeatures)
    return (
        <Container> 
            <Grid2 container>
            {productdata.length>0?productdata.map((item)=>  <ShowProdect item={item} />):<>lodding</>}
                <Grid2 size={{ sm: 12, md: 12, xs: 12, xl: 12 }} pt={10}>
                    <Typography
                        component={"h4"}
                        variant='h4'
                        sx={{
                            fontWeight: "500",
                            paddingBottom: "5%"
                        }}>
                        Reviews
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap:"wrap", p: 3 }}>
                        <Box
                            sx={{
                                width: 180,
                                textAlign: "center",
                                borderRadius: 3,
                                p: 3,
                                bgcolor: "#fff",
                                boxShadow: "none !important"
                            }}
                        >
                            <Typography variant="h4" fontWeight="bold">4.8</Typography>
                            <Typography variant="body2" color="textSecondary">of {totalReviews} reviews</Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <StarIcon key={i} sx={{ color: "#FFC107", fontSize: 20 }} />
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ flex: 1, }}>
                            {ratings.map((rating, index) => (
                                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    <Typography variant="body2" sx={{ width: 120 }}>{rating.label}</Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(rating.value / totalReviews) * 100}
                                        sx={{
                                            height: 8,
                                            flex: 1,
                                            borderRadius: 5,
                                            bgcolor: "#f0f0f0",
                                            "& .MuiLinearProgress-bar": { bgcolor: "#FFA000" },
                                            mx: 2,
                                        }}
                                    />
                                    <Typography variant="body2" sx={{ width: 20 }}>{rating.value}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 12, xs: 12, xl: 12 }} pt={10} >
                    <Box component={"div"} gap={3}>
                        <Typography
                            component={"h4"}
                            variant='h4'
                            sx={{
                                fontWeight: "500",
                                paddingBottom: "5%"
                            }}>
                            Discounts up to -50%
                        </Typography>
                        <DiscountsCard />
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default ProductDetailspage