import React from 'react'
import {  Container, Grid2} from '@mui/material'
import SidebarFilter from '../Component/Productspagecomponent/SidebarFilter'
import ProductList from '../Component/Productspagecomponent/ProductList'

function Productspage() {
   
    return (
        <Container maxWidth={false} >
            <Grid2 container gap={8}>
                <Grid2 size={{ sm: 12, md: 3, xs: 12, xl: 3 }} mt={10}>
                 <SidebarFilter/>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 8, xs: 12, xl: 8 }} mt={10}>
                <ProductList/>
                </Grid2>

            </Grid2>
        </Container>
    )
}

export default Productspage