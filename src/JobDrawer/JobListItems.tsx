import { Box, ListItem, Radio, Typography, List, Divider } from "@mui/material";
import Dots from "../Common/Components/DotSeparator";
import { colors } from "../Common/color";

// Interface for each job query item
interface JobQuery {
    id: string;
    title: string;
    company: string;
    location: string;
    openings: number;
    editDate: string;
    editedBy: string;
}

interface ListItemsProps {
    ListItems: JobQuery[]; // List of Items to be shown in the list
    handleRadioChange: Function; // Callback to handle radio button selection
    selectedItem: string; // Id of the currently selected item

}

const JobListItems = (props: ListItemsProps) => {
    const { ListItems, handleRadioChange, selectedItem } = props;
    const { darkGray, mediumGray, lightGray, transluscentBlack } = colors;

    return (
        <Box
            position='relative'
            marginTop="0.25rem"
            overflow="auto"
            maxHeight="29.5rem"
            border={`0.0625rem solid ${lightGray}`}
            borderRadius="0.25rem"
            boxShadow={`0rem 0.1875rem 0.25rem 0.125rem ${transluscentBlack}`}
            bgcolor="white"
            width="100%"
            zIndex={1000}
        >
            <List style={{ padding: "0rem" }}>
                {/* Render each filtered Job item */}
                {ListItems.map((query, index: number) => (
                    <Box key={query.id}>
                        <ListItem
                            sx={{
                                px: "1rem",
                                py: "0.1875rem",
                                cursor: 'pointer'
                            }}
                            onClick={() => handleRadioChange(query.id, query.title)}
                        >
                            {/* Radio button to indicate selected query */}
                            <Box marginBottom="1.625rem">
                                <Radio
                                    checked={selectedItem === query.id}
                                    onChange={() => handleRadioChange(query.id, query.title)}
                                    size="small"
                                />
                            </Box>
                            <Box width="100%" marginLeft="0.5rem" >
                                <Typography
                                    variant="caption"
                                    color={darkGray}
                                    fontWeight="500"
                                    fontFamily="inherit"
                                >
                                    {query.company} <Dots dotsColor="grey.400" /> {query.location} <Dots dotsColor="grey.400" /> {query.openings} Openings
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontWeight="600"
                                    fontFamily="inherit"
                                >
                                    {query.title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color={mediumGray}
                                    display="block"
                                    paddingTop="0.25rem"
                                    paddingBottom="0.25rem"
                                    fontWeight="400"
                                    fontFamily="inherit"
                                >
                                    Edited On: {query.editDate} <Dots dotsColor="grey.400" /> Edited By: {query.editedBy}
                                </Typography>
                            </Box>
                        </ListItem>

                        {/* Not to show divider after last list item because there is nothing after that */}
                        {index !== ListItems.length - 1 && <Divider />}
                    </Box>
                ))}
            </List>
        </Box>
    );
};

export default JobListItems;