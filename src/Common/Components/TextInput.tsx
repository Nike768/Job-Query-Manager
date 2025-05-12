import { IconButton, InputAdornment, TextField } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LabelWithAsterisk from "./LabelWithAsterisk";

const TextInput = (props: {
    searchQuery: string; // Current input value
    handleInputChange: Function; // Callback Function to be called to handle changes in the input
    setIsDropdownOpen: Function; // State fucntion to toggle the dropdown visibility
    isDropdownOpen: boolean; // It will indicate the dropdown state whether it is open or closed
    labelText: string; // Text to be shown in the Label for the input field
}) => {
    const {
        searchQuery,
        handleInputChange,
        setIsDropdownOpen,
        isDropdownOpen,
        labelText
    } = props;

    return (
        <TextField
            id="job-query"
            fullWidth
            variant="outlined"
            label={<LabelWithAsterisk labelText={labelText} />}
            value={searchQuery}
            onChange={(e) => handleInputChange(e)}
            onClick={() => setIsDropdownOpen(true)}
            size="medium"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent input click from being triggered again
                                setIsDropdownOpen(!isDropdownOpen);
                            }}
                        >
                            <ArrowDropDownIcon /> {/*arrow icon to toggle dropdown */}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default TextInput;
