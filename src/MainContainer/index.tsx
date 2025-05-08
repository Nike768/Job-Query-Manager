import { useState } from "react";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoveToJob from "../JobQuery/MoveToJob";

const Index = () => {
  // State to control the visibility of the MoveToJob drawer
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header section with title and button */}
        <div className="mb-8 flex items-center justify-between">
          {/* Page title */}
          <h1 className="text-2xl font-bold text-gray-900">CV Pool</h1>

          {/* Button to open the MoveToJob drawer */}
          <Button
            onClick={() => setIsDialogOpen(true)}  // Open the drawer on click
            variant="contained"
            startIcon={<MenuIcon />}              // Menu icon on the left of the button text
            sx={{
              bgcolor: 'primary.main',            // Primary background color
              '&:hover': {
                bgcolor: 'primary.dark',          // Darker color on hover
              },
              '&:focus': {
                    outline: 'none',         // Removed black outline border on clicking
              },
            }}
          >
            Move to Job Query
          </Button>
        </div>

        {/* MoveToJob drawer component */}
        {/* It appears when isDialogOpen is true and closes on onClose callback */}
        <MoveToJob open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      </div>
    </div>
  );
};

export default Index;
