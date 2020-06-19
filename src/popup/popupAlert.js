import React from "react";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.setStateActive = this.setStateActive.bind(this);
    this.state = {
        value: this.props.value()
    }
  }
  setStateActive() {
      this.setState({value: !this.props.value()})
  }
  render() {
    return (
      <div className={this.state.value ? "alert" : "alert__disabled"}>
        <div className="alert__window">
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
          <button className="button" onClick={this.setStateActive}>
            &#10006;
          </button>
        </div>
      </div>
    );
  }
}

export default Alert;
