import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
export default function CarbonConsume(props) {
    const {emissions} = props
    return (
        <p>
            Total CO2 emissions :{' '}
            {emissions? Math.round(emissions * 100) / 100 : 0}
        </p>
    )
}

CarbonConsume.propTypes = {
    emissions: PropTypes.number,
}