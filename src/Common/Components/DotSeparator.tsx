import { Box } from "@mui/material";

// Dots component is used to show the dots between the text
const Dots = (props : {dotsColor: string}) => {
    const { dotsColor } = props;
    return (
        <Box
            component="span"
            bgcolor={dotsColor}
            display="inline-block"
            borderRadius="50%"
            width="0.25rem"
            height="0.25rem"
            mx="0.25rem"
            marginBottom="0.125rem"
        />
    );
};
export default Dots