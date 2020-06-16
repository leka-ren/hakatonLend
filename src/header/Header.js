import React from 'react';

function ListItem(props) {
    return <li className="header__nav-menu-element"><a href="#" target="_blank" className="header__link">{props.item}</a></li>
}

function NavElementRender(props) {
    const listItems = props.dataNav.map(el => <ListItem key={el.toString()} item={el}/>);
    return (
    <ul className="header__nav-menu">
        {listItems}
    </ul>);
}


function Header(props) {
    return (
        <div className="header">
            <NavElementRender dataNav={props.dataNav}/>
            <button className="header__button-alert">Пожаловаться</button>
        </div>
    );
}

export default Header;