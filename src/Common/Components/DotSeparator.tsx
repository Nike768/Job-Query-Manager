import { Box } from "@mui/material";

// Dots component is used to show the dots between the text
const Dots = () => {
    return (
        <Box
            component="span"
            bgcolor="grey.400"
            display="inline-block"
            borderRadius="50%"
            width="4px"
            height="4px"
            mx="4px"
            marginBottom="2px"
        />
    );
};
export default Dots