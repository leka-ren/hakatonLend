import React from 'react';

function ContentCover(props) {
    return (
        <div className="cover__text-content">
            <h1 className="cover__title">{props.nameTitle[0]}</h1>
            <p className="cover__discription">{props.nameTitle[1]}</p>
        </div>
    )
}

export default ContentCover;