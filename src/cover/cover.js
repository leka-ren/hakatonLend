import React from "react";
import coverImage from "../images/intro-image.jpeg";
import ContentCover from "../ui/title";

const nameTitle = ["Куда я поеду", "Куда я поеду сразу, как можно будет куда-то поехать"];

function ImageCover() {
  return (
    <div className="cover__image-content">
      <img
        className="cover__image"
        src={coverImage}
        alt="Иллюстрация крыла самолета в полете"
      />
    </div>
  );
}

function Cover() {
  return (
    <div className="cover">
      <ContentCover nameTitle={nameTitle} />
      <ImageCover />
    </div>
  );
}

export default Cover;
