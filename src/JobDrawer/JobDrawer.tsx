import { useCallback, useMemo, useState, type ChangeEvent } from "react";
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


  const { darkGray, lightGray, mediumGray } = colors; // Color variables for styling

  // This function is Handling the selection of a job query from the dropdown
  const handleRadioChange = useCallback((id: string, title: string) => {
    setSelectedQueryId(id);
    setSearchQuery(title);
    setIsDropdownOpen(false);
  }, []);

  // This function is used to handle changes in the search input field
  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (!value) setSelectedQueryId("");
    setIsDropdownOpen(true);
  }, []);

  // This function is used to handle clicks outside the dropdown to close it
  const handleClickAway = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  // This function is used to handle the addition of candidates to the selected job query
  const handleAddCandidates = useCallback(() => {
    setSnackbarOpen(true);
    setSelectedQueryId("");
    setSearchQuery("");
    onClose();
  }, []);

  // This function is used to close the Snackbar notification
  const handleSnackbarClose = useCallback((reason?: string) => {
    if (reason !== "clickaway") setSnackbarOpen(false);
  }, []);

  // Memoized filtered queries based on search input. This will only re-run when searchQuery changes
  const filteredQueries = useMemo(() => {
    if (searchQuery) {
      return jobQueries.filter(query =>
        query.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return jobQueries;
  }, [searchQuery]);

  // Memoized the Input end icon to toggle the dropdown
  const inputEndIcon = useMemo(() => (
    <IconButton
      size="small"
      onClick={(e) => {
        e.stopPropagation();
        setIsDropdownOpen((prev) => !prev);
      }}
    >
      <ArrowDropDownIcon />
    </IconButton>
  ), []);

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          style: { width: window.innerWidth < 600 ? "100%" : 500, display: "flex" },
        }}
      >
        {/* Header section with title and close button */}
        <Box padding="1.25rem 1.5rem 0rem">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontFamily="inherit" variant="h6" fontWeight="600" fontSize="large">
              Move to Job Query
            </Typography>
            <IconButton edge="end" onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Typography variant="body2" color={darkGray} marginTop="1rem" fontWeight="500" fontFamily="inherit">
            Select Job Query to move candidates to the shortlist tab
          </Typography>
        </Box>

        {/* Input field section in which you can search and dropdown is also there */}
        <Box paddingLeft="1.5rem" paddingRight="1.5rem" flex={1}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box marginTop="0.9375rem">
              <TextInput
                searchQuery={searchQuery}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                labelText="Job Query Title"
                handleInputChange={handleInputChange}
                inputProps={{endAdornment : inputEndIcon}}
              />
              {isDropdownOpen && (
                filteredQueries.length === 0 ? (
                  <Box paddingTop="2rem">
                    <Typography fontFamily="inherit" justifyContent="center" display="flex" variant="body2" color={mediumGray}>
                      No results found
                    </Typography>
                  </Box>
                ) : (
                <JobListItems
                  ListItems={filteredQueries}
                  selectedItem={selectedQueryId}
                  handleRadioChange={handleRadioChange}
                />
              ))}
            </Box>
          </ClickAwayListener>
        </Box>

        {/* Footer section with button */}
        <Box
          display="flex"
          justifyContent="flex-end"
          padding="1.6rem"
          borderTop={`0.0625rem solid ${lightGray}`}
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
