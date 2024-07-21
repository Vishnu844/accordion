import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="accordion-container">
        {items.map((item, index) => {
          return (
            <div key={index} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => handleClick(index)}
              >
                {item.id}
                <div className="toggle-icon">
                  {index === activeIndex ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              {index === activeIndex && (
                <div className="accordion-content">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
