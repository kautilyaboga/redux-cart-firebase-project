import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    isCartOpen : false,
    notification : null,
}

const uiSlice = createSlice({
    name : 'ui',
    initialState : initialUIState,
    reducers : {
        toggleCart (state){
            state.isCartOpen = !state.isCartOpen;
        },
        setNotification (state,action){
            const notificationData = action.payload
            state.notification = {
              status: notificationData.status,
              title: notificationData.title,
              message: notificationData.message,
            };
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice.reducer;