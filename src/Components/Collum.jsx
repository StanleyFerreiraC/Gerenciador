import React from "react";
import "../App.css";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const Collum = (provided) => {
  return (
    <Box
      className="collumnscard"
      style={{
        color: "black",
        backgroundColor: "#b91814",
        width: "20%",
        minHeight: "50%",
        padding: 10,
        borderRadius: 12,
      }}
      {...provided.droppableProps}
      ref={provided.innerRef}
    >
      <h3
        style={{
          color: "white",
        }}
      >
        {column.title}
      </h3>
      {column.items.map((item, index) => (
        <Draggable key={item} draggableId={item} index={index}>
          {(provided) => (
            <Box
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style,
                margin: "8px",
                padding: "8px",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              {item}
            </Box>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </Box>
  );
};

export default Collum;
