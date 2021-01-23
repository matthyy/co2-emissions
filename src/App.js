import './App.css'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { computeEmission } from './Module/emission-algo'
import FormWrapper from './Components/FormWrapper'
import InputWrapper from './Components/InputWrapper'
import Device from './Components/Device'
import Network from './Components/Network'
import CarbonConsume from './Components/CarbonConsume'
import { getKwhDevices } from './Sdk/device-kwh'
import { getKwhNetworks } from './Sdk/network-kwh'

class App extends Component {
    constructor(props) {
        super(props)
        this.handleChangeDeviceType = this.handleChangeDeviceType.bind(this)
        this.handleChangeNetworkType = this.handleChangeNetworkType.bind(this)
        this.handleChangeNumberOfHours = this.handleChangeNumberOfHours.bind(this)

        this.deviceTypeField = React.createRef()
        this.networkTypeField = React.createRef()
        this.numberOfHoursField = React.createRef()

        // should be refacto when using an Api
        const networks = getKwhNetworks()
        const devices = getKwhDevices()

        this.state = {
            deviceType: '',
            networkType: '',
            numberOfHours: '0',
            carbonEmit: 0,
            devices,
            networks,
        }
    }

    /**
     * @param {object} e
     */
    handleChangeDeviceType(e) {
        const val = e.target.value
        const carbonEmit = computeEmission(this.state.networkType, val, this.state.numberOfHours)
        this.setState({
            deviceType: val,
            carbonEmit,
        })
    }

    /**
     * @param {object} e
     */
    handleChangeNetworkType(e) {
        const val = e.target.value
        const carbonEmit = computeEmission(val, this.state.deviceType, this.state.numberOfHours)
        this.setState({
            networkType: val,
            carbonEmit,
        })
    }

    /**
     * @param {object} e
     */
    handleChangeNumberOfHours(e) {
        const val = e.target.value
        const carbonEmit = computeEmission(this.state.networkType, this.state.deviceType, parseInt(val, 10))
        this.setState({
            numberOfHours: parseInt(val, 10),
            carbonEmit,
        })
    }

    /**
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className="App">
                <h2>Calculate your CO2 emissions</h2>
                <div className="container-row">
                    <Device
                        deviceType={this.state.deviceType}
                        handleChangeDeviceType={this.handleChangeDeviceType}
                        deviceTypeField={this.deviceTypeField}
                        devices={this.state.devices}
                    />
                    <Network
                        deviceType={this.state.networkType}
                        handleChangeNetworkType={this.handleChangeNetworkType}
                        const
                        networkTypeField={this.networkTypeField}
                        networks={this.state.networks}
                    />
                    <FormWrapper>
                        <InputWrapper> Number of hours </InputWrapper>
                        <TextField
                            inputRef={this.numberOfHoursField}
                            value={this.state.numberOfHours}
                            onChange={this.handleChangeNumberOfHours}
                            inputProps={{ type: 'number' }}
                        />
                    </FormWrapper>
                </div>
                <CarbonConsume emissions={this.state.carbonEmit} />
            </div>
        )
    }
}

export default App
