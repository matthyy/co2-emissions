import './App.css';
import {FormControl, Select, MenuItem, InputLabel, withStyles} from '@material-ui/core';
import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import {computeConsumption} from "./module/consumption-algo";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChangeDeviceType = this.handleChangeDeviceType.bind(this);
        this.handleNetworkType = this.handleNetworkType.bind(this);
        this.handleNumberOfHours = this.handleNumberOfHours.bind(this);

        this.deviceTypeField = React.createRef();
        this.networkTypeField = React.createRef();
        this.numberOfHoursField = React.createRef();

        this.state = {
            deviceType: '',
            networkType: '',
            numberOfHours: "0",
            carboneConsume: 0
        };
    }

    handleChangeDeviceType(e) {
        const val = e.target.value
        const carboneConsume = computeConsumption(this.state.networkType, val, this.state.numberOfHours)
        this.setState({
            deviceType: val,
            carboneConsume
        })
    }

    handleNetworkType(e) {
        const val = e.target.value
        const carboneConsume = computeConsumption(val, this.state.deviceType, this.state.numberOfHours)
        this.setState({
            networkType: val,
            carboneConsume
        })
    }

    handleNumberOfHours(e) {
        const val = e.target.value
        const carboneConsume = computeConsumption(this.state.networkType, this.state.deviceType, parseInt(val, 10))
        this.setState({
            numberOfHours: parseInt(val, 10),
            carboneConsume
        })
    }

    render() {
        const FormControlStyle = withStyles({
            root: {
                "flex-direction": "col",
                display:'flex',
                "justifyContent": "space-around",
                "align-items": "flex-end"
            },
        })(FormControl);

        const InputLabelStyle = withStyles({
            root: {
                position: "relative",
                display: "block",
                "margin-bottom": "15px"
            },
        })(InputLabel);

        return (
            <div className="App">
              <h2>Calculate your CO2 emmissions</h2>
              <div className="container-row">
                  <FormControlStyle>
                      <InputLabelStyle> Device Types </InputLabelStyle>
                      <Select
                          inputRef={this.deviceTypeField}
                          displayEmpty
                          value={this.state.deviceType}
                          onChange={this.handleChangeDeviceType}>
                          <MenuItem value="" disabled>Select</MenuItem>
                          <MenuItem value={0}>Smartphone</MenuItem>
                          <MenuItem value={1}>Tablet</MenuItem>
                          <MenuItem value={2}>Laptop</MenuItem>
                          <MenuItem value={3}>Television</MenuItem>
                      </Select>
                  </FormControlStyle>
                  <FormControlStyle>
                      <InputLabelStyle> Network Types </InputLabelStyle>
                      <Select
                          displayEmpty
                          inputRef={this.deviceTypeField}
                          value={this.state.networkTypeField}
                          onChange={this.handleNetworkType}>
                          <MenuItem value="" disabled>Select</MenuItem>
                          <MenuItem value={0}>Wifi</MenuItem>
                          <MenuItem value={1}>4G</MenuItem>
                      </Select>
                  </FormControlStyle>
                  <FormControlStyle>
                      <InputLabelStyle> Number of hours </InputLabelStyle>
                      <TextField
                          inputRef={this.numberOfHoursField}
                          value={this.state.numberOfHours}
                          onChange={this.handleNumberOfHours}
                          inputProps={{type: 'number'}}
                      />
                  </FormControlStyle>
              </div>
              <p>Carbone consume : {this.state.carboneConsume}</p>
            </div>
      );
    }
}


export default App;