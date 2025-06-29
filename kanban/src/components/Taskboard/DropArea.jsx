import React, { useState } from "react";
import "./DropArea.css";
const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={showDrop ? "drop-area" : "hide-drop"}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
