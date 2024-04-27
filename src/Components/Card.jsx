import React from "react";
import "../App.css";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Card = ({getCards}) => {
  return (
    <Container
      className="cards"
      sx={{
        height: "100%",
        minWidth: "25%",
        borderRadius: "20px",
        backgroundColor: "#b91814",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minWidth: "80%",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            textAlign: "left",
            paddingLeft: "30px",
          }}
        >
          PROJETO
        </p>
      </Box>
      <MoreVertOutlinedIcon onClick={getCards} className="icons" />
      <ArchiveOutlinedIcon className="icons" />
    </Container>
  );
};

export default Card;
