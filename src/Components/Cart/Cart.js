import {Fragment} from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import OrderTable from './OrderTable/OrderTable';
import TotalCheckOut from './TotalCheckOut/TotalCheckOut';
let CartItem=[
    {
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        quantity:2,
        price:16.99,
        total:16.99
    },
    {
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        quantity:1,
        price:16.99,
        total:16.99
    },
    {
        id:'1',
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        quantity:5,
        price:16.99,
        total:16.99
    },
]
const Cart = () => {
    // const total=CartItem[1].total;
    const total=0;
    const changeQuantity=(newQuantity,id)=>{
        const itemIndex=CartItem.findIndex(item=> item?.id === id);
        const oldCartItem=[...CartItem];
        const newItem=oldCartItem[itemIndex];
        newItem.quantity=newQuantity;
        oldCartItem[itemIndex]=newItem;
        CartItem=[...oldCartItem];
        console.log(newQuantity,id);
        return CartItem[itemIndex].quantity;
    }
  return (
    <Fragment>
        <ShoppingCart />
        <OrderTable CartItem={CartItem} changeQuantity={changeQuantity}/>
        <TotalCheckOut total={total}/>
    </Fragment>
  )
}

export default Cart