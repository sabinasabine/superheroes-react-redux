import React from "react";
import PropTypes from "prop-types";
import SelectedCard from "./SelectedCard";

import "./style/CardList.css";

const SelectedList = ({ cardsList, delCard }) => (
  <div className="wrap-cardsGallery">
    {cardsList.map(({ name, image, count }) => (
      <SelectedCard
        key={name}
        name={name}
        image={image}
        count={count}
        delCard={delCard}
      />
    ))}
  </div>
);

SelectedList.propTypes = {
  cardsList: PropTypes.array,
  delCard: PropTypes.func
};

SelectedList.defaultProps = {
  cardsList: [],
  delCard: () => {}
};

export default SelectedList;
