import { Alert, Snackbar } from "@mui/material";

// Props:
// snackbarOpen: It Controls the visibility of the snackbar
// HandleSnackbarClose: Callback function will be called when snackbar is closed
// snackbarText: Textto be displayed in the snackbar

// Snackbar component used to show brief messages at the top-center of the screen
const SnackBarComponent = (props: { snackbarOpen: boolean, handleSnackbarClose: Function, snackbarText: string }) => {
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