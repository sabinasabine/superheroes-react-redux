import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./style/CardList.css";

function CardList({ cardsList, searchValue, addCard }) {
  if (cardsList.length > 0) {
    let cardsArray = [];
    cardsList.forEach(card => {
      if (card.name.toLowerCase().includes(searchValue)) {
        cardsArray.push(
          <Card
            key={card.name}
            image={card.image}
            name={card.name}
            count={card.count}
            addCard={addCard}
          />
        );
      }
    });
    return <div className="wrap-cardsGallery">{cardsArray}</div>;
  } else {
    return (
      <div className="tc">
        <h1>LOADING...</h1>
      </div>
    );
  }
}

CardList.propTypes = {
  cardsList: PropTypes.array
};

CardList.defaultProps = {
  cardsList: []
};

export default CardList;
