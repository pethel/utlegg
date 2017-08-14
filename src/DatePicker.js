import React from 'react'
import ReactDatePicker  from 'react-native-datepicker'
import PropTypes from 'prop-types';

const DatePicker = ({ onChange, date }) =>
  <ReactDatePicker
    style={{width: 200}}
    date={date}
    mode="date"
    placeholder="select date"
    format="YYYY-MM-DD"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0
      },
      dateInput: {
        marginLeft: 36
      }
    }}
    onDateChange={(newDate) => onChange(newDate)}
  />;

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired
};

export default DatePicker;
