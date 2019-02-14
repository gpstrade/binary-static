import PropTypes                   from 'prop-types';
import React                       from 'react';
import { Observer }                from 'mobx-react';
import { hasIntradayDurationUnit } from 'Stores/Modules/Trading/Helpers/duration';
import {
    isTimeValid,
    setTime,
    toMoment }                     from 'Utils/Date';
import DatePicker                  from './date_picker.jsx';

const DatePickerWrapper = ({
    is_nativepicker,
    mode,
    name,
    server_time,
}) => {
    const { expiry_date, duration_min_max, duration_units_list,
        start_time, start_date, expiry_type, onChange, symbol } = this.props;
    const moment_expiry      = toMoment(expiry_date || server_time);
    let is_24_hours_contract = false;
    let max_date_duration,
        min_date_expiry,
        is_read_only;

    if (expiry_type === 'endtime') {
        const max_daily_duration = duration_min_max.daily ? duration_min_max.daily.max : 365 * 24 * 3600;
        const moment_contract_start_date_time =
            setTime(toMoment(start_date || server_time), (isTimeValid(start_time) ? start_time : server_time.format('HH:mm')));
        const has_intraday_duration_unit = hasIntradayDurationUnit(duration_units_list);

        // When the contract start is forwarding or is not forwarding but the expiry date is as same as start date, the contract should be expired within 24 hours
        is_24_hours_contract = (!!start_date || moment_expiry.isSame(toMoment(server_time), 'day')) && has_intraday_duration_unit;
        is_read_only = true;

        if (is_24_hours_contract) {
            min_date_expiry = moment_contract_start_date_time.clone().startOf('day');
            max_date_duration = moment_contract_start_date_time.clone().add(
                start_date ? 24 * 3600 : (max_daily_duration), 'second');
        } else {
            min_date_expiry = moment_contract_start_date_time.clone().startOf('day');
            max_date_duration = moment_contract_start_date_time.clone().add(max_daily_duration, 'second');

            if (!has_intraday_duration_unit) {
                min_date_expiry.add(1, 'day');
            }
        }
    } else {
        const moment_contract_start_date_time = setTime(toMoment(start_date || server_time),
            (isTimeValid(start_time) ? start_time : server_time.format('HH:mm')));

        is_read_only = false;
        min_date_expiry = moment_contract_start_date_time.clone().add(duration_min_max.daily.min, 'second');
        max_date_duration = moment_contract_start_date_time.clone().add(duration_min_max.daily.max, 'second');
    }

    return (
        <DatePicker
            alignment='left'
            disable_year_selector
            disable_trading_events
            has_today_btn
            label={duration_units_list.length === 1 ? duration_units_list[0].text : null}
            is_nativepicker={is_nativepicker}
            is_read_only={is_read_only}
            mode={mode}
            name={name}
            onChange={onChange}
            min_date={min_date_expiry}
            max_date={max_date_duration}
            start_date={start_date}
            underlying={symbol}
            value={expiry_date}
        />
    );
};

DatePickerWrapper.propTypes = {
    is_nativepicker: PropTypes.bool,
    mode           : PropTypes.array,
    name           : PropTypes.string,
    server_time    : PropTypes.object,
};

export default Observer(DatePickerWrapper);
