import React from "react";
import styles from "./Card.module.scss";

export default function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="./img/heart-unlike.svg" alt="Unliked" />
      </div>
      <div className={styles.cardContent}>
        <img width={133} height={112} src={props.imageUrl} alt="Phone" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{props.price} руб.</b>
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

