import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import IconClose from './icon-close';
import suggestedEntries from './suggested-entries';
import * as strings from './strings';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.renderInputComponent = this.renderInputComponent.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      value: '',
      suggestions: [],
    });
  }

  getSuggestionValue(suggestion) {
    this.props.search(suggestion);
    return suggestion;
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : suggestedEntries.filter(entry =>
      entry.toLowerCase().includes(inputValue),
    );
  }

  renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion}
      </div>
    );
  }

  renderInputComponent(inputProps) {
    return (
      <div>
        <input id="search-custom-input" {...inputProps} />
        {
          this.state.value
          &&
          <IconClose
            className="icon-close"
            clearInput={this.onSuggestionsClearRequested}
          />
        }
      </div>
    );
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: strings.INPUT_PLACEHOLDER,
      value,
      onChange: this.onChange,
    };

    return (
      <div className="search">
        <form role="search" className="search_autosuggest">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            renderInputComponent={this.renderInputComponent}
            inputProps={inputProps}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

export default Search;
