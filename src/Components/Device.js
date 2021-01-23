import React from "react";
import PropTypes from 'prop-types';
import InputWrapper from "./InputWrapper";
import {MenuItem, Select} from "@material-ui/core";
import FormWrapper from "./FormWrapper";

/**
 * @param {object} props
 * @param props.devices
 * @param props.deviceType
 * @param props.handleChangeDeviceType
 * @param props.deviceTypeField
 * @returns {JSX.Element}
 */
export default function Device(props) {
    const { deviceType, handleChangeDeviceType, deviceTypeField, devices } = props;

    return (<FormWrapper>
        <InputWrapper> Device Types </InputWrapper>
        <Select
            inputRef={deviceTypeField}
            displayEmpty
            value={deviceType}
            onChange={handleChangeDeviceType}
        >
            <MenuItem value="" disabled>
                Select
            </MenuItem>
            {devices.map((device) => {
                return (
                    <MenuItem key={device.index} value={device.index}>
                        {device.name}
                    </MenuItem>
                )
            })}
        </Select>
    </FormWrapper>)
}

Device.propTypes = {
    devices: PropTypes.array,
    deviceType: PropTypes.any,
    handleChangeDeviceType: PropTypes.func,
    deviceTypeField: PropTypes.any
}
