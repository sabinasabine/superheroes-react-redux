import React from "react";
import PropTypes from "prop-types";
import "./style/Card.css";

const Card = ({ name, image, addCard }) => (
  <div className="card-content">
    <div className="card">
      <img src={image} alt={image} onClick={() => addCard(name, image)} />
    </div>

    <span>{name}</span>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  addCard: PropTypes.func
};

Card.defaultProps = {
  name: "",
  image: "",
  addCard: () => {}
};

export default Card;
