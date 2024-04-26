import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const CreateCard = ({ toggleVisibility }) => {
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      {/* Campo do formulario */}
      <Box
        sx={{
          height: "60%",
          minWidth: "25%",
          padding: "0px 20px",
          borderRadius: "10px",
          backgroundColor: "#b91814",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "0px 0px 5px 1px rgba(30 29 29)",
        }}
      >
        {/* Drop de imagem */}
        <Box
          sx={{
            height: "45%",
            width: "100%",
            backgroundColor: "#c5bdbd4d",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 1px",
          }}
        >
          <span
            style={{
              scale: "1.2",
            }}
            class="material-symbols-outlined"
          >
            place_item
          </span>
        </Box>
        {/*Inputs*/}

        <TextField
          variant="outlined"
          name="projectname"
          size="small"
          type="text"
          label="Nome do projeto"
          sx={{
            marginTop: "30px",
            width: "100%",
            borderRadius: "10px",
          }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <TextField
            sx={{
              borderRadius: "10px",
              marginRight: "5px",
              width: "50%",
              color: "#1f1e1ebb;",
            }}
            name="data de inicio"
            size="small"
            type="date"
          />
          <TextField
            sx={{
              borderRadius: "10px",
              width: "50%",
              color: "#1f1e1ebb;",
            }}
            size="small"
            name="data de Finalização"
            type="date"
          />
        </Box>
        <Box>
          <button>Save</button>
          <button onClick={toggleVisibility}>Cancel</button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCard;
