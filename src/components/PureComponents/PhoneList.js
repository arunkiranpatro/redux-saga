import React from 'react';
import PropTypes from 'prop-types';

import Details from '../UILibrary/ReadOnlyData';

const PhoneList = function(props) {
    const { ActivePhones, togglePhone } = props;
    return (
        <Details label="Phone Number:" ccicon={false} className="phone-wrapper">
            <div className="phone-values">
                {ActivePhones.map((phone, index) => (
                    <Details
                        key={index}
                        value={phone.PhoneNumber}
                        ccicon={true}
                    />
                ))}
            </div>
            <button
                onClick={togglePhone}
                className="phone-show-all"
                aria-label="show all"
            >
                Show All
            </button>
        </Details>
    );
};
PhoneList.propTypes = {
    ActivePhones: PropTypes.arrayOf(
        PropTypes.shape({
            PhoneNumber: PropTypes.string,
        })
    ),
    togglePhone: PropTypes.func.isRequired,
};
export default PhoneList;
