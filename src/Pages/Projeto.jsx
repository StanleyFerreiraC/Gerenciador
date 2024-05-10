import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../App.css";
import Workspace from "../Components/Workspace";

const Projeto = () => {
  const [columns, setColumns] = useState({
    "column-1": {
      id: "column-1",
      title: "A fazer",
      items: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "Em andamento",
      items: [],
    },
    "column-3": {
      id: "column-3",
      title: "Concluido",
      items: [],
    },
  });

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    //  Se for retirado da lista
    if (!destination) return;

    // Se cair na mesma lista e na mesma posição
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    // Se cair na mesma lista
    if (start === finish) {
      const newItems = Array.from(start.items);
      newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, result.draggableId);

      const newColumn = {
        ...start,
        items: newItems,
      };

      setColumns({
        ...columns,
        [start.id]: newColumn,
      });
    } else {
      const startItems = Array.from(start.items);
      startItems.splice(source.index, 1);
      const newStart = {
        ...start,
        items: startItems,
      };

      const finishItems = Array.from(finish.items);
      finishItems.splice(destination.index, 0, result.draggableId);
      const newFinish = {
        ...finish,
        items: finishItems,
      };

      setColumns({
        ...columns,
        [start.id]: newStart,
        [finish.id]: newFinish,
      });
    }
  };

  return (
    <Container>
      <Workspace ArrowBackIosIcon={ArrowBackIosIcon}/>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Box
        className="collumns"
          style={{
            color: "black",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {Object.values(columns).map((column) => (
            <Droppable key={column} droppableId={column.id}>
              {(provided) => (
                <Box
                className="collumnscard"
                  style={{
                    color: "black",
                    backgroundColor: "#b91814",
                    width: "20%",
                    minHeight: "50%",
                    padding: 10,
                    borderRadius: 10,
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
              )}
            </Droppable>
          ))}
        </Box>
      </DragDropContext>
    </Container>
  );
};

export default Projeto;
