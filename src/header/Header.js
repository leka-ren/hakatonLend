import React from "react";
import Alert from "../popup/popupAlert";

function ListItem(props) {
  return (
    <li className="header__nav-menu-element">
      {/* eslint-disable-next-line */}
      <a href="#" target="_blank" className="header__link">
        {props.item}
      </a>
    </li>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.ButtonAlert = this.ButtonAlert.bind(this);
    this.activeState = this.activeState.bind(this);
    this.state = {
      value: false,
    };
  }
  activeState(boolVal) {
    this.setState({
      value: boolVal,
    });
  }

  NavElementRender(props) {
    const listItems = props.map((el) => (
      <ListItem key={el.toString()} item={el} />
    ));
    return <ul className="header__nav-menu">{listItems}</ul>;
  }

  ButtonAlert() {
    return (
      <button className="header__button-alert" onClick={() => this.activeState(true)}>
        Пожаловаться
      </button>
    );
  }

  render() {
    return (
      <div className="header">
        {this.NavElementRender(this.props.dataNav)}
        {this.ButtonAlert()}
        <Alert value={this.state.value} close={this.activeState} />
      </div>
    );
  }
}

export default Header;
