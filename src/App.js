import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";

const arr=[
  {
    title:'Apple iPhone 15 Plus 128GB',
    price: 99999,
    imageUrl: './img/phones/iPhone15Plus.png'
  },
  {
    title:'Apple iPhone 15 Pro 512GB',
    price: 159999,
    imageUrl: './img/phones/iPhone15Pro.png'
  },
  {
    title:'Nothing Phone 2 256GB',
    price: 59999,
    imageUrl: './img/phones/NothingPhone2.png'
  },
  {
    title:'Samsung S23 Ultra 512GB',
    price: 119999,
    imageUrl: './img/phones/SamsungS23Ultra.png'
  },
  {
    title:'',
    price: 119999,
    imageUrl: './img/phones/SamsungS23Ultra.png'
  },
];

export default function App() {
  const [cartOpened, setCartOpened]=React.useState(false);



  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex aling-center justify-between mb-40">
          <h1>Все смартфоны</h1>
          <div className="search-block d-flex">
            <img src="./img/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj)=>(
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
          {/* <Card title="Apple iPhone 15 Pro 512Gb" price={159999} imageUrl="./img/phones/iPhone15Pro.jpg"/> */}
        </div>
      </div>
    </div>
  );
}

