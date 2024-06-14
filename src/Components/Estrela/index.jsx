import React, { useState } from "react";
import styled from "styled-components";
import { IoIosStar } from "react-icons/io";

const Star = styled(IoIosStar)`
  cursor: pointer;
  color: ${(props) => (props.active ? "gold" : "gray")};
  &:hover {
    color: gold;
  }
`;

const Estrela = ({ totalEstrelas = 5 }) => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(totalEstrelas)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <Star
            key={index}
            size={24}
            active={ratingValue <= (hover || rating)}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

export default Estrela;
