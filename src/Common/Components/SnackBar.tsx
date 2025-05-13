import { Alert, Snackbar } from "@mui/material";

// Snackbar component used to show Success or failure messages at the top-center of the screen
const SnackBarComponent = (props: {
    snackbarOpen: boolean, // It Controls the visibility of the snackbar
    handleSnackbarClose: Function, // Callback function will be called when snackbar is closed
    snackbarText: string // Text to be displayed in the snackbar
}) => {
    const { snackbarOpen, handleSnackbarClose, snackbarText } = props;

    return (
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => handleSnackbarClose()}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Snackbar positioning
        >
            <Alert
                onClose={() => handleSnackbarClose()}
                severity="success"
                variant="filled"
            >
                {snackbarText}
            </Alert>
        </Snackbar>
    );
};

export default SnackBarComponent;