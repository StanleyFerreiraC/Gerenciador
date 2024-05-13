import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";



const CreateCard = ({
  toggleVisibility,
  setProjectname,
  setInitdate,
  setEnddate,
  handlerCreateCard,
  error,
  currentDate,
  maxDateString,
}) => {
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
        <strong className="erro">{error}</strong>
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
          <FileDownloadOutlinedIcon
            style={{
              scale: "1.3",
            }}
          />
        </Box>
        {/*Inputs*/}
        <Box
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            name="projectname"
            size="small"
            type="text"
            label="Nome do projeto"
            onChange={(e) => setProjectname(e.target.value)}
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
              name="initdate"
              size="small"
              type="date"
              id="dateInput"
              inputProps={{
                min: currentDate, // Define a data mínima como a data atual
                max: maxDateString, // Define a data máxima como 2070
              }}
              onChange={(e) => setInitdate(e.target.value)}
              sx={{
                borderRadius: "10px",
                marginRight: "5px",
                width: "50%",
                color: "#1f1e1ebb;",
              }}
            />
            <TextField
              sx={{
                borderRadius: "10px",
                width: "50%",
                color: "#1f1e1ebb;",
              }}
              inputProps={{
                min: currentDate, // Define a data mínima como a data atual
                max: maxDateString, // Define a data máxima como 2070
              }}
              onChange={(e) => setEnddate(e.target.value)}
              size="small"
              name="enddate"
              type="date"
            />
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <Button
                className="entrar"
                onClick={handlerCreateCard}
                sx={{
                  width: "100px",
                  backgroundColor: "#fefefe",
                  color: "#cb4204",
                }}
              >
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button
                className="entrar"
                onClick={toggleVisibility}
                sx={{
                  width: "100px",
                  backgroundColor: "#fefefe",
                  color: "#cb4204",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCard;
