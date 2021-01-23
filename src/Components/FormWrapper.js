import {FormControl, withStyles} from "@material-ui/core";


const FormWrapper = withStyles({
    root: {
        "flex-direction": "col",
        display:'flex',
        "justifyContent": "space-around",
        "align-items": "flex-end"
    },
})(FormControl);

export default FormWrapper
