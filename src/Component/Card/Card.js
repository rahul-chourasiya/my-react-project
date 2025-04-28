import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import {  viewProduct } from '../../redux/slices/CardFeatures/CardFeaturesSlice';
import { Link } from 'react-router';

function ProductCard({ item }) {
    const  dispatch =useDispatch()
    const Prodectdetels = ()=>{
        dispatch(viewProduct([item]))
    }
    console.log("item",item)
    return (
        <Card sx={{ 
            maxWidth: 245, 
            padding: "16px", 
            backgroundColor: "#F6F6F6", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between" 
        }}>
            <Stack direction={"row"}  sx={{ display: "flex", justifyContent: "flex-end",  }}>
            <IconButton color="secondary" aria-label="like">
                <FavoriteBorderIcon />
            </IconButton>
            </Stack>
            <CardMedia
                sx={{ 
                    height: 160, 
                    width: 160, 
                    display: "flex", 
                    justifyContent: "center", 
                    margin: "auto" 
                }}
                image={item.image}
                title={item.title}
            />
            <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontSize: "medium", 
                    fontWeight: "500", 
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    whiteSpace: 'normal', 
                    width: '200px', 
                    margin: '0 auto' 
                }}>
                    {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', fontWeight: "600", fontSize: "30px",paddingTop:"10%" }}>
                    ${item.price}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex",justifyContent:"center"}}>
                <Button
                    size="small"
                    sx={{
                        height: "48px",
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px 62px",
                        textAlign: "center"
                    }}
                    onClick={Prodectdetels}
                >
                    <Link style={{textDecoration:"none", color:"white"}} to="/ProductDetailspage"  >Shop Now</Link> 
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;
