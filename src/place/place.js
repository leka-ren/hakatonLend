import React from "react";

function PlaceDisRender(props) {
  return <p className="places__description">{props.el}</p>;
}

function PlaceListElem(props) {
  const index = props.index;
  const disArr = props.el.discription;
  const dis = disArr.map((el) => <PlaceDisRender key={el.toString()} el={el} />);
  return (
    <div
      className="places__card"
      style={
        index % 2 !== 0
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
    >
      <div
        className="places__image"
        style={{ backgroundImage: `url(${props.el.image})` }}
        alt="Фото природы"
      />
      <div className="places__text-content">
        <h2 className="places__title">{props.el.place}</h2>
        <div className="places__descriptions-text">{dis}</div>
      </div>
    </div>
  );
}

function Places(props) {
  const PlaceList = props.placeData.map((el, index) => (
    <PlaceListElem key={el.id} el={el} index={index} />
  ));
  return <div className="places">{PlaceList}</div>;
}

export default Places;
