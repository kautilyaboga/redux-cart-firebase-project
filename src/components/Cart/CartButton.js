import classes from './CartButton.module.css';
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuanitity = useSelector(state => state.cart.totalQuantity)

  const onCartViewHandler = event => {
    event.preventDefault();
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={onCartViewHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuanitity}</span>
    </button>
  );
};

export default CartButton;
