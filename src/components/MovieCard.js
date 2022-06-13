import React from "react";
import { Rate } from "../components/Rate";

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        style={{
          width: "18rem",
          borderRadius: "10px",
          border: "2px solid red",
          background: "rgb(194, 4, 4)",
          height: "30rem",
        }}
        src={movie.image}
        alt="pic"
      />
      <div>
        <Rate rating={movie.rating} />
        <span>{movie.name}</span>
        <br />
        <span>{movie.date}</span>
      </div>
      <br />
      <br />
    </div>
  );
};
