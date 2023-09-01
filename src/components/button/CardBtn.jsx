import { Button, styled } from "@mui/material";
import React from "react";

const CardBtn = ({ cardBtnText }) => {
  const colorCode = cardBtnText === "Edit" ? "#BDD2BD" : "#C9B7EB";

  const CardButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 15,
    padding: "7px 45px",
    border: "1px solid",
    borderRadius: "20px",
    backgroundColor: colorCode,
    color: "#222121",
    borderColor: "#BDD2BD",
    "&:hover": {
      backgroundColor: "#a8c8a8",
      borderColor: "#a8c8a8",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#BDD2BD",
      borderColor: "#BDD2BD",
    },
    // "&:focus": {
    //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    // },
  });

  // const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
  //   "&:hover": {
  //     backgroundColor: purple[700],
  //   },
  // }));

  return <CardButton variant="contained">{cardBtnText}</CardButton>;
};

export default CardBtn;
