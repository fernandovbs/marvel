import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const DetailsButton = styled.a`
    display: inline-block;
    line-height: 2em;
    padding: 5px 10px;
    border-radius: 5px;
    width: 100%;
    background-color: red;
    color: #FFF;
    text-align:center;
    box-sizing: border-box;
`

const Button = (props) => (
    <DetailsButton onClick={() => console.log("props.dispatch({type: types.GET_CHARACTER})")}>Detalhes</DetailsButton>
)

export default connect(
  null,
  null
)(Button);
