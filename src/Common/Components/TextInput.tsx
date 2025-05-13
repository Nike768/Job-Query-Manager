import {TextField, type FilledInputProps, type InputProps, type OutlinedInputProps } from "@mui/material";
import LabelWithAsterisk from "./LabelWithAsterisk";
import React from "react";

const TextInput = (props: {
    searchQuery: string; // Current input value
    handleInputChange: Function; // Callback Function to be called to handle changes in the input
    setIsDropdownOpen: Function; // State fucntion to toggle the dropdown visibility
    isDropdownOpen: boolean; // It will indicate the dropdown state whether it is open or closed
    labelText: string; // Text to be shown in the Label for the input field
    inputProps: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps> | undefined; // Props to be passed to the input field
}) => {
    const {
        searchQuery,
        handleInputChange,
        setIsDropdownOpen,
        inputProps,
        labelText
    } = props;

    return (
        <TextField
            id="job-query"
            fullWidth
            variant="outlined"
            label={<LabelWithAsterisk labelText={labelText} asteriskColor="red" />}
            value={searchQuery}
            onChange={(e) => handleInputChange(e)}
            onClick={() => setIsDropdownOpen(true)}
            size="medium"
            InputProps={inputProps}
        />
    );
};

export default React.memo(TextInput);
