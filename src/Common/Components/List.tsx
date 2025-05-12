import { Box, ListItem, Radio, Typography, List, Divider } from "@mui/material";
import Dots from "./DotSeparator";
import { colors } from "../color";

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

// Props expected by ListItems component
interface ListItemsProps {
    filteredQueries: JobQuery[]; // Filtered list of job queries to display
    handleRadioChange: Function; // Callback to handle radio button selection
    selectedQueryId: string; // ID of the currently selected query
}

const ListItems = (props: ListItemsProps) => {
    const { filteredQueries, handleRadioChange, selectedQueryId } = props;
    const { darkGray, mediumGray, lightGray, transluscentBlack } = colors;

    return (
        <Box
            position='relative'
            marginTop="4px"
            height="476px"
            overflow="auto"
            border={`1px solid ${lightGray}`}
            borderRadius="4px"
            boxShadow={`0px 3px 4px 2px ${transluscentBlack}`}
            bgcolor="white"
            width="100%"
            zIndex={1000}
        >
            <List style={{ padding: "0px" }}>
                {/* If no results match the search query */}
                {filteredQueries.length === 0 && (
                    <ListItem>
                        <Typography fontFamily={"inherit"} justifyContent="center" variant="body2" color="text.secondary">
                            No results found.
                        </Typography>
                    </ListItem>
                )}

                {/* Map and render each filtered job query item */}
                {filteredQueries.map((query, index: number) => (
                    <Box key={query.id}>
                        <ListItem
                            sx={{
                                px: "16px",
                                py: "3px",
                                cursor: 'pointer'
                            }}

                            onClick={() => handleRadioChange(query.id, query.title)}
                        >
                            {/* Radio button to indicate selected query */}
                            <Radio
                                checked={selectedQueryId === query.id}
                                onChange={() => handleRadioChange(query.id, query.title)}
                            />
                            <Box width="100%" marginLeft="8px" >
                                <Typography
                                    variant="caption"
                                    color={darkGray}
                                    fontWeight="500"
                                    fontFamily="inherit"
                                >
                                    {query.company} <Dots /> {query.location} <Dots /> {query.openings} Openings
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
                                    paddingTop="4px"
                                    paddingBottom="4px"
                                    fontWeight="400"
                                    fontFamily="inherit"
                                >
                                    Edited On: {query.editDate} <Dots /> Edited By: {query.editedBy}
                                </Typography>
                            </Box>
                        </ListItem>

                        {/* Divider between list items, except after last item */}
                        {index !== filteredQueries.length - 1 && <Divider />}
                    </Box>
                ))}
            </List>
        </Box>
    );
};

export default ListItems;