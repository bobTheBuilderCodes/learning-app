"use client";

import React, { useState } from "react";
import "..";
const CustomSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close sidebar" : "Open sidebar"}
      </button>
      {isOpen && (
        <div className="sidebar-content">
          <p>Content 1</p>
          <p>Content 2</p>
          <p>Content 3</p>
        </div>
      )}
    </div>
  );
};

export default CustomSidebar;
