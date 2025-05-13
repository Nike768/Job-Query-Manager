import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import JobDrawer from "../JobDrawer/JobDrawer";
import ButtonComponent from "../Common/Components/Button";

const Index = () => {
  // State to control the visibility of the Drawer
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">CV Pool</h1>
          {/* Button to open the Drawer */}
          <ButtonComponent
            onClickhandler={() => setIsDialogOpen(true)}
            variant="contained"
            btnText="Move to Job Query"
            btnIcon={<MenuIcon />}              
          >
          </ButtonComponent>
        </div>
        <JobDrawer open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      </div>
    </div>
  );
};

export default Index;
