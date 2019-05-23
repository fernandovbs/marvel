import React, { Component } from 'react'
import styled from 'styled-components'

function getWidthGrid(value) {
    if (!value) return;

    let width = value / 12 * 100;
    return `width: ${width}%;`;
}

export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }    
`

export const Column = styled.div`
    display: inline-block;
    vertical-align: top;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        ${({ xs }) => xs && getWidthGrid(xs)};
    }

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthGrid(sm)};
    }
    
    @media only screen and (min-width: 1000px) {
        ${({ md }) => md && getWidthGrid(md)};
    }    
`

