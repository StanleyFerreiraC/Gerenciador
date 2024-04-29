import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


const Card = ({ cards, apagarcard }) => {
  return (
    <Container
      className="cards"
      sx={{
        height: "100%",
        width: "80%",
        borderRadius: "20px",
        backgroundColor: "#b91814",
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      
      <Box
        sx={{
          minWidth: "80%",
        }}
      >
        <Link  to={`/${cards}`}>
        <p
          className="nomeDoProjeto"
          style={{
            fontSize: "30px",
            textAlign: "left",
            paddingLeft: "30px",
          }}
        >
          {cards}
        </p>
        </Link>
      </Box>
     
      <DeleteIcon onClick={() => apagarcard(cards)} className="icons" />
      <ArchiveOutlinedIcon className="icons" />
    </Container>
  );
};

export default Card;
