import React from "react";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  isActiveChange() {
    this.props.close(false);
  }

  render() {
    return (
      <div className={this.props.value ? "popup" : "popup__disabled"}>
        <div className="popup__window">
          <h2 className="alert__title">Важа жалоба</h2>
          <form className="alert__from">
            <textarea
              className="alert__input"
              type="text"
              placeholder="Введиде сообщение"
            />
            <button
              className="alert__button"
              type="submit"
              onClick={() => alert("kek")}
            >
              Отправить
            </button>
          </form>
          <button className="button" onClick={() => this.isActiveChange()}>
            &#10006;
          </button>
        </div>
      </div>
    );
  }
}

export default Alert;
