import Card from "./components/Card.jsx";
import Drawer from "./components/Drawer.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex aling-center justify-between mb-40">
          <h1>Все смартфоны</h1>
          <div className="search-block d-flex">
            <img src="./img/Search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
    </div>
  );
}

