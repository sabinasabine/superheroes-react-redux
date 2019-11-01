import React from "react";
import PropTypes from "prop-types";
import "./style/Card.css";

const completedStyle = {
  display: "none"
};

const SelectedCard = ({ name, image, count, delCard }) => (
  <div className="card-content">
    <div className="card">
      <img src={image} alt={image} />
      <button className="btn" onClick={() => delCard(name)}>
        X
      </button>
      <span className="count" style={count === 1 ? completedStyle : null}>
        {count}
      </span>
    </div>

    <span>{name}</span>
  </div>
);

SelectedCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  count: PropTypes.number,
  delCard: PropTypes.func
};

SelectedCard.defaultProps = {
  name: "",
  image: "",
  count: 1,
  delCard: () => {}
};

export default SelectedCard;
