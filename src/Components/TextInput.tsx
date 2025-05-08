import { IconButton, InputAdornment, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Props for the TextInput component
const TextInput = (props: {
    searchQuery: string; // Current input value
    handleInputChange: Function; // Callback to handle changes in input
    setIsDropdownOpen: Function; // Function to toggle the dropdown visibility
    isDropdownOpen: boolean; // Boolean flag indicating dropdown state
    labelText: string; // Label text to show for the input
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

            // Label with red asterisk for required field
            label={
                <span style={{ fontFamily: "system-ui" }}>
                    {labelText} <span style={{ color: 'red' }}>*</span>
                </span>
            }

            // Controlled input value and handler
            value={searchQuery}
            onChange={(e) => handleInputChange(e)}

            // Clicking on the input opens the dropdown
            onClick={() => setIsDropdownOpen(true)}

            size="medium"

            // Add an end adornment (arrow icon to toggle dropdown)
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            size="small"
                            sx={{
                                '&:focus': {
                                    outline: 'none', // Removed black outline border on clicking
                                },
                            }}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent input click from being triggered again
                                setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
                            }}
                        >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}

            // Custom styles for hover, focus, and default state
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#e0e0e0', // Default border
                    },
                    '&:hover fieldset': {
                        borderColor: '#1976d2', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // Border color when focused
                        boxShadow: 'none',      // Remove default shadow if any
                    },
                },
            }}
        />
    );
};

export default TextInput;
