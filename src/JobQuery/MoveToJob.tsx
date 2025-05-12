import { useState, useEffect, type ChangeEvent } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ListItems from "../Common/Components/List";
import ButtonComponent from "../Common/Components/Button";
import TextInput from "../Common/Components/TextInput";
import SnackBarComponent from "../Common/Components/SnackBar";
import { colors } from '../Common/color';

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

interface MoveToJobQueryDialogProps {
  open: boolean; // It controls the visibility of the Drawer
  onClose: () => void; // Callback function to be called to close the Drawer
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

const MoveToJob = (props: MoveToJobQueryDialogProps) => {
  const { open, onClose } = props;
  // State to keep track of the selected job query ID
  const [selectedQueryId, setSelectedQueryId] = useState<string>("");

  // State to store the search input value
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State to control the visibility of the dropdown list
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // State to control the visibility of the Snackbar notification
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // State to store the filtered job queries based on the search input
  const [filteredQueries, setFilteredQueries] = useState<JobQuery[]>(jobQueries);

  // Colors for the component used from the common colors file
  const { darkGray, lightGray } = colors;

  // This useEffect is used to filter job queries whenever search input changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = jobQueries.filter(query =>
        query.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredQueries(filtered);
    } else {
      setFilteredQueries(jobQueries);
    }
  }, [searchQuery]);

  // This function is Handling the selection of a job query from the dropdown
  const handleRadioChange = (id: string, title: string) => {
    setSelectedQueryId(id);
    setSearchQuery(title);
    setIsDropdownOpen(false); 
  };

  // This function is used to handle changes in the search input field
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchQuery(event.target.value);
    event.target.value === "" && setSelectedQueryId("");
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
    if (reason === 'clickaway') {
      return;
    }
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
            display: 'flex',
          },
        }}
      >
        {/* Header section with title and close button */}
        <Box padding="24px 24px 0px 24px">
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
              />
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

export default MoveToJob;
