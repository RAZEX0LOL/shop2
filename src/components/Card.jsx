export default function Card(){
    return(
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
    );
}