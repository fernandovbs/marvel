import React, { Component, Fragment } from "react";
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: block;
  max-width: 500px;
  margin: 20px auto;
`

const Input = styled.input`
  line-height:2em;
  width: ${'100%'};
`

class SearchForm extends Component {
  state = {};

  render() {
    const {
      input,
      id,
      type,
      placeholder,
      disabled,
      className,
      maxLength,
      onKeyUp,
      onChange,
      label,
      isLoading,
      defaultValue,
      ...extraProps
    } = this.props;

    return (
      <Fragment>
        <SearchContainer>
          <Input
            {...input}
            id={id}
            type={type || "text"}
            placeholder={placeholder}
            disabled={disabled}
            className={className}
            maxLength={maxLength}
            onKeyUp={onKeyUp}
            defaultValue={defaultValue}
            {...extraProps}
          />
        </SearchContainer>
      </Fragment>
    );
  }
}

export default SearchForm;
