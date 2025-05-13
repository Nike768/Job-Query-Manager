import { Box } from '@mui/material';

// LabelWithAsterisk component is used to show the label(SomeText) with asterisk(*) to show that it is a required field.
const LabelWithAsterisk = (props: {
    labelText: string, // Text to be shown in the Label
    asteriskColor: string // Color of the asterisk(*)
}) => {
    const { labelText, asteriskColor } = props;
    return (
        <Box
            component="span"
            fontFamily='system-ui'
            display="inline"
        >
            {labelText}
            <Box
                component="span"
                color={asteriskColor}
                marginLeft="0.25rem"
            >
                *
            </Box>
        </Box>
    );
}
export default LabelWithAsterisk;