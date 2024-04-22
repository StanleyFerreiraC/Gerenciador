import React from "react";

const CreateCard = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#0707077a",
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
      <form
        style={{
          height: "70%",
          width: "30%",
          borderRadius: "10px",
          backgroundColor: "#4f145b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* Drop de imagem */}
        <div
          style={{
            height: "40%",
            width: "80%",
            backgroundColor: "#c5bdbd4d",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
        </div>
        {/*Inputs*/}
        <input
          style={{
            marginTop: "30px",
            width: "76%",
            borderRadius: "10px",
          }}
          name="projectname"
          type="text"
          placeholder="Project name"
        />
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <input
            style={{
              borderRadius: "10px",
              marginRight:"10px",
              width: "50%"
            }}
            name="data de inicio"
            type="date"
            placeholder="Start Date"
          />
          <input
            style={{
              borderRadius: "10px",
              width: "50%"
            }}
            name="data de Finalização"
            type="date"
            placeholder="Completion date"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCard;
