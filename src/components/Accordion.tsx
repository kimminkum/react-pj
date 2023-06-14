import React, { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  date: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p className="pr_title">{title}</p>

        <p className="pr_date">{date}</p>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
