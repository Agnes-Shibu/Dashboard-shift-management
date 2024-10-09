import React, { useState } from "react";
import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

// Parent Card component
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
      {expanded ? (
        <ExpandedCard
          param={props}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        <CompactCard
          param={props}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </AnimatePresence>
  );
};

// CompactCard component
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layout // Enabling layout animation for CompactCard
      onClick={setExpanded}
    >
      <div className="detail">
        <span>{param.title}</span>
        <ul>
          {param.today.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ExpandedCard component
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layout // Enabling layout animation for ExpandedCard
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }} // Animation for when the card is closed
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="shiftContainer">
        <table className="shiftTable">
          <thead>
            <tr>
              <th colSpan={2}>Day</th>
              <th>FTS</th>
            </tr>
          </thead>
          <tbody>
            {param.weekDetails.map((day, index) => (
              <tr key={index}>
                <td>{day.dat}</td>
                <td>{day.day}</td>
                <td>{day.mem.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Card;
