import { Box } from '@mui/material';

const LabelWithAsterisk = (props: { labelText: string }) => {
    const { labelText } = props;
    return (
        <Box
            component="span"
            fontFamily='system-ui'
            display="inline"
        >
            {labelText}
            <Box
                component="span"
                color="red"
                marginLeft="4px"
            >
                *
            </Box>
        </Box>
    );
}
export default LabelWithAsterisk;