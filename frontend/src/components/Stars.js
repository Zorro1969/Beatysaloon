import React, { useState } from "react";

function Stars(props) {
  const [rating, setRating] = useState(0);
  fetch(`/rating${props.id}`).then((rating) => setRating(rating));

  const handleStarClick = (index) => {
    setRating(index + 1);
    fetch("/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John Doe",
        email: "john.doe@example.com",
      }),
    });
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    const starClass = i < rating ? "star filled" : "star empty";
    stars.push(
      <span
        className={starClass}
        key={i}
        onClick={() => handleStarClick(i)}
      ></span>
    );
  }

  return <div className="stars">{stars}</div>;
}

export default Stars;
