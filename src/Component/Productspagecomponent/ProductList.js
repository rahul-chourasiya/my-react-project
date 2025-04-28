import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../redux/slices/features/productSlice'; 
import { Stack ,} from '@mui/material';
import PaginationComponent from './Pagination';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';


function ProductList() {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.product);
    // const { productcategory } = useSelector((state) => state.product);
  
    useEffect(() => {
      dispatch(fetchProduct());
    }, [dispatch]);
  
    if (loading) return <ProductCardSkeleton/>  ;
    if (error) return <div className="error">Error: {error}</div>;
    

    // function profilter (item){
    //   const newdata = productcategory.length>=0?productcategory.includes(item.brand) : productcategory.includes(item);
    //   return newdata
    // }
    // profilter()
    // const newfilter = product.filter(profilter)
    // console.log("pagin")
    // console.log(productcategory)
    // console.log(newfilter)
    // console.log("hello")
  return (
    <Stack
      direction={"row"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
     <PaginationComponent   product={ product}  /> 
    </Stack>
  )
}

export default ProductList