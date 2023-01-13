import Modal from '../UI/Modal'
import classes from './Cart.module.css'
const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-itmes']}>
      {[{ id: 'c1', name: 'seeri', amout: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>총 금액</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>닫기</button>
        <button className={classes.button}>주문 </button>
        {/* 우선은 더미데이터로 렌더링  */}
      </div>
    </Modal>
  )
}

export default Cart
