import React from "react";
import styles from "./Card.module.scss";

export default function Card({ onFavorite, title, imageUrl, price, onPlus, onRemove, id, cartItems }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);


  const onClickPlus = () => {
    onPlus({title,imageUrl,price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite=()=>{
    setIsFavorite(!isFavorite);
  }


  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "./img/heart-like.svg" : "./img/heart-unlike.svg"} alt="Unliked" />
      </div>
      <div className={styles.cardContent}>
        <img width={133} height={112} src={imageUrl} alt="Phone" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
}

