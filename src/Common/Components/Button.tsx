import { Button } from "@mui/material";
import type { JSX } from "react";
import React from "react";

interface ButtonProps {
    btnText: string; // Text to be displayed on the button
    onClickhandler: Function; // Callback function to be called when the button is clicked 
    variant: "text" | "contained" | "outlined"; // Variant of the button (e.g., "contained", "outlined", etc.)
    disabled?: boolean; // It will enable/disable the button based on the value pased to disabled prop
    btnIcon?: JSX.Element; // Icon to be displayed on the button
}
const ButtonComponent = (props: ButtonProps) => {
    const { disabled, variant, btnText, onClickhandler, btnIcon } = props;

    return (
        <Button
            variant={variant}
            disabled={disabled}
            onClick={() => onClickhandler()}
            startIcon={btnIcon}
        >
            {btnText}
        </Button>
    );
};

export default React.memo(ButtonComponent);
