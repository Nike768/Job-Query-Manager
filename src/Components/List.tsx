import { Box, ListItem, Radio, Typography, List, Divider } from "@mui/material";

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

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                mt: 0.5,
                maxHeight: 472, // Limits dropdown height for scroll
                overflow: 'auto', // Enables scroll if list overflows
                border: '1px solid #e0e0e0',
                borderRadius: 1,
                boxShadow: '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
                backgroundColor: 'white',
                zIndex: 1000 // Ensures it's on top of other components
            }}
        >
            <List sx={{ p: 0 }}>
                {/* If no results match the search query */}
                {filteredQueries.length === 0 && (
                    <ListItem sx={{ py: 2, justifyContent: 'center' }}>
                        <Typography fontFamily={"inherit"} variant="body2" color="text.secondary">
                            No results found.
                        </Typography>
                    </ListItem>
                )}

                {/* Map and render each filtered job query item */}
                {filteredQueries.map((query, index: number) => (
                    <Box key={query.id}>
                        <ListItem
                            sx={{
                                px: 2,
                                py: "3px",
                                '&:hover': { backgroundColor: '#f5f5f5' },
                                cursor: 'pointer'
                            }}
                            onClick={() => handleRadioChange(query.id, query.title)} // Set selected on click
                        >
                            {/* Radio button to indicate selected query */}
                            <Radio
                                checked={selectedQueryId === query.id}
                                onChange={() => handleRadioChange(query.id, query.title)}
                                sx={{ p: 0.5, mr: 1.5 }}
                            />
                            <Box sx={{ width: '100%' }}>
                                {/* Company, location, and openings info */}
                                <Typography
                                    variant="caption"
                                    color="#424242"
                                    sx={{ fontWeight: 500, fontFamily: "inherit" }}
                                >
                                    {query.company} <span style={{ color: "#BDBDBD", width: "4px", height: "4px" }}>•</span> {query.location} <span style={{ color: "#BDBDBD", width: "4px", height: "4px" }}>•</span> {query.openings} Openings
                                </Typography>

                                {/* Job title */}
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 600, fontFamily: "inherit" }}
                                >
                                    {query.title}
                                </Typography>

                                {/* Edit date and editor */}
                                <Typography
                                    variant="caption"
                                    color="#747474"
                                    sx={{ display: 'block', pt: 0.5, pb: 0.5, fontWeight: 400, fontFamily: "inherit" }}
                                >
                                    Edited On: {query.editDate} <span style={{ color: "#BDBDBD", width: "4px", height: "4px" }}>•</span> Edited By: {query.editedBy}
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
