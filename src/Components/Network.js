import React from "react";
import PropTypes from "prop-types";
import InputWrapper from "./InputWrapper";
import {MenuItem, Select} from "@material-ui/core";
import FormWrapper from "./FormWrapper";

/**
 * @param {object} props
 * @param props.networks
 * @param props.networkType
 * @param props.handleChangeNetworkType
 * @param props.networkTypeField
 * @returns {JSX.Element}
 */
export default function Network(props) {
    const { networkType, handleChangeNetworkType, networkTypeField, networks } = props;

    return(<FormWrapper>
        <InputWrapper> Network Types </InputWrapper>
        <Select
            inputRef={networkTypeField}
            value={networkType}
            onChange={handleChangeNetworkType}
        >
            <MenuItem value="" disabled>Select</MenuItem>
            { networks.map((network) => {
                return (
                    <MenuItem key={network.index} value={network.index}>
                        {network.name}
                    </MenuItem>
                )
            })}
        </Select>
    </FormWrapper>)
}

Network.propTypes = {
    networks: PropTypes.array,
    networkType: PropTypes.any,
    handleChangeNetworkType: PropTypes.func,
    networkTypeField: PropTypes.any
}