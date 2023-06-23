import React, { useState } from "react";
import Stars from "./Stars";
export default function Procedure({ id }) {
  fetch(`/${id}`).then((data) => data.json().then(
    return (
      <div className="Procedure">
        <h2></h2>
        <Stars id={id} />
      </div>
    );
  ))};

