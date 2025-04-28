import { createSlice } from "@reduxjs/toolkit";
import { filterproduct } from "../features/productSlice";


const initialState = {
    filterproduct:[],
    cardproductdata:[]
}
const cardfeaturesSlice = createSlice({
    name:"cardfeatures",
    initialState,
    reducers:{
        viewProduct: (state, action) => {  
           state.productdata = [...action.payload]
          },
        AddtoCardFunction:(state, action)=>{
         state.cardproductdata = [...state.cardproductdata, ...action.payload]
        },
        removeproduct:(state, action)=>{
           const newdata = state.cardproductdata.filter((item)=> item.id!==action.payload.id)
           state.cardproductdata = newdata
        },
       
    }
   
})

export const { viewProduct,productdata,AddtoCardFunction ,removeproduct,} = cardfeaturesSlice.actions

export default cardfeaturesSlice.reducer