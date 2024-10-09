import React, { useState } from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            today={card.today}
            weekDetails={card.weekDetails}
            isExpanded={expandedCardIndex === id}
            onExpand={() => handleExpand(id)}
            cardId={id}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
