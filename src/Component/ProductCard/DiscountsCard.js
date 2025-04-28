import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/slices/features/productSlice'; 
import { Stack } from '@mui/material';
import Card from '../Card/Card';


function DiscountsCard() {
    const dispatch = useDispatch();
      const { product, loading, error } = useSelector((state) => state.product);
    
      useEffect(() => {
        dispatch(fetchProduct());
      }, [dispatch]);
    
      if (loading) return <div>Loading... product</div>;
      if (error) return <div className="error">Error: {error}</div>;
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        pb:"80px"
      }}
    >
      {product.slice(20,24).map((item, index) => {
        return (
          <Card key={index} item={item} /> 
        );
      })}
    </Stack>
  )
}

export default DiscountsCard