import {InputLabel, withStyles} from "@material-ui/core";

const InputWrapper = withStyles({
    root: {
        position: "relative",
        display: "block",
        "margin-bottom": "15px"
    },
})(InputLabel);

export default InputWrapper