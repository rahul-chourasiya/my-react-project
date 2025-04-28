import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: {},
    cardprice:[],
    newprice:[],
};
const addtoCardFeatures = createSlice({
    name:"addtocard",
    initialState,
    reducers:{
        addprice:(state, action)=>{
        state.cardprice.push(action.payload)
        state.newprice = state.cardprice.reduce((total, item)=> total + item, 0)   
        },
        incrementcount: (state, action) => {
            const { id, price } = action.payload;
            if (!state.cartItems[id]) {
                state.cartItems[id] = 2;
                state.cardprice.push(price);
            } else {
                state.cartItems[id] += 1; 
                state.cardprice.push(price);
            }
            state.newprice = state.cardprice.reduce((total, item) => total + item, 0);
        },
        decrementcount: (state, action) => {
            const { id, price } = action.payload;
            if (state.cartItems[id]) {
                if (state.cartItems[id] > 2) {
                    state.cartItems[id] -= 1; 
                    const index = state.cardprice.indexOf(price);
                    if (index > -1) {
                        state.cardprice.splice(index, 1); 
                    }
                } else {
                    delete state.cartItems[id];
                    const index = state.cardprice.indexOf(price);
                    if (index > -1) {
                        state.cardprice.splice(index, 1); 
                    }
                }
                state.newprice = state.cardprice.reduce((total, item) => total + item, 0);
            }
        },
        priceremoveproduct:(state, action)=>{
        let remeveprice = state.cardprice.filter((item)=> item !== action.payload.price )   
        state.cardprice = remeveprice
        state.newprice = state.cardprice.reduce((total, item)=> total + item, 0)  
        }
    }
})
export const { incrementcount, decrementcount,addprice ,priceremoveproduct} = addtoCardFeatures.actions
export default addtoCardFeatures.reducer