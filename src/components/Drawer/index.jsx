import React, {useState} from "react";
import Info from "./../Info";
import {useCart} from "../../hooks/useCart";
import axios from "axios";
import styles from "./Drawer.module.scss";
function Drawer({ onClose, onRemove, items = [],opened }) {
  const {cartItems, setCartItems, totalPrice} = useCart();
  const [orderId,setOrderId]=useState(null);
  const [isOrderComplete,setIsOrderComplete]= React.useState(false);
  const [isLoading,setIsLoading]= React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const productIds = cartItems.map((item) => Number(item.id));
      const { data } = await axios.post('http://localhost:3001/orders', { productIds });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      cartItems.forEach(async (item) => {
        await axios.delete(`http://localhost:3001/cart/${item.id}`);
      });
    } catch (error) {
      alert('Не удалось оформить заказ! Повторите попытку позже');
    }
    setIsLoading(false);
  };



  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
        </h2>
        {items.length > 0 ? (
          <div className={"d-flex flex-column flex"}>
            <div className="items" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
                ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Комиссия 5%:</span>
                  <div></div>
                  <b> {Math.ceil(totalPrice*0.05)} руб. </b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className="blueButton">
              Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
            </button>
            </div>
          </div>
          ) : (
            <Info
              title={isOrderComplete ? "Заказ офрмлен" : "Корзина пустая"}
              description={isOrderComplete ? `Ваш заказ #${orderId} передан на сборку`:"Добавьте хотя бы один товар, чтобы сделать заказ."}
              image={isOrderComplete ? "img/complete-order.svg":"img/empty-cart.svg"}
            />
            )}
      </div>
    </div>
    );
}
export default Drawer;