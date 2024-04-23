import React from "react";

const CreateCard = ({toggleVisibility}) => {
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
      <div
        style={{
          height: "60%",
          minWidth: "25%",
          padding: "0px 20px",
          borderRadius: "10px",
          backgroundColor: "rgba(111, 111, 111, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "0px 0px 5px 1px rgba(30 29 29)",
        }}
      >
        {/* Drop de imagem */}
        <div
          style={{
            height: "45%",
            width: "100%",
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
            width: "95%",
            borderRadius: "10px",
          }}
          name="projectname"
          type="text"
          placeholder="Project name"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <input
            style={{
              borderRadius: "10px",
              marginRight: "5px",
              width: "50%",
              color: "#1f1e1ebb;",
            }}
            name="data de inicio"
            type="date"
            placeholder="Start Date"
          />
          <input
            style={{
              borderRadius: "10px",
              width: "50%",
              color: "#1f1e1ebb;",
            }}
            name="data de Finalização"
            type="date"
            placeholder="Completion date"
          />
        </div>
        <div>
          <button>Save</button>
          <button onClick={toggleVisibility}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
