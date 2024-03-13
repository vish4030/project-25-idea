import React, { useState } from "react";

const AccordionItem = ({ active, id, handleClick }) => {
  return (
    <div className=" border-solid border-2 border-gray-500 rounded-lg p-3 mb-3">
      <h3 className={`text-2xl text-black ${active && "text-red-600"}`}>
        Lorem ipsum dolor sit amet.
      </h3>
      {active ? (
        <span
          className=" border-solid border-2 border-green-200 rounded-lg px-2 pr-2"
          onClick={() => handleClick(id, "hide")}
        >
          hide
        </span>
      ) : (
        <span
          className=" border-solid border-2 border-green-200 rounded-lg px-2 pr-2"
          onClick={() => handleClick(id, "show")}
        >
          show
        </span>
      )}
      <p className={`p-2 ${!active && "hidden"} text-green-600 `}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        officiis voluptas culpa mollitia ducimus nobis!
      </p>
    </div>
  );
};

const Accordion = () => {
  const [activeLi, setActiveLi] = useState("0");
  const [multiSelect, setMultiSelect] = useState(false);

  const handleHideShow = (id, hideShow) => {
    if (hideShow == "hide") {
      setActiveLi("");
    } else {
      setActiveLi(id);
    }
  };

  const changeMulti = () => {
    setMultiSelect(!multiSelect);
  };

  return (
    <div className=" w-6/12 m-auto">
      <button
        onClick={() => changeMulti()}
        className={`border-solid border-2 border-gray-600 rounded-md text-gray-950  ${
          multiSelect && "bg-green-600"
        }`}
      >
        Multiselect enable
      </button>
      <AccordionItem
        active={activeLi == "0" || multiSelect}
        id="0"
        handleClick={handleHideShow}
      />
      <AccordionItem
        active={activeLi == "1" || multiSelect}
        id="1"
        handleClick={handleHideShow}
      />
      <AccordionItem
        active={activeLi == "2" || multiSelect}
        id="2"
        handleClick={handleHideShow}
      />
      <AccordionItem
        active={activeLi == "3" || multiSelect}
        id="3"
        handleClick={handleHideShow}
      />
    </div>
  );
};

export default Accordion;
