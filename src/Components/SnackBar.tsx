// Import required Material UI components
import { Alert, Snackbar } from "@mui/material";

// Define props type for the SnackBarComponent
const SnackBarComponent = (props: { snackbarOpen: boolean, handleSnackbarClose: Function, snackbarText: string }) => {
    // Destructuring props
    const { snackbarOpen, handleSnackbarClose, snackbarText } = props;

    return (
        // Snackbar component used to show brief messages at the top-center of the screen
        <Snackbar
            open={snackbarOpen} // Controls visibility of the snackbar
            autoHideDuration={3000} // Automatically closes the snackbar after 3 seconds
            onClose={() => handleSnackbarClose()} // Callback when snackbar is closed
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioning of the snackbar
        >
            {/* Alert inside Snackbar to display styled message */}
            <Alert
                onClose={() => handleSnackbarClose()} // Callback for close icon in Alert
                severity="success" // Alert style (success, error, info, warning)
                sx={{ width: '100%', fontFamily: "inherit" }}
                variant="filled"
            >
                {snackbarText} {/* Text message shown in the alert */}
            </Alert>
        </Snackbar>
    );
};

// Export the component for use in other parts of the app
export default SnackBarComponent;
