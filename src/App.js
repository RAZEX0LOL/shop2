export default function App() {
  return (
    <div className="wrapper clear">
     <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="./img/logo.png"/>
        <div>
          <h3 className="text-uppercase">React Phone</h3>
          <p>Магазин качественных смартфонов</p>
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
        <h1>Все смартфоны</h1>
        ...............
      </div>
    </div>
  );
}

