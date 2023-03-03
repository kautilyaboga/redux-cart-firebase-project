import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"

export const fetchCartData = () =>{
    return async (dispatch) =>{
        const fetchData = async () => {
            const responce = await fetch('https://react-htttp-3265d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

            if(!responce.ok){
                throw new Error('Retriving Cart Data Failed')
            }

            const data = await responce.json();

            return data;
        }

        try {
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart(cartData)) 
        } 
        
        catch (error) {
            dispatch(
                uiActions.setNotification({
                  status: "error",
                  title: "Error...",
                  message: error.message,
                })
              );
        }

    }
}

export const sendCartData = (cart) =>{
    return async (dispatch)=>{
        
      dispatch(uiActions.setNotification({
        status: 'pending',
        title: 'Sending...', 
        message: 'Sending Cart Data!' ,
      }))  
      
      const sendRequest = async() =>{
        const responce = await fetch('https://react-htttp-3265d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method : 'PUT',
          body : JSON.stringify({
            items : cart.items,
            totalQuantity : cart.totalQuantity,
          })
        });
        
        if (!responce.ok) {
          throw new Error('Sending Cart Data Failed')
        }
      }

      try {
        await sendRequest();

        dispatch(
          uiActions.setNotification({
            status: "success",
            title: "Success...",
            message: "Sent Cart Data Successfully!",
          })
        );
      } catch (error) {

        dispatch(
          uiActions.setNotification({
            status: "error",
            title: "Error...",
            message: "Sent Cart Data Failed!",
          })
        );
      }

    }
}