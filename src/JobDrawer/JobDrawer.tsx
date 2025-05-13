import { useState, type ChangeEvent } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import JobListItems from "./JobListItems";
import ButtonComponent from "../Common/Components/Button";
import TextInput from "../Common/Components/TextInput";
import SnackBarComponent from "../Common/Components/SnackBar";
import { colors } from '../Common/color';
import { jobQueries } from "./JobQueries";

interface MoveToJobQueryDialogProps {
  open: boolean; // It controls the visibility of the Drawer
  onClose: () => void; // Callback function to be called to close the Drawer
}

const JobDrawer = (props: MoveToJobQueryDialogProps) => {
  const { open, onClose } = props;
  const [selectedQueryId, setSelectedQueryId] = useState<string>(""); // State to keep track of the selected job query ID

  const [searchQuery, setSearchQuery] = useState<string>(""); // State to store the search input value

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // State to control the visibility of the dropdown list

  const [snackbarOpen, setSnackbarOpen] = useState(false); //State to control the visibility of the Snackbar notification

  const { darkGray, lightGray } = colors; // Color variables for styling

  // This function is Handling the selection of a job query from the dropdown
  const handleRadioChange = (id: string, title: string) => {
    setSelectedQueryId(id);
    setSearchQuery(title);
    setIsDropdownOpen(false);
  };

  // This function is used to handle changes in the search input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (!value) setSelectedQueryId("");
    setIsDropdownOpen(true);
  }

  // This function is used to handle clicks outside the dropdown to close it
  const handleClickAway = () => {
    setIsDropdownOpen(false);
  };

  // This function is used to handle the addition of candidates to the selected job query
  const handleAddCandidates = () => {
    setSnackbarOpen(true);
    setSelectedQueryId("");
    setSearchQuery("");
    onClose();
  };

  // This function is used to close the Snackbar notification
  const handleSnackbarClose = (reason?: string) => {
    if (reason !== "clickaway") setSnackbarOpen(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 500 },
            display: 'flex',
          },
        }}
      >
        {/* Header section with title and close button */}
        <Box padding="24px 24px 0px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontFamily="inherit" variant="h6" fontWeight="600">
              Move to Job Query
            </Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Instructional text */}
          <Typography variant="body2" color={darkGray} marginTop="16px" fontWeight="500" fontFamily="inherit">
            Select Job Query to move candidates to the shortlist tab
          </Typography>
        </Box>

        {/* Main content section with search + dropdown */}
        <Box paddingLeft="24px" paddingRight="24px" flex={1}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box marginTop="15px">
              <TextInput
                searchQuery={searchQuery}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                labelText="Job Query Title"
                handleInputChange={handleInputChange}
                inputProps={{
                  endAdornment: (
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent input click from being triggered again
                        setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
                      }}
                    >
                      <ArrowDropDownIcon /> {/* Arrow icon to toggle dropdown */}
                    </IconButton>
                  ),
                }}
              />
              {isDropdownOpen && (
                <JobListItems
                  ListItems={jobQueries}
                  selectedItem={selectedQueryId}
                  handleRadioChange={handleRadioChange}
                />
              )}
            </Box>
          </ClickAwayListener>
        </Box>

        {/* Footer section with button */}
        <Box
          display="flex"
          justifyContent="flex-end"
          padding="24px"
          borderTop={`1px solid ${lightGray}`}
          marginTop='auto'
        >
          <ButtonComponent onClickhandler={handleAddCandidates} disabled={!selectedQueryId} variant="contained" btnText={"ADD CANDIDATES TO SHORTLIST"} />
        </Box>
      </Drawer>
      <SnackBarComponent snackbarOpen={snackbarOpen} handleSnackbarClose={handleSnackbarClose} snackbarText="Candidates successfully added to shortlist" />
    </>
  );
};

export default JobDrawer;
