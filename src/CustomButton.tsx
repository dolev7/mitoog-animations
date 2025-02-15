import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "0.7rem",
        backgroundColor: "#000",
        color: "#fff",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
