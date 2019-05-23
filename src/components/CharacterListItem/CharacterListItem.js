import React from "react";
import Button from "../Button/Button";
import { Column } from '../../styles'
import styled from 'styled-components'
const Thumbnail = styled.div`
  width: 100%;
  height: auto;
`
const ThumbnailImg = styled.img`
  width: 100%;
`

const CharacterListItem = ({character}) => {
  const thumbnailUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`
  return (
  <Column xs={12} sm={6} md={4} >
    <h1> {character.name} </h1>
    <Thumbnail>
      <ThumbnailImg src={thumbnailUrl} />
    </Thumbnail>
    <p> {character.description} </p>
    <Button />
  </Column>
)};

export default CharacterListItem;
