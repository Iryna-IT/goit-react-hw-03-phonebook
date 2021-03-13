import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

class Filter extends Component {
  state = {
    filter: '',
  };

  static defaultProps = {
    contactsListToShow: [],
    filter: '',
  };

  static propTypes = {
    contactsListToShow: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    filter: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { onSearch } = this.props;
    const { filter } = this.state;
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });

    onSearch(filter);
  };

  render() {
    return (
      <form className={styles.form_search}>
        <label htmlFor="filter" className={styles.label_search}>
          Find contacts by name
        </label>
        <input
          type="text"
          name="filter"
          className={styles.input_search}
          placeholder="Enter the name"
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}
export default Filter;
