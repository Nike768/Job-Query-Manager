import { Button } from "@mui/material";

// Reusable button component
// Props:
// - selectedQueryId: ID of the selected job query (used to enable/disable the button)
// - btnText: Text to be displayed on the button
const ButtonComponent = (props: { selectedQueryId: string; btnText: string, handleAddCandidates: Function }) => {
    // Destructuring props
    const { selectedQueryId, btnText, handleAddCandidates } = props;

    return (
        <Button
            variant="contained"
            // Disable button if no query is selected
            disabled={!selectedQueryId}
            // Trigger candidate addition logic when clicked
            onClick={() => handleAddCandidates()}
            // Custom styling for button
            sx={{
                bgcolor: 'primary.main',     // Primary background color
                color: 'white',              // Text color
                py: 1,                       // Vertical padding
                textTransform: 'uppercase',  // Uppercase button text
                // Hover styles
                '&:hover': {
                    bgcolor: 'primary.dark', // Darker shade on hover
                },
                // Disabled state styles
                '&.Mui-disabled': {
                    bgcolor: '#e0e0e0',      // Light grey background
                    color: '#a0a0a0',        // Dimmed text color
                },
                '&:focus': {
                    outline: 'none',         // Removed black outline border on clicking
                },
                fontFamily: "inherit"        // Inherit font style from parent
            }}
        >
            {btnText}
        </Button>
    );
};

export default ButtonComponent;
