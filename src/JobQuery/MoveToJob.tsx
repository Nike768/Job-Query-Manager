import { useState, useEffect, type ChangeEvent } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ListItems from "../Components/List";
import ButtonComponent from "../Components/Button";
import TextInput from "../Components/TextInput";
import SnackBarComponent from "../Components/SnackBar";

// Type definition for each job query item
interface JobQuery {
  id: string;
  title: string;
  company: string;
  location: string;
  openings: number;
  editDate: string;
  editedBy: string;
}

// Props expected by MoveToJob component
interface MoveToJobQueryDialogProps {
  open: boolean;      // Controls whether the drawer is open
  onClose: () => void; // Function to close the drawer
}

// Static job query data
const jobQueries: JobQuery[] = [
  {
    id: "1",
    title: "Business Development Manager (BDM)",
    company: "Phonepe",
    location: "Bhopal, Indore, Ratlam",
    openings: 86,
    editDate: "13 Mar 2025",
    editedBy: "alik@hunar.ai"
  },
  {
    id: "2",
    title: "Business Development Manager (BDM)",
    company: "Phonepe",
    location: "Jabalpur",
    openings: 32,
    editDate: "12 Mar 2025",
    editedBy: "aniket@hunar.ai"
  },
  {
    id: "3",
    title: "Customer Service Executive CSS",
    company: "Croma",
    location: "Bangalore",
    openings: 29,
    editDate: "11 Mar 2025",
    editedBy: "alik@hunar.ai"
  },
  {
    id: "4",
    title: "Customer Service Executive CSS",
    company: "Croma",
    location: "Lucknow",
    openings: 10,
    editDate: "10 Mar 2025",
    editedBy: "krishna@hunar.ai"
  },
  {
    id: "5",
    title: "Business Development Manager (BDM)",
    company: "Phonepe",
    location: "Ratlam",
    openings: 45,
    editDate: "10 Mar 2025",
    editedBy: "aniket@hunar.ai"
  },
  {
    id: "6",
    title: "Business Development Manager (BDM)",
    company: "Phonepe",
    location: "Bhopal",
    openings: 26,
    editDate: "10 Mar 2025",
    editedBy: "krishna@hunar.ai"
  },
];

const MoveToJob = ({ open, onClose }: MoveToJobQueryDialogProps) => {
  // State to keep track of the selected job query ID
  const [selectedQueryId, setSelectedQueryId] = useState<string>("");

  // State to store the search input value
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Toggle to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Filtered list of job queries based on user input
  const [filteredQueries, setFilteredQueries] = useState<JobQuery[]>(jobQueries);

  // Effect to filter job queries whenever search input changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = jobQueries.filter(query =>
        query.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredQueries(filtered);
    } else {
      setFilteredQueries(jobQueries); // Reset to full list when input is cleared
    }
  }, [searchQuery]);

  // Handles selection of a job query from the dropdown
  const handleRadioChange = (id: string, title: string) => {
    setSelectedQueryId(id);
    setSearchQuery(title);
    setIsDropdownOpen(false); // Close dropdown on selection
  };

  // Handles typing in the input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchQuery(event.target.value);

    // If input is cleared, reset selection
    event.target.value === "" && setSelectedQueryId("");

    // Show dropdown while typing
    setIsDropdownOpen(true);
  }

  // Closes the dropdown when clicking outside
  const handleClickAway = () => {
    setIsDropdownOpen(false);
  };

  // Function to handle the action of adding candidates to a job query
  const handleAddCandidates = () => {
    // Show the success snackbar using Material UI Snackbar
    setSnackbarOpen(true);

    // Clear the selected job query ID (reset selection)
    setSelectedQueryId("");

    // Clear the search input field
    setSearchQuery("");

    // Close the MoveToJob drawer/dialog
    onClose();
  };

  // Function to handle closing the Snackbar notification
  const handleSnackbarClose = (reason?: string) => {
    // Prevent closing the Snackbar if the user clicks away (click outside)
    if (reason === 'clickaway') {
      return;
    }

    // Close the Snackbar normally
    setSnackbarOpen(false);
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
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          },
        }}
      >
        {/* Header section with title and close button */}
        <Box sx={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography fontFamily={"inherit"} variant="h6" fontWeight="600">
              Move to Job Query
            </Typography>
            <IconButton onClick={onClose} size="small" sx={{
              '&:focus': {
                outline: 'none', // Removed black outline border on clicking
              },
            }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Instructional text */}
          <Typography variant="body2" color="#424242" sx={{ mt: 2, fontWeight: 500, fontFamily: "inherit" }}>
            Select Job Query to move candidates to the shortlist tab
          </Typography>
        </Box>

        {/* Main content section with search + dropdown */}
        <Box sx={{ paddingLeft: '24px', paddingRight: '24px', flex: 1 }}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ marginTop: '15px' }}>
              {/* Reusable TextInput component */}
              <TextInput
                searchQuery={searchQuery}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
                labelText="Job Query Title"
                handleInputChange={handleInputChange}
              />

              {/* Conditionally rendered dropdown list */}
              {isDropdownOpen && (
                <ListItems
                  filteredQueries={filteredQueries}
                  selectedQueryId={selectedQueryId}
                  handleRadioChange={handleRadioChange}
                />
              )}
            </Box>
          </ClickAwayListener>
        </Box>

        {/* Footer section with Shortlist text button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 3,
            borderTop: '1px solid #e0e0e0',
            mt: 'auto',
          }}
        >
          <ButtonComponent handleAddCandidates={handleAddCandidates} selectedQueryId={selectedQueryId} btnText={"ADD CANDIDATES TO SHORTLIST"} />
        </Box>
      </Drawer>
      {/* Render the custom Snackbar component to show feedback to the user */}
      <SnackBarComponent snackbarOpen={snackbarOpen} handleSnackbarClose={handleSnackbarClose} snackbarText="Candidates successfully added to shortlist" />
    </>
  );
};

export default MoveToJob;
