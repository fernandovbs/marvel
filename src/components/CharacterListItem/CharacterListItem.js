import React from "react";
import Button from "../Button/Button";

const CharacterListItem = ({character}) => {
  const thumbnail = `${character.thumbnail.path}.${character.thumbnail.extension}`
  return (
  <div>
    <h1> {character.name} </h1>
    <img src={thumbnail} />
    <p> {character.description} </p>
  </div>
)};

export default CharacterListItem;
