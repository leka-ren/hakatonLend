import React from "react";
import ContentCover from "../ui/title";
import quoteData from "./quoteData";

const titleDataQuote = ["Люди", "Что говорят и говорили люди о путешествиях"];

function Card(props) {
  return (
    <div className="quote__card">
      <h3 className="quote__title-card">{props.el.name}</h3>
      <p className="quote__discription-card">{props.el.quote}</p>
    </div>
  );
}

function CardList(props) {
  const cardList = props.quoteData.map((el) => <Card key={el.id} el={el} />);
  return <div className="quote__cards">{cardList}</div>;
}

function Quote() {
  return (
    <div className="quote">
      <ContentCover nameTitle={titleDataQuote} />
      <CardList quoteData={quoteData} />
    </div>
  );
}

export default Quote;
