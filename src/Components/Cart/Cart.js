import {Fragment} from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import OrderTable from './OrderTable/OrderTable';
import TotalCheckOut from './TotalCheckOut/TotalCheckOut';
import {useSelector} from 'react-redux';

const Cart = () => {
    const {total}=useSelector(state=>state.cart);
  return (
    <Fragment>
        <ShoppingCart />
        <OrderTable />
        <TotalCheckOut total={total}/>
    </Fragment>
  )
}

export default Cart