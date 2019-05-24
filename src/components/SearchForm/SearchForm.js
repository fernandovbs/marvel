import React, { Component, Fragment } from "react";
import styled from 'styled-components'
import types from '../../redux/characters/types';
import { connect } from 'react-redux';

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
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: types.REQUEST,
      searchString: this.state.searchString
    });
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value })
    this.props.dispatch({
      type: types.REQUEST,
      searchString: this.state.searchString
    });
  }

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
            onChange={this.handleChange}
            defaultValue={defaultValue}
            value={this.state.searchString}
            {...extraProps}
          />
        </SearchContainer>
      </Fragment>
    );
  }
}

export default connect(null, null)(SearchForm);
