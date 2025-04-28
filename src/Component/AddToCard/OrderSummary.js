import { FormControl,  FormLabel, Stack, TextField, Typography, Button ,InputAdornment} from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';

function OrderSummary() {
  const newprice = useSelector((state) => state.addtocard.newprice);
    return (
        <Stack
        direction={"column"}
        sx={{
          padding: window.innerWidth < 760 ? "10px 10px" :"56px 64px",
          gap: "40px"
        }}
      >
        <Typography
          component={"h1"}
          variant="h5"
          sx={{
            fontSize: "17px",
            fontWeight: "600",
          }}
        >
          Order Summary
        </Typography>
  
        <Stack direction="column" spacing={2}>
          <FormControl fullWidth>
            <FormLabel>Discount code / Promo code</FormLabel>
            <TextField label="Code" variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel>Your bonus card number</FormLabel>
            <TextField
              variant="outlined"
              placeholder="Enter Card Number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="outlined" sx={{color:"black",border:"1px solid black", fontSize:"13px", fontWeight:"600"}}>Apply</Button>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Stack>
        <Stack direction={"column"} sx={{gap:"20px"}}>
            <Stack direction={"row"}>
                <Typography component={"span"} sx={{marginRight:"auto", fontWeight:"600"}}>Subtotal</Typography>
                <Typography component={"span"} sx={{ fontWeight:"600"}}>$111</Typography>
            </Stack>
            <Stack direction={"row"}>
                <Typography component={"span"} sx={{marginRight:"auto", fontWeight:"400"}}>Estimated Tax</Typography>
                <Typography component={"span"} sx={{ fontWeight:"600"}}>$412</Typography>
            </Stack>
            <Stack direction={"row"}>
                <Typography component={"span"} sx={{marginRight:"auto", fontWeight:"400"}}>Estimated shipping & Handling</Typography>
                <Typography component={"span"} sx={{ fontWeight:"600"}}>$412</Typography>
            </Stack>
            <Stack direction={"row"}>
                <Typography component={"span"} sx={{marginRight:"auto", fontWeight:"600"}}>Total</Typography>
                <Typography component={"span"} sx={{fontWeight:"600"}}>${ newprice.length!==0?newprice:0}</Typography>
            </Stack>
        </Stack>
        <Stack direction={"row"} sx={{height:"56px",width:"100%"}}>
            <Button sx={{backgroundColor:"black", width:"100%" , color:"white", fontSize:"15px", fontWeight:"600"}}>Checkout</Button>
        </Stack>
      </Stack>
    )
}

export default OrderSummary