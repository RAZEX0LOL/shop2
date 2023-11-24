export default function App() {
  return (
    <div className="wrapper clear">
     <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="./img/logo.png"/>
        <div>
          <h3 className="text-uppercase">React Phone</h3>
          <p className="opacity-5">Магазин качественных смартфонов</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="./img/cart.svg"/>
            <span>1000 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/user.svg"/>
          </li>
        </ul>
     </header>
      <div className="content p-40">
        <div className="d-flex aling-center justify-between mb-40">
          <h1>Все смартфоны</h1>
          <div className="search-block d-flex">
            <img src="./img/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="./img/heart-unlike.svg" alt="Unliked"/>
          </div>
          <img width={133} height={112} src="./img/phones/iPhone15Plus.png" alt="Phone"/>
          <h5>Apple iPhone 15 Plus 128Gb</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>99 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/Plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="./img/phones/iPhone15Pro.jpg" alt="Phone"/>
          <h5>Apple iPhone 15 Plus 128Gb</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>99 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/Plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="./img/phones/NothingPhone2.jpg" alt="Phone"/>
          <h5>Apple iPhone 15 Plus 128Gb</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>99 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/Plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="./img/phones/SamsungS23Ultra.jpg" alt="Phone"/>
          <h5>Apple iPhone 15 Plus 128Gb</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>99 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="./img/Plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

