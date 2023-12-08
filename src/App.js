import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";

const itemsUrl = 'http://localhost:3001/items';
const cartUrl = 'http://localhost:3001/cart';
const favoriteUrl='http://localhost:3001/favorites';


export default function App() {
  const [items,setItems]= React.useState([]);
  const [cartItems,setCartItems]= React.useState([]);
  const [favorites,setFavorites] = React.useState([]);
  const [searchValue,setSearchValue]= React.useState('');
  const [cartOpened, setCartOpened]=React.useState(false);

 React.useEffect(()=>{
   axios.get(itemsUrl).then(res => {
     setItems(res.data);
   });
   axios.get(cartUrl).then(res => {
     setCartItems(res.data);
   });
 },[]);

  const onAddToCart = (obj) => {
    const itemInCart = cartItems.find(item => item.id === obj.id);
    if (itemInCart) {
      return;
    }

    axios.post(cartUrl, obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`${cartUrl}/${id}`)
    .then(() => {
      setCartItems((prev) => prev.filter(item => item.id !== id));
    })
    .catch((error) => {
      console.error('Error deleting item from cart:', error);
    });
  };
  const onAddToFavorite = (obj) => {
    const itemInFavorite = favorites.find(item => item.id === obj.id);
    if (itemInFavorite) {
      return;
    }

    axios.post(favoriteUrl, obj);
    setFavorites((prev) => [...prev, obj]);
  };

 const onChangeSearchInput=(event)=>{
   setSearchValue(event.target.value);
 }



return (
    <div className="wrapper clear">
      {cartOpened &&
      <Drawer
        items={cartItems}
        onClose={()=>setCartOpened(false)}
        onRemove={onRemoveItem}
      />}
      <Header onClickCart={()=>setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex aling-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}" ` : 'Все смартфоны'}</h1>
          <div className="search-block d-flex">
            <img src="./img/Search.svg" alt="Search"/>
            {searchValue && (
              <img
                onClick={()=>setSearchValue('')}
                className="clear cu-p"
                src="./img/btn-remove.svg"
                alt="Clear"/>
                )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                onRemove={(id) => onRemoveItem(id)}
                cartItems={cartItems}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

