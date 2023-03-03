import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items : [],
    totalQuantity: 0,
    changed : false,
}

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialCartState,
    reducers : {
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items || [];
        },
        addItemToCart(state,action){
            const newItem = action.payload;
            const exisitingItem = state?.items?.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            console.log(exisitingItem?.quantity);
            if(!exisitingItem){
                state.items.push({
                  id: newItem.id,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price,
                  name : newItem.title,
                });
            }
            else{
                exisitingItem.quantity++;
                exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state,action){
            const removeItem = action.payload;
            state.totalQuantity--;
            const exisitingItem = state.items.find(item => item.id === removeItem.id);
            if (exisitingItem) {
                if(exisitingItem.quantity !== 1){
                    exisitingItem.quantity--;
                    state.changed = true;
                    exisitingItem.totalPrice = exisitingItem.totalPrice - exisitingItem.price;
                } 
                else{
                     state.items = state.items.filter(item => item.id !== removeItem.id);
                    }
            }

            else{throw new Error('Something is Wrong')}
        },
    }
})



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
