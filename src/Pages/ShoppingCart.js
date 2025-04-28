import { Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartCard from '../Component/AddToCard/ShoppingCartCard'
import OrderSummary from '../Component/AddToCard/OrderSummary'
import { useSelector } from 'react-redux'

function ShoppingCart() {
  const { cardproductdata } = useSelector((state) => state.cardfeatures)
  return (
    <Container maxWidth={false} >
        <Grid2 container pt={12}> 
            <Grid2 size={{ sm: 12, md: 6, xs: 12, xl: 6}} sx={{gap:"20px"}}>
              <Typography component={"h3"} variant='h5'sx={{fontWeight:"600" ,padding:"0px 10% 7%"}}>Shopping Cart</Typography>
                {cardproductdata.map((item, index)=>  <ShoppingCartCard item={item} index={index}/>)}
            </Grid2>
            <Grid2 size={{ sm: 12, md: 6, xs: 12, xl: 6}} >
                <OrderSummary />
            </Grid2>
        </Grid2>
    </Container>
  )
}

export default ShoppingCart