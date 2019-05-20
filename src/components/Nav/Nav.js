import React from 'react';
import images from '../../img/images'
import styled from 'styled-components'

const Bar = styled.div`
    background-color: #000;
`

const Nav = () => (
    <Bar>
        <img src={images.MarvelLogo} width={200} alt="Marvel"/>
    </Bar>
);

export default Nav;
