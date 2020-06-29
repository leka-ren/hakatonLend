import React from "react";

class popupImage extends React.Component {
  render() {
    return (
      <div className={this.props.value ? "popup" : "popup__disabled"}>
        <div className="popup__window">
          <div>
            <img className="popup__image"></img>
            <button
              className="button"
              onClick={() => console.log("it`s image")}
            >
              &#10006;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
