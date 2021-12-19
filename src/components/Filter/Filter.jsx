import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {changeFilter} from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const filterHandleChange = e =>
    dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name{' '}
      <input
        className={s.input}
        type="text"
        name="filter"
        //value={value}
        onChange={filterHandleChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
