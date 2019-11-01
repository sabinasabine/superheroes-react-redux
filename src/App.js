import React, { Fragment } from "react";
import { connect } from "react-redux";
import CardList from "./component/CardList";
import SelectedList from "./component/SelectedList";
import Search from "./component/Search";
import { addCard, delCard } from "./actions/actionCreator";

class App extends React.Component {
  state = {
    text: ""
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value.toLowerCase()
    });
  };

  render() {
    const { text } = this.state;
    const {
      marvelGallery,
      dcGallery,
      selectCards,
      delCard,
      addCard
    } = this.props;

    return (
      <Fragment>
        <SelectedList cardsList={selectCards} delCard={delCard} />
        <Search onChange={this.handleInputChange} value={text} />
        <CardList
          cardsList={marvelGallery}
          addCard={addCard}
          searchValue={text}
        />
        <CardList cardsList={dcGallery} addCard={addCard} searchValue={text} />
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    marvelGallery: state.marvelGallery,
    dcGallery: state.dcGallery,
    selectCards: state.selectCards
  }),
  { addCard, delCard }
)(App);
