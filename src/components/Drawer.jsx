export default function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">
        <div className="drawer"> 
          <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" src="./img/btn-remove.svg" alt="Remove"/></h2>

          <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            {/* <img className="mr-20" width={70} height={70} src="./img/phones/iPhone15Plus.png" alt="iPhone15Plus"/> */}
            <div style={{backgroundImage: 'url(./img/phones/iPhone15Plus.png)'}} className="cartItemImg"></div>


            <div className="mr-20 flex">
              <p className="mb-5">Apple iPhone 15 Plus 128Gb</p>
              <b>99 999 руб.</b>
            </div>
            <img className="removeBtn" src="./img/btn-remove.svg" alt="Remove"/>

          </div>
          <div className="cartItem d-flex align-center mb-20">
            {/* <img className="mr-20" width={70} height={70} src="./img/phones/iPhone15Plus.png" alt="iPhone15Plus"/> */}
            <div style={{backgroundImage: 'url(./img/phones/iPhone15Plus.png)'}} className="cartItemImg"></div>


            <div className="mr-20 flex">
              <p className="mb-5">Apple iPhone 15 Plus 128Gb</p>
              <b>99 999 руб.</b>
            </div>
            <img className="removeBtn" src="./img/btn-remove.svg" alt="Remove"/>

          </div>
          
          </div>

          <div className="cartTotalBlock">
              <ul>
                <li >
                  <span>Итого:</span>
                  <div></div>
                  <b>199 998 руб.</b>
                </li>
                <li >
                  <span>Коммиссия 5%:</span>
                  <div></div>
                  <b>9 999 руб.</b>
                </li>
              </ul>
            <button className="blueButton">Оформить заказ<img src="./img/arrow.svg" alt="Arrow"/></button>
          </div>
        </div>
      </div>
    );
}