import React, { useState } from "react";

import MenuList from "./MenuList";

const MenuItem = ({ list }) => {
    const[currentChild, setCurrentChild]  = useState({});
 

    const handleToggle = (e,currentLabel)=>{
       setCurrentChild({
        ...currentChild,
        [currentLabel]:!currentChild[currentLabel],
       })
       
    }


  return (
    <>
      {list?.map((item) => (
        <li key={item.label} className="p-1 text-gray-600 ">
            {item.label.toUpperCase()} 
            {
                 item?.children ? currentChild[item.label] 
                    ? <span onClick={(e)=> handleToggle(e, item.label)} className="text-2xl text-black inline-block ml-3">-</span>
                    : <span onClick={(e)=> handleToggle(e, item.label)} className="text-2xl text-black inline-block ml-3">+</span>
                :null    
            }
            {
                item?.children ? currentChild[item.label] 
                    ? <MenuList key={item.children.label} list={item.children} />
                    : null
                :null    
            }
        </li>
      ))}
    </>
  );
};

export default MenuItem;
